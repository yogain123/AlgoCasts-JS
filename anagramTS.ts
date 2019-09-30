//one string is an anagram of other strings, if it uses the same character in same quantity not
//considering spaces or special character

//let word = "resadsdasd%%%!!!!!";
//console.log(word.replace(/[^\w]/g, ""));   // it remove all special characters and space

console.log(anagramTS("rail safety", "fairy tales")); // True

function anagramTS(stringA: string, stringB: string): boolean {
  const aCharMap: any = buildMap(stringA);
  const bChatMap: any = buildMap(stringB);
  if (Object.keys(aCharMap).length !== Object.keys(bChatMap).length)
    return false;

  for (let char in aCharMap) {
    if (aCharMap[char] !== bChatMap[char]) return false;
  }

  return true;
}

function buildMap(str: string): {} {
  const charMap: any = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
