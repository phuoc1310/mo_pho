const express = require('express');
const router = express.Router();
const controller = require('../controllers/report_shop_controller');
const { verifyToken, authorizeRoles } = require('../middlewares/auth_middleware');

// UC-13: Xem báo cáo thu chi shop
router.get(
  '/',
  verifyToken,
  authorizeRoles('MO_PHO_MANAGER', 'ADMIN'),
  controller.getShopReport
);

module.exports = router;
