var request = require('supertest');
var app = require(__dirname + '/../../app');

describe('About us', function () {
  describe('GET /about_us', function () {
    it('should return status code 200', function (done) {
      request(app)
        .get('/about_us')
        .expect(200, done)
    })

    it('should contain text "about page"', function (done) {
      request(app)
        .get('/about_us')
        .expect(/about page/, done)
    })
  })
})
