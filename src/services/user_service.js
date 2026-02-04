const bcrypt = require('bcrypt');
const userRepository = require('../repositories/user_repository');

const createUser = async (data) => {
  const { username, password, role } = data;

  if (!username || !password || !role) {
    throw new Error('Thiếu thông tin tài khoản');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return await userRepository.createUser({
    username,
    password: hashedPassword,
    role
  });
};

const updateUserRole = async (id, role) => {
  if (!role) {
    throw new Error('Thiếu vai trò');
  }
  return await userRepository.updateUserRole(id, role);
};

const lockUser = async (id) => {
  return await userRepository.lockUser(id);
};

module.exports = {
  createUser,
  updateUserRole,
  lockUser
};
