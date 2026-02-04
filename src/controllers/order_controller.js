const orderService = require('../services/order_service');

/**
 * UC-04: Member đặt mua
 */
const createOrder = async (req, res) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json({
      message: 'Đặt hàng thành công! Chúng tôi sẽ liên hệ bạn sớm.',
      orderId: order.id
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * UC-09: Xem danh sách đơn hàng
 */
const getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (err) {
    console.error('GET /api/orders error:', err);
    res.status(500).json({ message: 'Lỗi khi lấy danh sách đơn hàng' });
  }
};

/**
 * UC-09: Xem chi tiết đơn hàng
 */
const getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Không tìm thấy đơn hàng' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy đơn hàng' });
  }
};

/**
 * UC-09: Cập nhật trạng thái
 */
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    await orderService.updateOrderStatus(req.params.id, status);
    res.json({ message: 'Cập nhật trạng thái đơn hàng thành công' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus
};
