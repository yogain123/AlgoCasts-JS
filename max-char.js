let str = "qwwqwqqqqqqqqaaaaaaaaaaaaaaa";
let obj = {};
for (let i of str) obj[i] = obj[i] + 1 || 1;

let maxCount = 0;
let maxLetter = "";
for (let [key, value] of Object.entries(obj)) {
  if (value >= maxCount) {
    maxCount = value;
    maxLetter = key;
  }
}

console.log({
  maxLetter,
  maxCount
});
