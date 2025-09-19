const db = require('../models');
const Post = db.Post;

async function createPost(data) {
  return await Post.create(data);
}

async function getPost(id) {
  return await Post.findByPk(id);
}

async function listPosts({ page = 0, size = 10 }) {
  const limit = Math.min(size, 100);
  const offset = page * limit;
  return await Post.findAndCountAll({ limit, offset, order: [['createdAt','DESC']] });
}

async function updatePost(id, data) {
  const post = await getPost(id);
  if (!post) return null;
  return await post.update(data);
}

async function deletePost(id) {
  const post = await getPost(id);
  if (!post) return null;
  await post.destroy();
  return true;
}

module.exports = { createPost, getPost, listPosts, updatePost, deletePost };
