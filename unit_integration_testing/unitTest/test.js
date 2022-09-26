var assert = require('assert');
var linear = require("../linearPoint");

describe('tests for function: linearPoint()', () => {
    describe('test case 1 #linearPoint()', () => {
        it('should return 6', () => {
            assert.equal(linear(2, 1, 4), 6);
        })
    });
    describe('test case 2 #linearPoint()', () => {
        it('should return 4', () => {
            assert.equal(linear(2, 0, 4), 4);
        });;
    });
    describe('test case 3 #linearPoint()', () => {
        it('should return 2', () => {
            assert.equal(linear(2, -1, 4), 2);
        });;
    });
});