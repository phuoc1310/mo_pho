const express = require('express');
const router = express.Router();
const controller = require('../controllers/event_admin_controller');
const { verifyToken, authorizeRoles } = require('../middlewares/auth_middleware');

// UC-11: Thêm sự kiện
router.post(
  '/',
  verifyToken,
  authorizeRoles('BSTN_MANAGER', 'ADMIN'),
  controller.createEvent
);

// UC-11: Cập nhật sự kiện
router.put(
  '/:id',
  verifyToken,
  authorizeRoles('BSTN_MANAGER', 'ADMIN'),
  controller.updateEvent
);

// UC-11: Công bố sự kiện
router.put(
  '/:id/publish',
  verifyToken,
  authorizeRoles('BSTN_MANAGER', 'ADMIN'),
  controller.publishEvent
);

// UC-11: Xóa sự kiện
router.delete(
  '/:id',
  verifyToken,
  authorizeRoles('BSTN_MANAGER', 'ADMIN'),
  controller.deleteEvent
);

module.exports = router;
