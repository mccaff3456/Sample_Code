/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number} 
*/
class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N){
        let max = arr[0];
        let num_ifs = 0;

        function get_max_from_inner(inner) {
            let temp_sum = 0;
            inner.forEach((val) => {
                temp_sum += val;
                num_ifs++;
                max = temp_sum > max ? temp_sum : max;
            })
        }

        for (let start=0; start < N; start++) {
            num_ifs++;
            if (arr[start] > 0) {
                let temp_max = get_max_from_inner(arr.slice(start));
            }
        }
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
