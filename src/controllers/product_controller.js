const productService = require('../services/product_service');

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm' });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    await productService.updateProduct(req.params.id, req.body);
    res.json({ message: 'Cập nhật sản phẩm thành công' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product || product.status !== 'DANG_BAN') {
      return res.status(404).json({ message: 'Sản phẩm không tồn tại hoặc đã ngưng bán' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi hệ thống' });
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  getProductById
};
