const contentService = require('../services/content_service');

/**
 * UC-10: Xem nội dung
 */
const getContentByType = async (req, res) => {
  try {
    const content = await contentService.getContentByType(req.params.type);
    if (!content) {
      return res.status(404).json({ message: 'Nội dung chưa được cập nhật' });
    }
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy nội dung' });
  }
};

/**
 * UC-10: Cập nhật nội dung
 */
const updateContent = async (req, res) => {
  try {
    const { title, content } = req.body;
    await contentService.updateContent(req.params.type, title, content);
    res.json({ message: 'Cập nhật nội dung thành công' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getContentByType,
  updateContent
};
