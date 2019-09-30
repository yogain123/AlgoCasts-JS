let strr = "qwwqwqqqqqqqqaaaaaaaaaaaaaaa";
let obj: any = {};
for (let i of strr) obj[i] = obj[i] + 1 || 1;

let maxCount = 0;
let maxLetter = "";
for (let [key, value] of Object.entries(obj)) {
  if ((value as number) >= maxCount) {
    maxCount = value as number;
    maxLetter = key as string;
  }
}

console.log({
  maxLetter,
  maxCount
});
