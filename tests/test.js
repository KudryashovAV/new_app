describe('Truth', function () {
  it('should be true', function () {
    true.should.be.true
  })

  it('should not be false', function () {
    true.should.not.be.false
  })
})

var foo = 'bar'

describe('foo variable', function () {
  it('should equal bar', function () {
    foo.should.equal('bar')
  })
})
