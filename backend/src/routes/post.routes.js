const express = require('express');
const postController = require('../controllers/post.controller');
const { validatePost } = require('../validators/post.validator');

const router = express.Router();
// GET : List posts
router.get('/', postController.list);
// POST : Create a post
router.post('/', validatePost, postController.create);
// GET : Get post by id
router.get('/:id', postController.getById);
// PUT : Update post by id
router.put('/:id', validatePost, postController.update);
// DELETE : Remove post by id
router.delete('/:id', postController.remove);

module.exports = router;
