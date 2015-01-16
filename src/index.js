var isFunction = require("is_function"),
    fastSlice = require("fast_slice"),
    createFunctionWrapper = require("create_function_wrapper");


function baseCurryRight(fn, args) {
    var bound = createFunctionWrapper(fn),
        wrapper = bound.__wrapper__;

    wrapper.addArgsRight(args);

    return bound;
}

module.exports = function curryRight(fn) {
    if (!isFunction(fn)) {
        throw new TypeError("curryRight(fn, ...args) fn must be a function");
    }
    return baseCurryRight(fn, arguments.length > 1 ? fastSlice(arguments, 1) : null);
};
