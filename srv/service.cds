using purchaseOrder.inboundDeliveryDocCreation as model from '../db/schema';
using API_PURCHASEORDER_PROCESS_SRV as externalPuOrder from './external/API_PURCHASEORDER_PROCESS_SRV.csn';
// using API_INBOUND_DELIVERY_SRV_0002 as inboundDel from './external/API_INBOUND_DELIVERY_SRV_0002.csn';

@path:'service'
service AdminService {
    @cds.persistence.skip
    entity PurchaseOrder as projection on externalPuOrder.A_PurchaseOrder {
        key PurchaseOrder,
            AddressCityName,
            AddressCountry,
            AddressPostalCode,
            AddressStreetName,
            AddressHouseNumber
    }

    @topic : 'poc/PurchaseOrder/em/ce/sap/s4/beh/purchaseorder/v1/PurchaseOrder/Created/v1'
    event PurchaseOrderCreated {
        PurchaseOrderID : String;
    }

    @topic : 'poc/PurchaseOrder/em/ce/sap/s4/beh/purchaseorder/v1/PurchaseOrder/Changed/v1'
    event PurchaseOrderChanged {
        PurchaseOrderID : String;
    }
}

annotate AdminService with @(requires : 'authenticated-user');

annotate AdminService.PurchaseOrder with @(restrict : [{
    grant : ['*'],
    to    : 'POAdmin'
}]);
