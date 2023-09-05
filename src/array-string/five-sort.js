/**
 * Sort an array of numbers such that the 5s are at the end. The original array is mutated.
 *
 * @param {number[]} nums an array of numbers
 *
 * @returns {number[]} an array with the sorted such that the 5s are at the end
 */
function fiveSort(nums) {
  if (!Array.isArray(nums)) {
    return [];
  }

  if (nums.length === 0) {
    return nums;
  }

  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer < rightPointer) {
    if (nums[rightPointer] === 5) {
      rightPointer--;
    } else if (nums[leftPointer] === 5) {
      const temp = nums[leftPointer];
      nums[leftPointer] = nums[rightPointer];
      nums[rightPointer] = temp;
    } else {
      leftPointer++;
    }
  }

  console.log(nums);
  return nums;
}

fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5]

fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]

fiveSort([5, 5, 5, 1, 1, 1, 4]);
// -> [4, 1, 1, 1, 5, 5, 5]

fiveSort([5, 5, 6, 5, 5, 5, 5]);
// -> [6, 5, 5, 5, 5, 5, 5]

fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]

const fives = new Array(20000).fill(5);
const fours = new Array(20000).fill(4);
const nums = [...fives, ...fours];
fiveSort(nums);
// twenty-thousand 4s followed by twenty-thousand 5s
// -> [4, 4, 4, 4, ..., 5, 5, 5, 5]
