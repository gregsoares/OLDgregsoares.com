const request = require('supertest');
const app = require('../../app');

describe('Index Component Unit Testing', () => {
  test('GET / and returns status 200', (done) => {
    request(app)
      .get('/api')
      .expect(200)
      .then(done);
  });
  test('renders Index containing message "Hello"', (done) =>{
    request(app)
    .get('/')
    .expect(200)
    .then(done);
  });
});
