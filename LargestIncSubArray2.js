function largestIncSubArray(arr) {
  let res = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      res = { ...res, ...getKeyValue(arr.slice(i, j)) };
    }
  }
  const maxKey = Math.max(...Object.keys(res));
  console.log(res[maxKey]);
  console.log(maxKey);
}

function getKeyValue(arr) {
  const sum = arr.reduce((acc, currentValue) => acc + currentValue);
  const obj = {};
  obj[sum] = arr;
  return obj;
}

let arr = [-3, 2, 4, -1, 2, 3, -2];
largestIncSubArray(arr);

// Note : It is not the best Solution
