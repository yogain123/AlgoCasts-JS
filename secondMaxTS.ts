/**
 * The Idea Behind its Algorithm
 * 1) Find them max element in an array
 * 2) Make that Max element in an array as Min Element
 * 3) Now Again Find the Max Element in an array
 */
function getSecondMax(arr: number[]): number {
  let max = getMax(arr);
  let maxIndex = arr.findIndex(item => item === max);
  arr[maxIndex] = -Infinity;
  return getMax(arr);
}

function getMax(arr: number[]): number {
  let max = -Infinity;
  for (const item of arr) {
    if (item >= max) max = item;
  }
  return max;
}

console.log(getSecondMax([1, 2, 3, 4, 5, 66, 77, 8, 9]));
