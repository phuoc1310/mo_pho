const authService = require('../services/auth_service');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const result = await authService.login(username, password);

    res.json(result);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

module.exports = { login };
