const { ApplicationService } = require('@sap/cds');
const { PURCHASEORDERTOPICBASE } = require('./common/constants');

module.exports = class AdminService extends ApplicationService {
  async init() {
    const messagingService = await cds.connect.to('messaging');
    this.poSrv = await cds.connect.to('API_PURCHASEORDER_PROCESS_SRV');
    messagingService.before('*', (msg) => {
      console.log(`Received message with event ${msg.event}`, 'and headers ', JSON.stringify(msg.headers));
    });

    this.on('READ', 'PurchaseOrder', this.delegateQuery)
    this.on('READ', 'PurchaseOrderItem', this.delegateQuery)

    messagingService.on(`${PURCHASEORDERTOPICBASE}Created/v1`, this.handlePurchaseOrderCreated);
    messagingService.on(`${PURCHASEORDERTOPICBASE}Changed/v1`, this.handlePurchaseOrderChanged);

    super.init();
  }

  delegateQuery = async req => {
    return this.run(req.query);
  }

  handlePurchaseOrderCreated = async (msg) => {
    const { PurchaseOrder: purchaseOrderID } = msg.data;
    if (await this.getLocalPurchaseOrder(purchaseOrderID, msg)) {
      console.warn(`PurchaseOrder ${purchaseOrderID} already persisted, no need to proceed`);
      return;
    }
    console.log(purchaseOrderID);
    const {s4PurchaseOrder, s4PurchaseOrderItem} = await this.getPurchaseOrderFromS4(purchaseOrderID, msg);

    if (!s4PurchaseOrder || !s4PurchaseOrderItem) return;
    //check error handling

    const {purchaseOrder, purchaseOrderItem} = this.cloneRemoteToLocalPurchaseOrder(s4PurchaseOrder, s4PurchaseOrderItem);

    const localPurchaseOrder = await this.createLocalPurchaseOrder(msg, purchaseOrder, purchaseOrderItem);
    console.log('Local purchaseOrder created', localPurchaseOrder);
    if (!localPurchaseOrder) {
      msg.error('400', 'technical error while inserting new Purchase Order');
    }
  }

  handlePurchaseOrderChanged = async (msg) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { PurchaseOrder: purchaseOrderID } = msg.data;
    console.log(purchaseOrderID);

    const {s4PurchaseOrder, s4PurchaseOrderItem} = await this.getPurchaseOrderFromS4(purchaseOrderID, msg);

    const localPurchaseOrder = await this.getLocalBusinessPartner(purchaseOrderID, msg);
    console.log('Local purchaseOrder found', localPurchaseOrder);

    const {purchaseOrder, purchaseOrderItem} = this.cloneRemoteToLocalPurchaseOrder(s4PurchaseOrder, s4PurchaseOrderItem);
    if (!localPurchaseOrder) {
      this.createLocalPurchaseOrder(msg, purchaseOrder, purchaseOrderItem);
    } else {
      this.updateLocalPurchaseOrder(msg, purchaseOrder, purchaseOrderItem);
    }
  }


  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  getPurchaseOrderFromS4 = async (purchaseOrderID, req) => {
    try {
      const s4PurchaseOrder = await this.poSrv?.tx(req).run(
        SELECT.one('AdminService.PurchaseOrder', (po) => {
          po.PurchaseOrder, po.AddressHouseNumber, po.AddressCityName, po.AddressStreetName, po.AddressCountry, po.AddressPostalCode,po.Supplier;
        }).where({ PurchaseOrder: purchaseOrderID })
      );
      console.log(s4PurchaseOrder, 's4PurchaseOrder');
      const s4PurchaseOrderItem = await this.poSrv?.tx(req).run(
        SELECT.one('AdminService.PurchaseOrderItem', (po) => {
          po.PurchaseOrder, po.DeliveryAddressCityName, po.DeliveryAddressCountry;
        }).where({ PurchaseOrder: purchaseOrderID })
      );
      console.log(s4PurchaseOrderItem, 's4PurchaseOrderItem');
      return {s4PurchaseOrder:s4PurchaseOrder, s4PurchaseOrderItem:s4PurchaseOrderItem};
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  getLocalPurchaseOrder = async (purchaseOrderID, req) => {
    const localPurchaseOrder = await cds.tx(req).run(
      SELECT.one('AdminService.PurchaseOrder', (po) => {
        po.PurchaseOrder,
          po.AddressCityName,
          po.AddressCountry,
          po.AddressPostalCode,
          po.AddressStreetName,
          po.AddressHouseNumber,
          po.Supplier
      }).where({ PurchaseOrder: purchaseOrderID })
    );
    console.log(localPurchaseOrder, 'localPurchaseOrder');
    return localPurchaseOrder;
  }

  cloneRemoteToLocalPurchaseOrder = (puchaseOrders4, s4PurchaseOrderItem) => {
    const purchaseOrder = {};
    const purchaseOrderItem = {};
    Object.assign(purchaseOrder, puchaseOrders4);
    Object.assign(purchaseOrderItem, s4PurchaseOrderItem);
    console.log(purchaseOrder, purchaseOrderItem);
    return {purchaseOrder, purchaseOrderItem};
  }

  createLocalPurchaseOrder = async (req, purchaseOrder, purchaseOrderItem) => {
    const insertResult = await cds.tx(req).run(INSERT.into('AdminService.PurchaseOrder').entries(purchaseOrder));
    const PurchaseOrderIteminsertResult = await cds.tx(req).run(INSERT.into('AdminService.PurchaseOrderItem').entries(purchaseOrderItem));
    if (!insertResult || !PurchaseOrderIteminsertResult) {
      console.error(`ERROR: couldn't insert new purchase order entry for PurchaseOrder ${purchaseOrder.PurchaseOrder} , skip processing`);
      return false;
    }
    console.log(`Saved PurchaseOrder ${purchaseOrder.PurchaseOrder} to the HDI Container on SAP HANA Cloud`);
    return true;
  }

  updateLocalPurchaseOrder = async (req, purchaseOrder) => {
    try {
      cds.tx(async () => {
        const updateResult = await cds.run(UPDATE.entity('AdminService.PurchaseOrder').set(purchaseOrder).where({ PurchaseOrder: purchaseOrder.PurchaseOrder }));
        console.log(updateResult, 'updateResult');
        console.log(`Updating BusinessPartner ${purchaseOrder.PurchaseOrder} in SAP HANA Cloud`);
        if (!updateResult) return false;
      });
    } catch (error) {
      console.log('error: ' + error);
      return false;
    }
    return true;
  }
};
