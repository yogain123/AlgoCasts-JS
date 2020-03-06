let arr = [
  { a: 300 },
  { a: 200 },
  { b: 100 },
  { c: 50 },
  { a: 200 },
  { c: 100 }
];
let res = {};
let set = new Set();
for (const item of arr) {
  set.add(Object.keys(item)[0]);
}
let uniqueArr = [...set];
let result = {};
for (const item of uniqueArr) {
  result[item] = arr
    .filter(i => Object.keys(i)[0] === item)
    .map(item => Object.values(item)[0])
    .reduce((a, b) => a + b);
}
console.log(result);
/**
 * {a:700,
 * b:100,
 * c:150}
 */
