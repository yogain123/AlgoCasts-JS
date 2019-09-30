//one string is an anagram of other strings, if it uses the same character in same quantity not
//considering spaces or special character

//let word = "resadsdasd%%%!!!!!";
//console.log(word.replace(/[^\w]/g, ""));   // it remove all special characters and space

console.log(anagram("rail safety", "fairy tales")); // True

function anagram(stringA, stringB) {
  console.log(cleanString(stringA)); //aaefilrsty
  console.log(cleanString(stringB)); //aaefilrsty
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}
