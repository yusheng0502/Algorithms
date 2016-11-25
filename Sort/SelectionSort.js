var numbers = [5, 4, 3, 2, 1];
SelectionSort(numbers);
console.log(numbers);

function SelectionSort(input) {
    for (var i = 0; i < input.length - 1; i++) {
        var minIndex = findMinIndex(input, i);
        swap(input, i, min);
    };
}

function findMinIndex(input, start) {
    var minIndex;
    for (j = start; j <= input.length - 1; j++) {
        if (input[j + 1] < input[j]) {
            min = j + 1;
        };
    }
    console.log("Find min number is " + input[min] + ". " + "Index is " + min);
}

function swap(input, a, b) {
    var temp = input[a];

    input[a] = input[b];
    input[b] = temp;
}