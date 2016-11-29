/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    for (var i = 0; i <= nums.length - 1; i++) {
        var result = nums.indexOf(target - nums[i], i + 1);
        if (result !== -1) {
            return [i, result];
        }
    }

    return null;

};

var input = [3, 2, 4];
console.log(twoSum(input, 6));