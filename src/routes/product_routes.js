const express = require('express');
const router = express.Router();
const controller = require('../controllers/product_controller');
const { verifyToken, authorizeRoles } = require('../middlewares/auth_middleware');

// Guest / Member
router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProductById);
// Mo Pho Manager + Admin
router.post(
  '/',
  verifyToken,
  authorizeRoles('MO_PHO_MANAGER', 'ADMIN'),
  controller.createProduct
);

router.put(
  '/:id',
  verifyToken,
  authorizeRoles('MO_PHO_MANAGER', 'ADMIN'),
  controller.updateProduct
);

module.exports = router;
