curryRight
=======

creates function with arguments bound to it


```javascript
var curryRight = require("@nathanfaucett/curry_right");


function subtract(x, y) {
    return x - y;
}

/*
function subtract_one(y) {
    return subtract(x, 1);
}
*/
var subtract_one = curryRight(subtract, 1);

subtract_one(5); // 4
```
