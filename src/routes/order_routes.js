const express = require('express');
const router = express.Router();
const controller = require('../controllers/order_controller');
const { verifyToken, authorizeRoles } = require('../middlewares/auth_middleware');

// =======================
// UC-04: Member đặt mua
// =======================
router.post('/', controller.createOrder);

// =======================
// UC-09: Quản lý đơn hàng
// Actor: MO_PHO_MANAGER, ADMIN
// =======================

// Xem danh sách đơn hàng
router.get(
  '/',
  verifyToken,
  authorizeRoles('MO_PHO_MANAGER', 'ADMIN'),
  controller.getAllOrders
);

// Xem chi tiết đơn hàng
router.get(
  '/:id',
  verifyToken,
  authorizeRoles('MO_PHO_MANAGER', 'ADMIN'),
  controller.getOrderById
);

// Cập nhật trạng thái đơn hàng
router.put(
  '/:id/status',
  verifyToken,
  authorizeRoles('MO_PHO_MANAGER', 'ADMIN'),
  controller.updateOrderStatus
);

module.exports = router;
