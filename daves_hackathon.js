function subarr_equalto_sum_with_slice(arr, sum) {
    let start = 0;
    let end = 1;
    let total = 0;

    while (end < arr.length) {
        total = arr.slice(start, end).reduce((a,b) =>a+b);
        if (sum == total) {
            return [start+1, end];
        }
        if (sum < total) {
            start += 1;
        }
        end += 1;
    }

    return [-1];
}

function subarr_equalto_sum(arr, sum) {
    let start = 0;
    let end = 1;
    let total = 0;

    while (end < arr.length)
    {
        total += arr[end-1];
        if (sum == total) {
            return [start+1, end];
        }
        if (sum < total) {
            total -= (arr[start] + arr[end-1]);
            start += 1;
        } else {
            end += 1;
        }
    }

    return [-1];
}

console.log("x");

let tests = [
    { "array": [1, 2, 3, 4, 5, 6],
      "sum": 6
    },
    { "array": [13, 2, 3, 4, 5, 6],
      "sum": 9
    },
    { "array": [1, 2, 3, 4, 5, 6],
      "sum": 13
    },
    { "array": [1, 2, 3, 4, 5, 6],
      "sum": 100
    },
    { "array": [1, 10, 2, 16, 25],
      "sum": 12
    },
    { "array": [1, 4, 6, 6, 25],
      "sum": 12
    },
]

tests.forEach ((test) => {
    console.log("Trying array " + test["array"] + " and sum " + test["sum"]);
    let subarr = subarr_equalto_sum(test["array"], test["sum"]);
    console.log("Got subarr: " + subarr);    
});

