const validatePost = (req, res, next) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    return res.status(400).json({ error: "Title, content, and author are required" });
  }
  if (typeof title !== "string" || typeof content !== "string" || typeof author !== "string") {
    return res.status(400).json({ error: "Title, content, and author must be strings" });
  }
  if (title.trim().length === 0 || content.trim().length === 0 || author.trim().length === 0) {
    return res.status(400).json({ error: "Fields cannot be empty" });
  }
  next();
};
module.exports = { validatePost };
