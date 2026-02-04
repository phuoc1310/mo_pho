const pool = require('../../config/database');

// Doanh thu theo danh mục
const revenueByCategory = async () => {
  const result = await pool.query(`
    SELECT p.category, COUNT(o.id) AS total_orders
    FROM orders o
    JOIN order_items oi ON o.id = oi.order_id
    JOIN products p ON oi.product_id = p.id
    GROUP BY p.category
  `);
  return result.rows;
};

// Số lượng đơn theo trạng thái
const orderCountByStatus = async () => {
  const result = await pool.query(`
    SELECT status, COUNT(*) AS total
    FROM orders
    GROUP BY status
  `);
  return result.rows;
};

module.exports = {
  revenueByCategory,
  orderCountByStatus
};
