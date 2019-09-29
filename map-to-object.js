function getObjectFromMap(myMap) {
  let obj = {};
  myMap.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
}

let obj = getObjectFromMap(new Map([["name", "yogendra"], ["age", 24]]));
console.log(obj);
