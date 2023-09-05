/**
 *
 * @param {number[]} numbers
 * @param {number} targetProduct
 *
 * @return {number[]} an array of indices of the two numbers that multiply to the target product
 */
function pairProduct(numbers, targetProduct) {
  if (!Array.isArray(numbers)) return [];
  if (numbers.length < 2) return [];
  if (typeof targetProduct !== 'number') return [];

  const resultArr = [];
  const productHash = {};

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const factor = targetProduct / number;

    if (productHash[factor] !== undefined) {
      resultArr.push(i, productHash[factor]);
      break;
    }
    productHash[number] = i;
  }

  console.log(resultArr);
  return resultArr;
}

pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]
pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
pairProduct([4, 6, 8, 2], 16); // -> [2, 3]
