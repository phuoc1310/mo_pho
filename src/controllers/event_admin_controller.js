const eventRepository = require('../repositories/event_repository');

const createEvent = async (data) => {
  const { title, description, start_date, end_date } = data;
  if (!title || !description || !start_date || !end_date) {
    throw new Error('Thiếu thông tin bắt buộc');
  }
  return await eventRepository.create(data);
};

const updateEvent = async (id, data) => {
  return await eventRepository.update(id, data);
};

const publishEvent = async (id) => {
  return await eventRepository.updateStatus(id, 'PUBLISHED');
};

const deleteEvent = async (id) => {
  const hasReport = await eventRepository.hasReport(id);
  if (hasReport) {
    throw new Error('Không thể xóa sự kiện đã có báo cáo gây quỹ');
  }
  return await eventRepository.remove(id);
};

module.exports = {
  createEvent,
  updateEvent,
  publishEvent,
  deleteEvent
};
