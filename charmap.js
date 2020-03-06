const arr = ["a", "a", "b", "b", "c", "c", "c", "c", "z"];
let result = {};
for (const item of arr) {
  result[item] = result[item] + 1 || 1;
}
console.log(result);
