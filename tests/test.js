var request = require('supertest');
var app = require(__dirname + '/../app');

describe('Root page', function () {
  describe('GET /', function () {
    it('should redirect to welcome page', function (done) {
      request(app)
        .get('/')
        .expect(200, done)
        .expect(/Hello word!/, done)
    })
  })
})
