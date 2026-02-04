const db = require('../../config/database');

const findByType = async (type) => {
  const result = await db.query(
    'SELECT * FROM contents WHERE type = $1',
    [type]
  );
  return result.rows[0];
};

const create = async (type, title, content) => {
  await db.query(
    `INSERT INTO contents (type, title, content)
     VALUES ($1, $2, $3)`,
    [type, title, content]
  );
};

const update = async (type, title, content) => {
  await db.query(
    `UPDATE contents
     SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP
     WHERE type = $3`,
    [title, content, type]
  );
};

module.exports = {
  findByType,
  create,
  update
};
