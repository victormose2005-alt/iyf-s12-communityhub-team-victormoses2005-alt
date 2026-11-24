// Validates title, content, and author for a post

const validatePost = (req, res, next) => {
  const { title, content, author } = req.body || {};

  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }

  if (!content || typeof content !== 'string' || content.trim() === '') {
    return res.status(400).json({ error: 'Content is required' });
  }

  if (!author || typeof author !== 'string' || author.trim() === '') {
    return res.status(400).json({ error: 'Author is required' });
  }

  next();
};

export default validatePost;
