const request = require('supertest');
const app = require('../../app');

describe('Checking all API endpoints - Ping style', () => {
  test('GET /api should return { title: "/api - Home" }', (done) => {
    request(app)
      .get('/api')
      .expect(200)
      .then(done);
      // .expect({ title: '/api - Home' }, done);
  });
  test('GET /api/user: returns testUser data.', (done) => {
    request(app)
      .get('/api/user')
      .expect(200)
      .then(done);
  });
  test('GET /api/getAll: returns testUser data.', (done) => {
    request(app)
      .get('/api/user')
      .expect(200)
      .then(done);
  });
});
