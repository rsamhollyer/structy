/**
 *
 * @param {string} s - a single string
 *
 * @returns {string} - the most frequent character in the string. If there is a tie, return the character that appears first in the string.
 */
function mostFrequentChar(s) {
  if (typeof s !== 'string') return null;
  if (s.length === 0) return null;

  const charMap = new Map();
  let max = 0;
  let maxChar = '';

  for (let i = 0; i < s.length; i++) {
    charMap.set(s[i], charMap.get(s[i]) + 1 || 1);
  }

  charMap.forEach((value, key) => {
    if (value > max) {
      max = value;
      maxChar = key;
    }
  });

  return maxChar;
}

console.log(mostFrequentChar('bookeeper')); // -> 'e'
console.log(mostFrequentChar('david')); // -> 'd'
console.log(mostFrequentChar('abby')); // -> 'b'
console.log(mostFrequentChar('mississippi')); // -> 'i'
console.log(mostFrequentChar('potato')); // -> 'o'
console.log(mostFrequentChar('eleventennine')); // -> 'e'
console.log(mostFrequentChar('riverbed')); // -> 'r'
