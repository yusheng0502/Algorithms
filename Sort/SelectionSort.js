var numbers = [5, 4, 3, 2, 1];
SelectionSort(numbers);
console.log(numbers);

function SelectionSort(input) {
    for (var i = 0; i < input.length - 1; i++) {
        var minIndex = findMinIndex(input, i);
        console.log("Find min number is " + input[minIndex] + ". " + "Index is " + minIndex);

        swap(input, i, minIndex);
        console.log("Result : " + numbers);
    };
}

function findMinIndex(input, start) {
    var minIndex = start;
    for (j = start; j <= input.length - 1; j++) {
        if (input[j + 1] < input[j]) {
            minIndex = j + 1;
        };
    }

    return minIndex
}

function swap(input, a, b) {
    var temp = input[a];

    input[a] = input[b];
    input[b] = temp;
}