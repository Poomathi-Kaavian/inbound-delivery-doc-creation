const { ApplicationService } = require('@sap/cds');
const {PURCHASEORDERTOPICBASE} = require('./common/constants');

export class AdminService extends ApplicationService {
  constructor() {
    super();
    this.poSrv = null;
  }

  async init() {
    const messagingService = await cds.connect.to('messaging');
    this.poSrv = await cds.connect.to('API_PURCHASEORDER_PROCESS_SRV');

    messagingService.before('*', (msg) => {
      console.log(`Received message with event ${msg.event}`, 'and headers ', JSON.stringify(msg.headers));
    });


    messagingService.on(`${PURCHASEORDERTOPICBASE}Created/v1`, this.handlePurchaseOrderCreated);
    messagingService.on(`${PURCHASEORDERTOPICBASE}Changed/v1`, this.handlePurchaseOrderChanged);
    
    super.init();
  }

  handlePurchaseOrderCreated = async (msg) => {
    console.log(msg.data);

    // const { PurchaseOrder: purchaseOrderID } = msg.data;
    // if (await this.getLocalPurchaseOrder(purchaseOrderID, msg)) {
    //   console.warn(`PurchaseOrder ${purchaseOrderID} already persisted, no need to proceed`);
    //   return;
    // }
    // const purchaseOrderS4 = await this.getPurchaseOrderFromS4(purchaseOrderID, msg);

    // if (!purchaseOrderS4) return;
    // //check error handling

    // const verification = this.cloneRemoteToLocalPurchaseOrder(purchaseOrderS4);

    // const localPurchaseOrder = await this.createLocalPurchaseOrder(msg, verification);
    // if (!localBupa) {
    //   msg.error('400', 'technical error while inserting new Verification');
    // }
  }

  handlePurchaseOrderChanged = async (msg) => {
    console.log(msg.data);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // const { BusinessPartner: businessPartnerID } = msg.data;
    // const businessPartnerS4 = await this.getPurchaseOrderFromS4(businessPartnerID, msg);
    // const localBusinessPartner = await this.getLocalBusinessPartner(businessPartnerID, msg);
    // const verification = this.cloneRemoteToLocalPurchaseOrder(businessPartnerS4);
    // if (!localBusinessPartner) {
    //   this.createLocalPurchaseOrder(msg, verification);
    // } else {
    //   for (const addresses of verification.addresses) {
    //     addresses.verifications_ID = localBusinessPartner.ID;
    //   }
    //   this.updateLocalPurchaseOrder(msg, verification);
    // }
  }
  

  // // eslint-disable-next-line @typescript-eslint/no-misused-promises
  // getPurchaseOrderFromS4 = async (purchaseOrderID, req) => {
  //   try {
  //     const s4PurchaseOrder = await this.poSrv?.tx(req).run(
  //       SELECT.one('PurchaseOrder', (po) => {
  //         po.PurchaseOrder, po.AddressHouseNumber, po.AddressCityName, po.AddressStreetName, po.AddressCountry, po.AddressPostalCode;
  //       }).where({ PurchaseOrder: purchaseOrderID })
  //     );
  //     return s4PurchaseOrder;
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // }

  // getBusinessPartnerByUUID = async (UUID, req) => {
  //   const localBusinessPartner = await cds.tx(req).run(SELECT.one(model.Entity.BusinessPartnerVerification).where({ ID: UUID }));
  //   if (!localBusinessPartner) {
  //     console.error(`ERROR: couldn't find BusinessPartner for UUID ${UUID}, skip processing`);
  //     return null;
  //   } else {
  //     return localBusinessPartner;
  //   }
  // }

  // getLocalPurchaseOrder = async (purchaseOrderID, req) => {
  //   const localBusinessPartner = await cds.tx(req).run(
  //     SELECT.one(model.Entity.BusinessPartnerVerification, (bp) => {
  //       bp.ID
  //       bp.BusinessPartner, bp.BusinessPartnerIsBlocked, bp.FirstName, bp.LastName, bp.verificationStatus_code
  //       bp.addresses('*');
  //     }).where({ BusinessPartner: purchaseOrderID })
  //   );
  //   return localBusinessPartner;
  // }

  // cloneRemoteToLocalPurchaseOrder = (businessPartnerS4) => {
  //   const purchaseOrder = {};
  //   Object.assign(purchaseOrder, businessPartnerS4);
  //   return purchaseOrder;
  // }

  // createLocalPurchaseOrder = async (req, verification) => {
  //   const insertResult = await cds.tx(req).run(INSERT.into(model.Entity.BusinessPartnerVerification).entries(verification));
  //   if (!insertResult) {
  //     console.error(`ERROR: couldn't insert new verification entry for BusinessPartner ${verification.BusinessPartner} with status "${verification.verificationStatus_code}", skip processing`);
  //     return false;
  //   }
  //   console.log(`Saved BusinessPartner ${verification.BusinessPartner} to the HDI Container on SAP HANA Cloud`);
  //   return true;
  // }

  // updateLocalPurchaseOrder = async (req, verification) => {
  //   try {
  //     cds.tx(async () => {
  //       const updateResult = await cds.run(UPDATE.entity(model.Entity.BusinessPartnerVerification).set(verification).where({ BusinessPartner: verification.BusinessPartner }));
  //       console.log(`Updating BusinessPartner ${verification.BusinessPartner} in SAP HANA Cloud`);
  //       if (!updateResult) return false;
  //     });
  //   } catch (error) {
  //     console.log('error: ' + error);
  //     return false;
  //   }
  //   return true;
  // }
}