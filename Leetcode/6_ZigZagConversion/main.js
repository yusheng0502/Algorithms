/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var sideInterval = numRows * 2 - 2;
    var innerInterval = numRows - 1;
    var result = ""

    if(numRows === 1){
        return s;
    }

    for (var row = 0; row <= numRows - 1; row++) {
        if (row === 0 || row === numRows - 1) {
            result += printRow(row, sideInterval);
        }
        else {
            result += printRow(row, innerInterval);
        }
    }

    return result;

    function printRow(start, interval) {
    var result = "";
    for (var i = start; i <= s.length - 1; i += interval) {
        result += s[i];
    }

    return result;
    }

};

var s = "AB";
var rowNumber = 1;
console.log(convert(s, rowNumber));