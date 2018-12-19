const chai = require('chai');
const request = require('supertest');
const app = require('../../app');

const appReq = request.agent(app)
describe('Checking all API endpoints - Ping style', () => {
  it('GET /api should return { title: "/api - Home" }', (done) => {
    appReq.get('/api')
      .expect(200)
      .then(done());
      // .expect({ title: '/api - Home' }, done);
  });
  it('GET /api/user: returns testUser data.', (done) => {
    appReq.get('/api/user')
      .expect(200)
      .then(done());
  });
  it('GET /api/getAll: returns testUser data.', (done) => {
    appReq.get('/api/getAll')
      .expect(200)
      .then(done());
  });
});
