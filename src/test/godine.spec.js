var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const dayofyear = require("../godine");

describe('dayofyear', function() {
    it('dayofyear should be a function', function () {
        dayofyear();
    });
    it("za 1.1.2020. funkcija vraća 1", function() {
        assert.equal(dayofyear(1,1,2020), 1); 
    });
});