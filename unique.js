function getUnique(arr) {
  return [...new Set(arr)];
}

console.log(getUnique([1, 2, 3, 4, 5, 5, 5]));
