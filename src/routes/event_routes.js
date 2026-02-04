const express = require('express');
const router = express.Router();
const controller = require('../controllers/event_controller');

/**
 * UC-05: Xem danh sách hoạt động gây quỹ
 * Actor: Guest, Member
 */
router.get('/', controller.getAllEvents);

/**
 * UC-05: Xem chi tiết hoạt động gây quỹ
 * Actor: Guest, Member
 */
router.get('/:id', controller.getEventById);

module.exports = router;
