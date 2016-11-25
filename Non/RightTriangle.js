printRightTriangle(5);

function printRightTriangle(length) {
    for (var i = length; i > 0; i--) {
        printLine(i);
    }
}

function printLine(length) {
    var msg = "";
    for (var i = 0; i < length; i++) {
        msg += "@";
    }
    console.log(msg);
}