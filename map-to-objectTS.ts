function getObjectFromMap(myMap: Map<any, any>) {
  let obj: any = {};
  myMap.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
}

let resultObject = getObjectFromMap(
  new Map<any, any>([["name", "yogendra"], ["age", 24]])
);

console.log(resultObject);
