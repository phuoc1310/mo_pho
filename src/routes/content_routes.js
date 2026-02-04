const express = require('express');
const router = express.Router();
const controller = require('../controllers/content_controller');
const { verifyToken, authorizeRoles } = require('../middlewares/auth_middleware');

/**
 * UC-10: Xem nội dung (Guest, Member)
 */
router.get('/:type', controller.getContentByType);

/**
 * UC-10: Cập nhật nội dung
 * Actor: MO_PHO_MANAGER, ADMIN
 */
router.put(
  '/:type',
  verifyToken,
  authorizeRoles('MO_PHO_MANAGER', 'ADMIN'),
  controller.updateContent
);

module.exports = router;
