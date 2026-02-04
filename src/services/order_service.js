const orderRepository = require('../repositories/order_repository');

/**
 * UC-04: Tạo đơn hàng
 */
const createOrder = async (data) => {
  const { customer_name, phone, address } = data;

  if (!customer_name || !phone || !address) {
    throw new Error('Vui lòng điền đầy đủ thông tin');
  }

  const phoneRegex = /^0\d{9,10}$/;
  if (!phoneRegex.test(phone)) {
    throw new Error('Số điện thoại không hợp lệ');
  }

  return await orderRepository.createOrder(data);
};

/**
 * UC-09: Danh sách đơn hàng
 */
const getAllOrders = async () => {
  return await orderRepository.getAllOrders();
};

/**
 * UC-09: Chi tiết đơn hàng
 */
const getOrderById = async (id) => {
  return await orderRepository.getOrderById(id);
};

/**
 * UC-09: Cập nhật trạng thái
 */
const updateOrderStatus = async (id, status) => {
  const allowedStatus = ['MOI', 'DA_LIEN_HE', 'HOAN_TAT', 'DA_HUY'];

  if (!allowedStatus.includes(status)) {
    throw new Error('Trạng thái không hợp lệ');
  }

  return await orderRepository.updateOrderStatus(id, status);
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus
};
