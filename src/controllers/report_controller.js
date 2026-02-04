const reportService = require('../services/report_service');

const createOrUpdateReport = async (req, res) => {
  try {
    await reportService.createOrUpdate(req.body);
    res.json({ message: 'Lưu báo cáo thành công' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const publishReport = async (req, res) => {
  try {
    await reportService.publish(req.params.id);
    res.json({ message: 'Công bố báo cáo thành công' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createOrUpdateReport,
  publishReport
};
