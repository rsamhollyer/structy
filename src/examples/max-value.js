const maxValue = (nums) => {
  let max;

  for (let i = 0; i <= nums.length; i++) {
    if (!max) {
      max = nums[i];
    }

    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
};
maxValue([4, 7, 2, 8, 10, 9]);
