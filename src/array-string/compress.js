const compress = (string) => {
  const compressed = [];
  const arrayOfStrings = string.split('');

  let currentLetterCount = 0;
  for (let index = 0; index < arrayOfStrings.length; index += 1) {
    const nextLetter = arrayOfStrings[index + 1];
    currentLetterCount += 1;

    if (nextLetter !== arrayOfStrings[index]) {
      const compressedString = `${currentLetterCount}${arrayOfStrings[index]}`;
      compressed.push(compressedString);
      currentLetterCount = 0;
    }
  }
  return compressed.join('').replace(/1(?!\d)/g, '');
};

console.log(compress('ccaaatsss')); // => 2c3at3s
console.log(
  compress(
    'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
  ) // => 127y
);
