const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const type = 'SUM';
  const total = Utils.calculateNumber(type, totalAmount, totalShipping);

  Utils.log(`The total is: ${total}`);
};

module.exports = sendPaymentRequestToApi;
