var tape = require("tape"),
    curryRight = require("..");


tape("curryRight(fn, ...args) should curry arguments to the right in passed function", function(assert) {
    function test(a, b) {
        return "name: " + a + " age: " + b;
    }

    bound = curryRight(test, 32);

    assert.equal(bound("Bob"), "name: Bob age: 32");
    assert.end();
});
