var request = require('supertest');
var app = require(__dirname + '/../../app');

describe('Pages', function () {
  describe('GET /home', function () {
    it('should return status code 200', function (done) {
      request(app)
        .get('/home')
        .expect(200, done)
    })

    it('should contain text "Home page"', function (done) {
      request(app)
        .get('/home')
        .expect(/Home page/, done)
    })
  })
})
