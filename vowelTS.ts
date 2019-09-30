function vowel(str: string): number {
  let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(vowel("JavaScript"));
