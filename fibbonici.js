console.log(1);
console.log(1);

function fibbonici(a, b) {
  let c = a + b;
  if (c > 150) return;
  console.log(c);
  a = b;
  b = c;
  fibbonici(a, b); // Recursion
}

fibbonici(1, 1);
