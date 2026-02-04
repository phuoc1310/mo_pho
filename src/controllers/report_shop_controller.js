const reportShopService = require('../services/report_shop_service');

const getShopReport = async (req, res) => {
  try {
    const report = await reportShopService.getShopReport();
    res.json(report);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy báo cáo thu chi' });
  }
};

module.exports = { getShopReport };
