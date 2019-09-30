function getUnique(arr: (number | boolean | string)[]) {
  return [...new Set<number | string | boolean>(arr)];
}

console.log(
  getUnique([1, 2, 3, 4, 5, 5, 5, true, true, false, "yogi", "yogi"])
);
