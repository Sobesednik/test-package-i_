const assert = require('assert')
const testPackageI = require('../../src/')

const testPackageITestSuite = {
    'should be a function': () => {
        assert.equal(typeof testPackageI, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            testPackageI()
        })
    },
}

module.exports = testPackageITestSuite
