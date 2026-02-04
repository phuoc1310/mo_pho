const eventRepository = require('../repositories/event_repository');

/**
 * UC-05: Lấy danh sách hoạt động đã công bố
 */
const getAllEvents = async () => {
  return await eventRepository.findAllPublished();
};

/**
 * UC-05: Lấy chi tiết 1 hoạt động
 */
const getEventById = async (id) => {
  return await eventRepository.findById(id);
};

module.exports = {
  getAllEvents,
  getEventById
};
