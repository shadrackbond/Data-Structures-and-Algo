//......... Finding the first Occurrence.......

//.... Problem....:

// You are given a sorted array of integers, nums, and a target integer, target.
// Your task is to find the index of the first occurrence of the target in the
// array.If the target does not exist in the array, return -1.

// ....constraints..
// the array num is sorted in non-decreasing order
// the length of nums is between 1 and 10^5
// the values in nums and the target are between -10^9 and 10^9
// the solution must run in the O(log n) time complexity

// The challenge here is to modify the standard binary search logic to ensure 
// that when you find a match (nums[mid] == target), you continue searching in 
// the left half of the current subarray to confirm you have found the absolute first occurrence

//.....example.....
//[2,5,5,5,6,6,8] target= 5 output= 1
//[10,20,30,40,50] target = 25 output -1
//[1,1,1,1,1,1,1] target = 1 output = 0

/**
 * Finds the index of the first occurrence of the target in a sorted array.
 * Runs in O(log n) time.
 *
 * @param {number[]} nums The sorted array of integers.
 * @param {number} target The target integer to search for.
 * @returns {number} The index of the first occurrence, or -1 if not found.
 */
function firstInstance(nums, target) {
    let first = 0;
    let last = nums.length - 1;
    let firstOccurrenceIndex = -1; // Stores the potential answer

    while (first <= last) {
        const mid = Math.floor((first + last) / 2);

        if (nums[mid] === target) {
            firstOccurrenceIndex = mid;// 1. Store the current index as a potential answer.
            // 2. Continue searching in the LEFT half (by moving 'last')
            //    to find an even *earlier* occurrence.
            last = mid - 1;
        } else if (nums[mid] < target) {
            // Target must be in the RIGHT half
            first = mid + 1;
        } else { // nums[mid] > target
            // Target must be in the LEFT half
            last = mid - 1;
        }
    }

    return firstOccurrenceIndex;
}

// Example usage:
const example1 = [2, 5, 5, 5, 6, 6, 8];
console.log(`[2, 5, 5, 5, 6, 6, 8], target=5: ${firstInstance(example1, 5)}`); // Output: 1

const example2 = [10, 20, 30, 40, 50];
console.log(`[10, 20, 30, 40, 50], target=25: ${firstInstance(example2, 25)}`); // Output: -1

const example3 = [1, 1, 1, 1, 1, 1, 1];
console.log(`[1, 1, 1, 1, 1, 1, 1], target=1: ${firstInstance(example3, 1)}`); // Output: 0

const firstArray = [1, 1, 1, 1, 1, 1, 1];
console.log(`firstInstance(firstArray, 1): ${firstInstance(firstArray, 1)}`); // Output: 0
// console.log(newMidPoint); // This line is outside the function scope and would cause a ReferenceError.
