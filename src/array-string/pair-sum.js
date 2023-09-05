/**
 *
 * @param {number[]} numbers - an array of numbers
 * @param {number} targetSum - the target value of the sum of two numbers in the array
 *
 * @return {number[]} an array of indices of the two numbers that add up to the target sum
 */
function pairSum(numbers, targetSum) {
  if (!Array.isArray(numbers)) return [];
  if (numbers.length < 2) return [];
  if (typeof targetSum !== 'number') return [];

  const sumHash = {};
  const resultArr = [];

  for (let i = 0; i < numbers.length; i++) {
    const diff = targetSum - numbers[i];

    if (sumHash[diff] !== undefined) {
      resultArr.push(sumHash[diff], i);
      break;
    } else {
      sumHash[numbers[i]] = i;
    }
  }

  return resultArr;
}

console.log(pairSum([3, 2, 5, 4, 1], 8)); // -> [0, 2]
console.log(pairSum([4, 7, 9, 2, 5, 1], 5)); // -> [0, 5]
console.log(pairSum([4, 7, 9, 2, 5, 1], 3)); // -> [3, 5]
console.log(pairSum([1, 6, 7, 2], 13)); // -> [1, 2]
console.log(pairSum([9, 9], 18)); // -> [0, 1]
console.log(pairSum([6, 4, 2, 8], 12)); // -> [1, 3]
