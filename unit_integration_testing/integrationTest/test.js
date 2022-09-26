var assert = require('assert');
var linear = require("../linearPoint");

describe('tests for function #1', () => {
    // 
    describe('test case 1 #linearPoint()', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal([1,2,3].indexOf(4), -1);
        })
    });
    describe('test case 2 #linearPoint()', () => {
        it('should return 3 as the is present', () => {
            assert.equal([1,2,3,4,5].indexOf(4), 3);
        });;
    });
});