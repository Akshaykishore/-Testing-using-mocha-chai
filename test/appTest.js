const assert = require('chai').assert;
const hi = require('../app').hi;
const addition = require('../app').addition;
const subtraction = require('../app').subtraction;
const multiplication = require('../app').multiplication;

describe('App',function(){
it('it should return hello',function(){
    let result = hi();
assert.equal(result,'hello');
});

it('it should return string',function(){
    let result = hi();
assert.typeOf(result,'string');
});

it('return value should be above 5',function(){
    let result = addition(3,1);
assert.isAbove(result,5);
});

it('return value should be number',function(){
    let result = addition(3,5);
assert.typeOf(result,'number');
});

it('return value should be positive',function(){
    let result = subtraction(10,5);
assert.isAbove(result,0);
});

it('return value should be number',function(){
    let result = multiplication(3,5);
assert.isAtLeast(result,1);
});

});