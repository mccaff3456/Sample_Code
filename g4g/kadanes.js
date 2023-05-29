/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number} 
*/
class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N){
        let max = arr[0];
        let sum = 0;
        let num_ifs = 0;

        arr.forEach((val) => {
            sum += val;
            num_ifs++;
            if (sum <= 0) {
                sum = 0;
            } else {
                num_ifs++;
                max = sum > max ? sum : max;
            }
        });
        console.log(num_ifs + " comparisons");
        return max;
    }
}

let tests = [
    { "array": [1, 2, 3, -2, 5], "N": 5},
    { "array": [-1, -2, -3, -4], "N": 4},
    { "array": [-3, 1, 2, 10, -8, 4, -4], "N": 7},
    { "array": [-3, 1, 2, 10, -16, 4, 10, -4], "N": 8},
];

let solution = new Solution();

tests.forEach ((test) => {
    console.log("N " + test["N"] + ", (" + test["array"]
     + ") => [" + solution.maxSubarraySum(test["array"], test["N"]) + "]");
});
