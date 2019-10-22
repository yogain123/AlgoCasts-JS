function largestIncSubArray(arr) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      map.set(arr.slice(i, j).reduce((a, b) => a + b), arr.slice(i, j));
    }
  }
  const maxKey = Math.max(...map.keys());
  console.log(map.get(maxKey));
  console.log(maxKey);
}

let arr = [-3, 2, 4, -1, 2, 3, -2];
largestIncSubArray(arr);
