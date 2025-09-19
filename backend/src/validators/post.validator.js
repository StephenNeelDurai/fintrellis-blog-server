const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  content: Joi.string().min(1).required(),
  author: Joi.string().allow('', null),
  tags: Joi.array().items(Joi.string()).optional(),
  published: Joi.boolean().optional()
});

function validatePost(req, res, next) {
  const { error } = postSchema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ message: 'Validation error', details: error.details.map(d => d.message) });
  }
  next();
}

module.exports = { validatePost };