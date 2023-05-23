// const anagrams = (str1, str2) => {
//   const a = str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
//   const b = str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

//   return a === b;
// };

const anagrams = (str1, str2) => {
  const str1Map = str1.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  const str2Array = str2.split('');
  for (let index = 0; index < str2Array.length; index += 1) {
    const otherRef = str1Map[str2Array[index]];
    if (otherRef > 0 || otherRef <= 0) {
      str1Map[str2Array[index]] -= 1;
    } else {
      str1Map[str2Array[index]] = 1;
    }
  }

  return Object.values(str1Map).every((val) => val === 0);
};

function print(func) {
  console.log(func);
}
print(anagrams('restful', 'fluster')); // -> true
print(anagrams('cats', 'tocs')); // -> false
print(anagrams('monkeyswrite', 'newyorktimes')); // -> true
print(anagrams('paper', 'reapa')); // -> false
print(anagrams('elbow', 'below')); // -> true
print(anagrams('tax', 'taxi')); // -> false
print(anagrams('taxi', 'tax')); // -> false
print(anagrams('night', 'thing')); // -> true
print(anagrams('abbc', 'aabc')); // -> false
print(anagrams('po', 'popp')); // -> false
print(anagrams('pp', 'oo')); // -> false
