const { ApplicationService } = require('@sap/cds');
const { PURCHASEORDERTOPICBASE } = require('./common/constants');

module.exports = class AdminService extends ApplicationService {
  async init() {
    const messagingService = await cds.connect.to('messaging');
    this.poSrv = await cds.connect.to('API_PURCHASEORDER_PROCESS_SRV');

    messagingService.before('*', (msg) => {
      console.log(`Received message with event ${msg.event}`, 'and headers ', JSON.stringify(msg.headers));
    });

    messagingService.on(`${PURCHASEORDERTOPICBASE}Created/v1`, (msg) => {
      console.log(msg.data);
    });

    messagingService.on(`${PURCHASEORDERTOPICBASE}Changed/v1`, (msg) => {
      console.log(msg.data);
    });

    super.init();
  }
};
