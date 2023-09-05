/**
 *
 * @param {number[]} a an array of unique numbers
 * @param {number[]} b an array of unique numbers
 *
 * @returns {number[]} an array of the numbers that are in both a and b
 */
function intersection(a, b) {
  if (!Array.isArray(a)) return [];
  if (!Array.isArray(b)) return [];

  const aSet = new Set(a);
  const resultSet = new Set();

  b.forEach((num) => {
    if (aSet.has(num)) {
      resultSet.add(num);
    }
  });

  const result = Array.from(resultSet);
  console.log(result);
  return result;
}

intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]); // -> [2,6]
intersection([2, 4, 6], [4, 2]); // -> [2,4]
intersection([4, 2, 1], [1, 2, 4, 6]); // -> [1,2,4]
intersection([0, 1, 2], [10, 11]); // -> []

const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
intersection(a, b); // -> [0,1,2,3,..., 49999]
