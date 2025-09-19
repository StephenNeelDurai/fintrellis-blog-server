const service = require('../services/post.service');

async function create(req, res, next) {
  try {
    const created = await service.createPost(req.body);
    return res.status(201).json(created);
  } catch (err) { next(err); }
}

async function getById(req, res, next) {
  try {
    const post = await service.getPost(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    return res.json(post);
  } catch (err) { next(err); }
}

async function list(req, res, next) {
  try {
    const page = parseInt(req.query.page || 0);
    const size = parseInt(req.query.size || 10);
    // Posts result with pagination
    const result = await service.listPosts({ page, size });
    return res.json({ total: result.count, posts: result.rows });
  } catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const updated = await service.updatePost(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Post not found' });
    return res.json(updated);
  } catch (err) { next(err); }
}

async function remove(req, res, next) {
  try {
    const ok = await service.deletePost(req.params.id);
    if (!ok) return res.status(404).json({ message: 'Post not found' });
    return res.status(204).send();
  } catch (err) { next(err); }
}

module.exports = { create, getById, list, update, remove };
