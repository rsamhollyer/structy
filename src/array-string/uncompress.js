const uncompress = (s) => {
  let result = '';
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (isNaN(s[j])) {
      const repeat = parseInt(s.slice(i, j), 10);
      result += s[j].repeat(repeat);
      i = j + 1;
      j = i;
    } else {
      j++;
    }
  }
  return result;
};

console.log(uncompress('2c3a1t'));
