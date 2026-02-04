const jwt = require('jsonwebtoken');

/**
 * Xác thực JWT
 * Áp dụng cho UC-08, UC-09, UC-10, UC-11, UC-12, UC-13, UC-14
 */
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Format: Authorization: Bearer <token>
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Invalid token format' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // decoded: { id, role, status }
    if (decoded.status === 'LOCKED') {
      return res.status(403).json({ message: 'Account is locked' });
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

/**
 * Phân quyền theo vai trò
 * BR-10, BR-11, BR-12, BR-13, BR-14
 */
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
};

module.exports = {
  verifyToken,
  authorizeRoles
};
