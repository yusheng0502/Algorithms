/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    var land = 0;
    var neighbour = 0;
    var colLength = grid[0].length;
    var rowLength = grid.length;

    for (var i = 0; i <= rowLength - 1; i++) {
        for (var j = 0; j <= colLength - 1; j++) {

            if (grid[i][j] === 1) {
                land += 1;

                if (checkNeighbourUp(i, j)) { neighbour += 1; }
                if (checkNeighbourRight(i, j)) { neighbour += 1; }
            }
        }
    }

    return land * 4 - neighbour * 2

    function checkNeighbourUp(rowIndex, colIndex) {
        if (rowIndex > 0 && grid[rowIndex - 1][colIndex] === 1) {
            return true;
        }
        return false;
    };

    function checkNeighbourRight(rowIndex, colIndex) {
        if (colIndex < colLength - 1 && grid[rowIndex][colIndex + 1] === 1) {
            return true;
        }
        return false;
    };

};

var input = [[1, 1], [1, 1]];
console.log(input);
console.log(islandPerimeter(input));