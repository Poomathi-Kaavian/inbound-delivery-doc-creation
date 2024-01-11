namespace purchaseOrder.inboundDeliveryDocCreation;

using {
    managed,
    cuid
} from '@sap/cds/common';

entity PurchaseOrder : managed, cuid {
    @readonly key PurchaseOrder      : String;
                  AddressCityName    : String;
                  AddressCountry     : String;
                  AddressPostalCode  : String;
                  AddressStreetName  : String;
                  AddressHouseNumber : String;
                  Supplier : String;
                  PurchaseOrderItem  : Association to PurchaseOrderItem on PurchaseOrderItem.PurchaseOrder = $self.PurchaseOrder;
}

entity PurchaseOrderItem : managed, cuid {
    @readonly key PurchaseOrder           : String;
                  DeliveryAddressCityName : String;
                  DeliveryAddressCountry  : String
}

annotate PurchaseOrder with {
    PurchaseOrder  @title: 'PurchaseOrder ID'  @readonly;
}

annotate PurchaseOrderItem with {
    PurchaseOrder  @title: 'PurchaseOrder ID'  @readonly;
}

entity freightVendor : managed, cuid {
    key ID                  : Integer;
        vendorName          : String;
        pickUpLocation      : String;
        destinationLocation : String;
        deliveryDays        : Integer;
        contact             : Int64;
        price               : Int64;
}