const request = require('supertest');
const app = require('../src/app');
const db = require('../src/models');

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

afterAll(async () => {
  await db.sequelize.close();
});

describe('Posts API', () => {
  let createdId;

  test('Create post', async () => {
    const res = await request(app).post('/api/posts').send({
      title: 'Hello',
      content: 'World',
      author: 'Test',
      tags: ['node','test']
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Hello');
    createdId = res.body.id;
  });

  test('Get post', async () => {
    const res = await request(app).get(`/api/posts/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createdId);
  });

  test('List posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toBe(200);
    expect(res.body.total).toBe(1);
  });

  test('Update post', async () => {
    const res = await request(app).put(`/api/posts/${createdId}`).send({
      title: 'Updated',
      content: 'World updated',
      author: 'Test',
      tags: ['node']
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated');
  });

  test('Delete post', async () => {
    const res = await request(app).delete(`/api/posts/${createdId}`);
    expect(res.statusCode).toBe(204);
  });
});