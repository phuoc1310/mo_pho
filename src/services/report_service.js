const reportRepository = require('../repositories/report_repository');

const createOrUpdate = async (data) => {
  const { event_id, total_donation, total_expense, description } = data;
  if (!event_id || !total_donation || !total_expense || !description) {
    throw new Error('Thiếu thông tin báo cáo');
  }
  return await reportRepository.createOrUpdate(data);
};

const publish = async (id) => {
  return await reportRepository.updateStatus(id, 'PUBLISHED');
};

module.exports = {
  createOrUpdate,
  publish
};
