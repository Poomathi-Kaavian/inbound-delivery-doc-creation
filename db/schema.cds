namespace purchaseOrder.inboundDeliveryDocCreation;

using {
    managed,
    cuid
} from '@sap/cds/common';

entity PurchaseOrder : managed, cuid {
    @readonly PurchaseOrder : String;
            AddressCityName : String;
            AddressCountry : String;
            AddressPostalCode : String;
            AddressStreetName : String;
            AddressHouseNumber : String;
}

annotate PurchaseOrder with {
    PurchaseOrder @title : 'PurchaseOrder ID'  @readonly;
}

entity freightVendor : managed, cuid {
    key ID: Integer;
    vendorName:String;
    pickUpLocation:String;
    destinationLocation:String;
    deliveryDays:Integer;
    contact:Int64;
    price:Int64;
}