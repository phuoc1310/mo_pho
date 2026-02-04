const pool = require('../../config/database');

const createOrUpdate = async (r) => {
  const existing = await pool.query(
    `SELECT id FROM reports WHERE event_id=$1`,
    [r.event_id]
  );

  if (existing.rows.length > 0) {
    await pool.query(
      `UPDATE reports
       SET total_donation=$1, total_expense=$2, description=$3
       WHERE event_id=$4`,
      [r.total_donation, r.total_expense, r.description, r.event_id]
    );
  } else {
    await pool.query(
      `INSERT INTO reports (event_id, total_donation, total_expense, description)
       VALUES ($1,$2,$3,$4)`,
      [r.event_id, r.total_donation, r.total_expense, r.description]
    );
  }
};

const updateStatus = async (id, status) => {
  await pool.query(
    `UPDATE reports SET status=$1 WHERE id=$2`,
    [status, id]
  );
};

module.exports = {
  createOrUpdate,
  updateStatus
};
