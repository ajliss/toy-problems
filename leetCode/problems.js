/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

@param {number[]} nums
@param {number} target
@return {number[]}
 */

// (near) exponential time, constant space
let twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let currentTarget = target - nums[i]
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === currentTarget) {
        return [i, j];
      }
    }
  }

  return -1;
};

// linear time, linear space
let twoSum2 = (nums, target) => {
  let refObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (refObj[target - nums[i]]) {
      return [refObj[target - nums[i]], i]
    } else {
      refObj[nums[i]] = i;
    }
  }
  return -1;
}