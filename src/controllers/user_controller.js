const userService = require('../services/user_service');

/**
 * UC-14: Tạo tài khoản
 */
const createUser = async (req, res) => {
  try {
    await userService.createUser(req.body);
    res.status(201).json({ message: 'Tạo tài khoản thành công' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * UC-14: Sửa vai trò
 */
const updateUserRole = async (req, res) => {
  try {
    await userService.updateUserRole(req.params.id, req.body.role);
    res.json({ message: 'Cập nhật vai trò thành công' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

/**
 * UC-14: Khóa tài khoản
 */
const lockUser = async (req, res) => {
  try {
    await userService.lockUser(req.params.id);
    res.json({ message: 'Khóa tài khoản thành công' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createUser,
  updateUserRole,
  lockUser
};
