const db = require('../../config/database');

const getAllProducts = async () => {
  const result = await db.query(`
    SELECT id, name, category, description, price, status, created_at
    FROM products
    WHERE status = 'DANG_BAN'
    ORDER BY created_at DESC
  `);
  return result.rows;
};

const createProduct = async (data) => {
  const { name, category, description, price, status } = data;

  const result = await db.query(
    `INSERT INTO products (name, category, description, price, status)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [name, category, description, price, status || 'DANG_BAN']
  );

  return result.rows[0];
};

const updateProduct = async (id, data) => {
  const { name, category, description, price, status } = data;

  await db.query(
    `UPDATE products
     SET name=$1, category=$2, description=$3, price=$4, status=$5
     WHERE id=$6`,
    [name, category, description, price, status, id]
  );
};
const findById = async (id) => {
  const rs = await pool.query(
    'SELECT * FROM products WHERE id = $1',
    [id]
  );
  return rs.rows[0];
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  findById
};
