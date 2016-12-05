/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var interval = (numRows - 1) + (numRows - 2) + 1
    var result = ""

    if (numRows === 1) {
        return s;
    }

    for (var row = 0; row <= numRows - 1; row++) {

        if (row == 0 || row == numRows - 1) {
            result += printSideRow(s, row, interval);
        }
        else {
            result += printInterRow(s, row, interval);
        }
    }

    return result;

};

function printSideRow(string, start, interval) {
    var result = "";
    for (var i = start; i <= string.length - 1; i += interval) {
        result += string[i];
    }
    return result;
}

function printInterRow(string, start, interval) {
    // before the next number of interval, there have a another number.
    var result = "";
    for (var i = start; i <= string.length - 1; i += interval) {
        result += string[i];
        if (string[i - start] !== undefined) {
            result += string[i - d];
        }
    }
    return result;
}

var s = "ABCDE";
var rowNumber = 4;
console.log(convert(s, rowNumber));