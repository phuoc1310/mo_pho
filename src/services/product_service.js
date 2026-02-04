const productRepository = require('../repositories/product_repository');

const getAllProducts = async () => {
  return await productRepository.getAllProducts();
};

const createProduct = async (data) => {
  if (!data.name || !data.category) {
    throw new Error('Missing required fields');
  }
  return await productRepository.createProduct(data);
};

const updateProduct = async (id, data) => {
  return await productRepository.updateProduct(id, data);
};
const getProductById = (id) => productRepository.findById(id);

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  getProductById
};
