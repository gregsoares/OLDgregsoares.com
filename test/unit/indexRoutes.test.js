const expect = require('chai').expect;
const app = require('../../app');
const request = require('supertest');

let routeReq = request.agent(app);
// Data not found = 400

describe('Testing basic API routes:', function () {
  it('expects GET("/") to return status 200', (done) => {
    routeReq.get('/')
      .end(function (req, res) {
        expect(res.status).to.equal(200);
      })
        .then(done());
  });

  // it('expects GET("/index") to return status 200', (done) => {
  //   routeReq.get('/index')
  //     .end(function (req,res) {
  //       expect(res.status).to.equal(200);
  //     }).done;
  //     });
});
