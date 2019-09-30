console.log(capitalization("hello my name is yogendra")); // Hello My Name Is Yogendra

function capitalization(sentence: string): string {
  let temp = sentence.split(" ");
  let modifiedTemp = temp.map(item => {
    let res = item[0].toUpperCase() + item.substring(1);
    return res;
  });
  return modifiedTemp.join(" ");
}
