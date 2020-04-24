/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
*/
var search = function(nums, target) {
    let l = 0
    let r = nums.length-1
    
    while(l <= r){
        let mid = parseInt(l + (r-1)/2)
        if(nums[mid] === target)
            return mid;
        
        //if left half of the array is sorted
        if(nums[l] <= nums[mid]){
            if(target < nums[mid] && target >= nums[l])
                r = mid - 1
            else
                l = mid + 1
        }else{// if right half of the array is sorted
            if(target > nums[mid] && target <= nums[r])
                l = mid + 1
            else
                r = mid - 1
        }
    }
    return -1
};