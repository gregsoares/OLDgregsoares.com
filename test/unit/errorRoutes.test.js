const request = require('supertest');

const app = require('../../app');

describe('Checking all endpoints - Ping style', () => {
  test('GET /error and returns "Error"', (done) => {
    request(app)
      .get('/error/')
      .expect(200)
      .then(done);
  });
  test('GET /error/404 and returns "Error"', (done) => {
    request(app)
      .get('/error/404')
      .expect(200)
      .then(done);
  });
  test('GET /error/500 and returns "Error"', (done) => {
    request(app)
      .get('/error/500')
      .expect(200)
      .then(done);
  });
});
