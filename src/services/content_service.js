const contentRepository = require('../repositories/content_repository');

/**
 * UC-10: Lấy nội dung theo loại
 */
const getContentByType = async (type) => {
  return await contentRepository.findByType(type);
};

/**
 * UC-10: Cập nhật nội dung
 */
const updateContent = async (type, title, content) => {
  if (!title || !content) {
    throw new Error('Vui lòng nhập đầy đủ tiêu đề và nội dung');
  }

  const existing = await contentRepository.findByType(type);

  if (existing) {
    return await contentRepository.update(type, title, content);
  } else {
    return await contentRepository.create(type, title, content);
  }
};

module.exports = {
  getContentByType,
  updateContent
};
