const eventService = require('../services/event_service');

/**
 * UC-05: Xem danh sách hoạt động gây quỹ
 */
const getAllEvents = async (req, res) => {
  try {
    const events = await eventService.getAllEvents();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách hoạt động' });
  }
};

/**
 * UC-05: Xem chi tiết hoạt động gây quỹ
 */
const getEventById = async (req, res) => {
  try {
    const event = await eventService.getEventById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: 'Không tìm thấy hoạt động' });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy chi tiết hoạt động' });
  }
};

module.exports = {
  getAllEvents,
  getEventById
};
