// let arr = [1, 2, 3, 5, 6, 7];
// let target = 9;
// let arr = [1, 2, 3, 5, 6, 7];
// let target = 8;
let arr = [1, 2, 3, 4, 5, 6, 7];
let target = 11;

sumOfNumbers = (arr, target) => {
  let p1 = 0; //1,2
  let p2 = arr.length - 1; //7
  let pair = [];
  while (p1 < p2) {
    if (arr[p1] + arr[p2] > target) {
      //
      p2--;
    } else if (arr[p1] + arr[p2] < target) {
      p1++; //1
    } else {
      pair.push([arr[p1], arr[p2]]); //2,7
      p1++; //3
      p2--; //6
    }
  }
  console.log(pair, pair.length);
};
// sumOfNumbers(arr, target);

sumOfNumbers1 = (arr, target) => {
  let myMap = new Map();
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let compliment = target - arr[i];
    if (myMap.has(compliment)) {
      count++;
    } else {
      myMap.set(arr[i], count + 1);
    }
  }
  console.log(count, arr);
};
sumOfNumbers1(arr, target);