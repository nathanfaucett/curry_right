var assert = require("assert"),
    curryRight = require("../src/index");


describe("curryRight(fn, ...args)", function() {
    it("should curryRight args to passed function", function() {
        function test(a, b) {
            return "name: " + a + " age: " + b;
        }

        bound = curryRight(test, 32);

        assert.equal(bound("Bob"), "name: Bob age: 32");
    });
});
