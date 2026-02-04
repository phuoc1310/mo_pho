const pool = require('../../config/database');

/**
 * UC-05: Danh sách hoạt động đã công bố
 */
const findAllPublished = async () => {
  const result = await pool.query(
    `SELECT id, title, description, image, start_date, end_date
     FROM events
     WHERE status = 'PUBLISHED'
     ORDER BY start_date DESC`
  );
  return result.rows;
};

/**
 * UC-05: Chi tiết hoạt động
 */
const findById = async (id) => {
  const result = await pool.query(
    `SELECT * FROM events WHERE id = $1 AND status = 'PUBLISHED'`,
    [id]
  );
  return result.rows[0];
};

const create = async (e) => {
  const { title, description, image, start_date, end_date, target_amount } = e;
  await pool.query(
    `INSERT INTO events (title, description, image, start_date, end_date, target_amount, status)
     VALUES ($1,$2,$3,$4,$5,$6,'DRAFT')`,
    [title, description, image, start_date, end_date, target_amount]
  );
};

const update = async (id, e) => {
  await pool.query(
    `UPDATE events
     SET title=$1, description=$2, image=$3,
         start_date=$4, end_date=$5, target_amount=$6,
         updated_at = CURRENT_TIMESTAMP
     WHERE id=$7`,
    [e.title, e.description, e.image, e.start_date, e.end_date, e.target_amount, id]
  );
};

const updateStatus = async (id, status) => {
  await pool.query(
    `UPDATE events SET status=$1 WHERE id=$2`,
    [status, id]
  );
};

const remove = async (id) => {
  await pool.query(`DELETE FROM events WHERE id=$1`, [id]);
};

const hasReport = async (eventId) => {
  const result = await pool.query(
    `SELECT 1 FROM reports WHERE event_id=$1 LIMIT 1`,
    [eventId]
  );
  return result.rowCount > 0;
};

module.exports = {
  findAllPublished,
  findById,
  create,
  update,
  updateStatus,
  remove,
  hasReport
};
