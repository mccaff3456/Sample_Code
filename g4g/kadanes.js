
class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N){
        return N;
    } 
}

let tests = [
    { "array": [1, 2, 3, -2, 5], "N": 5},
    { "array": [-1, -2, -3, -4], "N": 4},
    { "array": [-3, 1, 2, 10, -8, 4, -4], "N": 7},
];

let solution = new Solution();

tests.forEach ((test) => {
    console.log("N " + test["N"] + ", (" + test["array"]
     + ") => [" + solution.maxSubarraySum(test["array"], test["N"]) + "]");
});
