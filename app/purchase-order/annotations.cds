using AdminService as service from '../../srv/service';

annotate service.PurchaseOrder with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'PurchaseOrder',
            Value : PurchaseOrder,
        },
        {
            $Type : 'UI.DataField',
            Label : 'AddressStreetName',
            Value : AddressStreetName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'AddressCityName',
            Value : AddressCityName,
        },
        {
            $Type : 'UI.DataField',
            Label : 'AddressCountry',
            Value : AddressCountry,
        },
        {
            $Type : 'UI.DataField',
            Label : 'AddressPostalCode',
            Value : AddressPostalCode,
        },
    ]
);
annotate service.PurchaseOrder with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'PurchaseOrder',
                Value : PurchaseOrder,
            },
            {
                $Type : 'UI.DataField',
                Label : 'AddressHouseNumber',
                Value : AddressHouseNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'AddressStreetName',
                Value : AddressStreetName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'AddressCityName',
                Value : AddressCityName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'AddressCountry',
                Value : AddressCountry,
            },
            {
                $Type : 'UI.DataField',
                Label : 'AddressPostalCode',
                Value : AddressPostalCode,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Supplier',
                Value : Supplier,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
