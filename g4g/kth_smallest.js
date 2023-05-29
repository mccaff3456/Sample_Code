/**
 * @param {number[]} arr
 * @param {number} l (starting index of the array i.e 0)
 * @param {number} r (ending index of the array i.e size-1)
 * @param {number} k
 * @return {number}
*/

class Solution {
    constructor(numOps) {
        this.numOps = numOps;
        this.debug = false;
    }

    pivotArr(arr, start, end, k) {
        this.numOps++;
        if (start >= end) { return; }
        let pivotIndex = end;
        let pivot = arr[pivotIndex];
        let smaller = start;
        let currPtr = start+1;

        if (this.debug) {
            console.log("1: " + arr + ", start: " + start + ", end: " + end
                    + ", k: " + k + ", pivotIndex: " + pivotIndex
                    + ", pivot: " + pivot + ", smaller: " + smaller
                    + ", currPtr: " + currPtr);
        }

        this.numOps++;
        [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

        this.numOps++;
        while(currPtr <= end) {
            if (this.debug) {
                console.log("2: " + arr + ", start: " + start + ", end: " + end
                    + ", k: " + k + ", pivotIndex: " + pivotIndex
                    + ", pivot: " + pivot + ", smaller: " + smaller
                    + ", currPtr: " + currPtr);
            }

            this.numOps++;
            if (arr[currPtr] < pivot) {
                smaller++;
                [arr[smaller], arr[currPtr]] = [arr[currPtr], arr[smaller]];
            }
            currPtr++;
            this.numOps++;

            if (this.debug) {
                console.log("3: " + arr + ", start: " + start + ", end: " + end
                    + ", k: " + k + ", pivotIndex: " + pivotIndex
                    + ", pivot: " + pivot + ", smaller: " + smaller
                    + ", currPtr: " + currPtr);
            }
        }
        [arr[smaller], arr[start]] = [arr[start], arr[smaller]];
        pivotIndex = smaller;

        if (this.debug) {
            console.log("4: " + arr + ", start: " + start + ", end: " + end
                    + ", k: " + k + ", pivotIndex: " + pivotIndex
                    + ", pivot: " + pivot + ", smaller: " + smaller
                    + ", currPtr: " + currPtr);
        }
        this.numOps++;
        if (pivotIndex == k) {
            return;
        } else if (pivotIndex > k) {
            this.numOps++;
            this.pivotArr(arr, start, pivotIndex-1, k);
        } else {
            this.numOps++;
            this.pivotArr(arr, pivotIndex+1, end, k);
        }
    }

    kthSmallest(arr,l,r,k){

        this.pivotArr(arr, l, r, k-1);

        if (-1 != this.numOps) {
            console.log("N: " + arr.length + ", Ops: " + this.numOps);
        }

        return arr[k-1];
    }

    kthSmallestSort(arr,l,r,k) {
        return arr.sort((a,b) => a - b)[k-1];
    }
}

let tests = [
    { "array": [5, 2, 1, 4, 3], "N": 5, "K": 2},
    { "array": [7, 10, 4, 3, 20, 15], "N": 6, "K": 3},
    { "array": [12, 9, 7, 5, 3, 2, 1], "N": 7, "K": 6},
    { "array": [1, 3, 5, 6, 8, 9, 11, 12, 14, 15], "N": 10, "K": 10},
    { "array": [9, 2, 7, 4, 6, 5, 10, 1], "N": 8, "K": 1},
    { "array": [3, 2, 4, 1, 5, 9, 6, 8, 7], "N": 9, "K": 5},
];


tests.forEach ((test) => {
    let solution = new Solution(0);
    console.log(
        "kthSmallest([" + test["array"]
        + "], 0, " + (0+test["array"].length-1) 
        + ", " + test["K"] + ") => "
        + solution.kthSmallest(
            test["array"], 0, (0+test["array"].length-1), test["K"]
        )
        + ", using sort: "
        + solution.kthSmallestSort(
            test["array"], 0, (0+test["array"].length-1), test["K"]
        )
    );
});
