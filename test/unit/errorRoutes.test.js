const request = require('supertest');
const app = require('../../app');

const appReq = request.agent(app);

describe('Checking all endpoints - Ping style', () => {
  it('GET /error and returns "Error"', (done) => {
      appReq.get('/error/')
      .expect(200)
      .then(done());
  });
  it('GET /error/404 and returns "Error"', (done) => {
      appReq.get('/error/404')
      .expect(200)
      .then(done());
  });
  it('GET /error/500 and returns "Error"', (done) => {
      appReq.get('/error/500')
      .expect(200)
      .then(done());
  });
});
