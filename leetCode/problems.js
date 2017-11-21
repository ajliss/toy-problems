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
    if (refObj[target - nums[i]] > -1) {
      return [refObj[target - nums[i]], i]
    } else {
      refObj[nums[i]] = i;
    }
  }
  return -1;
}

/*
Given an array and a value, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  
};