/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = [];
    for (var i = 0; i <= nums.length - 1; i++) {
        map[nums[i]] = i;
    }

    for(var i=0; i<=nums.length-1;i++){
        var result = map[target-nums[i]]
        if( result != undefined && result != i){
            return [i,result];
        }
    }

    return undefined;
};

var input = [3, 2, 4];
console.log(twoSum(input, 6));