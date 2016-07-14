var isFunction = require("@nathanfaucett/is_function"),
    fastSlice = require("@nathanfaucett/fast_slice"),
    createFunctionWrapper = require("@nathanfaucett/create_function_wrapper");


module.exports = curryRight;


function curryRight(fn) {
    if (!isFunction(fn)) {
        throw new TypeError("curryRight(fn, ...args) fn must be a function");
    }
    return baseCurryRight(fn, arguments.length > 1 ? fastSlice(arguments, 1) : null);
}

function baseCurryRight(fn, args) {
    var bound = createFunctionWrapper(fn),
        wrapper = bound.__wrapper__;

    wrapper.addArgsRight(args);

    return bound;
}
