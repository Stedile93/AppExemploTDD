
var should = require('should');

var sum = require('../sum');

describe('sum.js', function(){
  it('sum of 2 + 5 should return 5', function(){
    sum(2, 3).should.be.equal(5);
  });

  it('sum of 10 + 10 should return 20', function(){
    sum(10, 10).should.be.equal(20);
  });

  it('sum of a single value should return false', function(){
    sum(50).should.be.equal(false);
  });

  it('sum of a string + 5 should return false', function(){
    sum("string", 5).should.be.equal(false);
  });

  it('sum of a 5 + string should return false', function(){
    sum(5, "string").should.be.equal(false);
  });
});
