function subarr_equalto_sum(arr, sum) {
    let start = 0;
    let end = 0;
    let total = 0;

    while (end < arr.length)
    {
        if (sum < total) {
            total -= arr[start];
            start += 1;
        } else {
            total += arr[end];
            end += 1;
        }
        if (sum == total) {
            return [start+1, end];
        }
    }

    return [-1];
}

let tests = [
    { "array": [1, 2, 3, 4, 5, 6], "sum": 6},
    { "array": [13, 2, 3, 4, 5, 6], "sum": 9},
    { "array": [1, 2, 3, 4, 5, 6], "sum": 13},
    { "array": [1, 2, 3, 4, 5, 6], "sum": 100},
    { "array": [1, 10, 2, 16, 25], "sum": 12},
    { "array": [1, 4, 6, 6, 25], "sum": 12},
    { "array": [1, 1, 1, 8, 6, 6], "sum": 12},
];

tests.forEach ((test) => {
    console.log("Sum " + test["sum"] + ", (" + test["array"]
     + ") => [" + subarr_equalto_sum(test["array"], test["sum"]) + "]");
});

