var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const logPricelist = require("../hotelPrices");

describe('logPricelist', function() {
    it('logPricelist should be a function', function () {
        logPricelist();
    });
});