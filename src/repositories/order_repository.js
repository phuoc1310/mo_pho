const db = require('../../config/database');

/**
 * UC-04: Tạo đơn hàng
 */
const createOrder = async (order) => {
  const { customer_name, phone, address, note } = order;

  const result = await db.query(
    `INSERT INTO orders (customer_name, phone, address, note, status)
     VALUES ($1, $2, $3, $4, 'MOI')
     RETURNING id`,
    [customer_name, phone, address, note]
  );

  return result.rows[0];
};

/**
 * UC-09: Danh sách đơn hàng
 */
const getAllOrders = async () => {
  const result = await db.query(
    `SELECT id, customer_name, phone, address, note, status, created_at
     FROM orders
     ORDER BY created_at DESC`
  );
  return result.rows;
};

/**
 * UC-09: Chi tiết đơn hàng
 */
const getOrderById = async (id) => {
  const result = await db.query(
    `SELECT * FROM orders WHERE id = $1`,
    [id]
  );
  return result.rows[0];
};

/**
 * UC-09: Update trạng thái
 */
const updateOrderStatus = async (id, status) => {
  await db.query(
    `UPDATE orders SET status = $1 WHERE id = $2`,
    [status, id]
  );
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus
};
