sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'purchaseorder/test/integration/FirstJourney',
		'purchaseorder/test/integration/pages/PurchaseOrderList',
		'purchaseorder/test/integration/pages/PurchaseOrderObjectPage'
    ],
    function(JourneyRunner, opaJourney, PurchaseOrderList, PurchaseOrderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('purchaseorder') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePurchaseOrderList: PurchaseOrderList,
					onThePurchaseOrderObjectPage: PurchaseOrderObjectPage
                }
            },
            opaJourney.run
        );
    }
);