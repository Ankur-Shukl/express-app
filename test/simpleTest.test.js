const {describe} = require('mocha');

const assert = require('assert');

describe('Simple test suite:', function() {
    it('1 === 1 should be true', function() {
        console.log("done testing");
        assert(1 === 1);
    });
});