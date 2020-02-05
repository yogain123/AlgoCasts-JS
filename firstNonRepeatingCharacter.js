// return 1st none repeating char, if not found return _ , it should be done in O(n)

console.log(firstNonRepeatingCharacter("aarraaabbccddeeeff"));

function firstNonRepeatingCharacter(str) {
  let charMap = buildCharMap(str);
  for (const [key, value] of Object.entries(charMap)) {
    if (value === 1) {
      return key;
    }
  }
  return "_";
}

function buildCharMap(str) {
  let charMap = {};
  for (const item of str) {
    charMap[item] = charMap[item] + 1 || 1;
  }
  return charMap;
}
