const pool = require('../../config/database');

/**
 * UC-07: dùng cho login
 */
const findByUsername = async (username) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE username = $1',
    [username]
  );
  return result.rows[0];
};

/**
 * UC-14: Tạo tài khoản (Admin)
 */
const createUser = async ({ username, password, role }) => {
  await pool.query(
    `INSERT INTO users (username, password, role, status)
     VALUES ($1, $2, $3, 'ACTIVE')`,
    [username, password, role]
  );
};

/**
 * UC-14: Cập nhật vai trò
 */
const updateUserRole = async (id, role) => {
  await pool.query(
    `UPDATE users SET role = $1 WHERE id = $2`,
    [role, id]
  );
};

/**
 * UC-14: Khóa tài khoản
 */
const lockUser = async (id) => {
  await pool.query(
    `UPDATE users SET status = 'LOCKED' WHERE id = $1`,
    [id]
  );
};

module.exports = {
  findByUsername,
  createUser,
  updateUserRole,
  lockUser
};
