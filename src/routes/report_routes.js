const express = require('express');
const router = express.Router();
const controller = require('../controllers/report_controller');
const { verifyToken, authorizeRoles } = require('../middlewares/auth_middleware');

router.post(
  '/',
  verifyToken,
  authorizeRoles('BSTN_MANAGER', 'ADMIN'),
  controller.createOrUpdateReport
);

router.put(
  '/:id/publish',
  verifyToken,
  authorizeRoles('BSTN_MANAGER', 'ADMIN'),
  controller.publishReport
);

module.exports = router;
