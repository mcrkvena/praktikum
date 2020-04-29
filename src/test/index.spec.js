var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const roman = require("../index");

describe('roman', function() {
    it('roman should be a function', function () {
        roman();
    });
    it("za broj 1 funkcija vraća I", function() {
        assert.equal(roman(1), "I"); 
    });
    it("za broj 2 funkcija vraća II", function() {
       assert.equal(roman(2), "II"); 
    });
    it("za broj 3 funkcija vraća III", function() {
        assert.equal(roman(3), "III"); 
     });
     it("za broj 4 funkcija vraća IV", function() {
        assert.equal(roman(4), "IV"); 
     });
     it("za broj 5 funkcija vraća V", function() {
        assert.equal(roman(5), "V"); 
     });
     it("za broj 6 funkcija vraća VI", function() {
        assert.equal(roman(6), "VI"); 
     });
     it("za broj 7 funkcija vraća VII", function() {
        assert.equal(roman(7), "VII"); 
     });
     it("za broj 8 funkcija vraća VIII", function() {
        assert.equal(roman(8), "VIII"); 
     });
     it("za broj 9 funkcija vraća IX", function() {
        assert.equal(roman(9), "IX"); 
     });
     it("za broj 10 funkcija vraća X", function() {
        assert.equal(roman(10), "X"); 
     });
});