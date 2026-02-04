const reportShopRepository = require('../repositories/report_shop_repository');

const getShopReport = async () => {
  const revenueByCategory = await reportShopRepository.revenueByCategory();
  const orderByStatus = await reportShopRepository.orderCountByStatus();

  return {
    revenueByCategory,
    orderByStatus
  };
};

module.exports = { getShopReport };
