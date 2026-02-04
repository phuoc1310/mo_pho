const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user_repository');

/**
 * UC-07: Đăng nhập hệ thống
 * Actor: Mo Pho Manager, BSTN Manager, Admin
 */
const login = async (username, password) => {
  const user = await userRepository.findByUsername(username);

  if (!user) {
    throw new Error('Invalid username or password');
  }

  // Kiểm tra trạng thái tài khoản
  if (user.status !== 'ACTIVE') {
    throw new Error('Account is locked');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid username or password');
  }

  // Tạo JWT
  const token = jwt.sign(
    {
      id: user.id,
      role: user.role,
      status: user.status
    },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return {
    token,
    role: user.role
  };
};

module.exports = { login };
