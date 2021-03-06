// i/p nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// o/p 5
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let nums = [1, 1, 2];
let nums = [1, 2, 3, 3, 4];
removeDuplicates = nums => {
  let set1 = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (!set1.has(nums[i])) {
      set1.add(nums[i]);
    }
  }
  nums = [...set1.values()];
  console.log(nums.length);
  console.log(nums);
};

removeDuplicates(nums);

//using two pointer theorem
removeDuplicates1 = nums => {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    // console.log("i", i, nums[i]);
    // console.log("j", j, nums[j]);

    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  console.log(i + 1);
};

// removeDuplicates1(nums);
// console.log(nums);
