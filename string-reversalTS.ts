let str = "yogendra";
let result = str
  .split("")
  .reverse()
  .join("");
console.log(result);

//---------other way---------

let name = "yogendra";
let resTS2 = name.split("").reduceRight((item, acc) => item + acc);
//let res = name.split("").reduce((item, acc)=>acc+item);
console.log(resTS2);
