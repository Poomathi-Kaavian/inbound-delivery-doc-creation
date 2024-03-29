using purchaseOrder.inboundDeliveryDocCreation as model from '../db/schema';
using API_PURCHASEORDER_PROCESS_SRV as externalBuPa from './external/API_PURCHASEORDER_PROCESS_SRV.csn';

@path:'service'
service AdminService {
    @cds.persistence.skip
    entity PurchaseOrder as projection on externalBuPa.A_PurchaseOrder {
        key PurchaseOrder,
            AddressCityName,
            AddressCountry,
            AddressPostalCode,
            AddressStreetName,
            AddressHouseNumber
    }

    @topic : 'poc/PurchaseOrder/em/ce/sap/s4/beh/purchaseorder/v1/PurchaseOrder/Created/v1'
    event PurchaseOrderCreated {
        BusinessPartnerID : String;
    }

    @topic : 'poc/PurchaseOrder/em/ce/sap/s4/beh/purchaseorder/v1/PurchaseOrder/Changed/v1'
    event PurchaseOrderChanged {
        BusinessPartnerID : String;
    }
}
