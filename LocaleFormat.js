function localeformat(str) {
  if (+str <= 999) {
    return str;
  } else {
    let arr = [...str];
    let lastPart = arr.slice(-3);
    let firstPart = arr.slice(0, arr.length - 3);
    resultStr = "";
    let removeInitialComma = false;
    if (firstPart.length % 2 === 0) {
      removeInitialComma = true;
      for (let i = firstPart.length - 1; i >= 0; i--) {
        if (i % 2 === 1) {
          resultStr = firstPart[i] + resultStr;
        } else {
          resultStr = "," + firstPart[i] + resultStr;
        }
      }
    } else {
      for (let i = firstPart.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
          resultStr = firstPart[i] + resultStr;
        } else {
          resultStr = "," + firstPart[i] + resultStr;
        }
      }
    }
    resultStr = resultStr + "," + lastPart.join("");
    if (removeInitialComma) {
      resultStr = resultStr.substring(1);
    }
    return resultStr;
  }
}

let result = localeformat("100000000000000");
console.log(result); // 10,00,00,00,00,00,000
