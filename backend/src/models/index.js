const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME || 'fintrellis_blog',
  process.env.DB_USER || 'blog_admin',
  process.env.DB_PASS || 'blog_admin', {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false
  }
);

const db = { sequelize, Sequelize };
db.Post = require('./post.model')(sequelize);

module.exports = db;
