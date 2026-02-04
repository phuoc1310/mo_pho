const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_controller');
const { verifyToken, authorizeRoles } = require('../middlewares/auth_middleware');

// UC-14: Tạo tài khoản
router.post(
  '/',
  verifyToken,
  authorizeRoles('ADMIN'),
  controller.createUser
);

// UC-14: Sửa vai trò
router.put(
  '/:id',
  verifyToken,
  authorizeRoles('ADMIN'),
  controller.updateUserRole
);

// UC-14: Khóa tài khoản
router.put(
  '/:id/lock',
  verifyToken,
  authorizeRoles('ADMIN'),
  controller.lockUser
);

module.exports = router;
