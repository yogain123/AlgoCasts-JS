function pairCheckForSum(a) {
  var num = 16;
  a.sort((item1, item2) => item1 - item2);
  var first = 0;
  var last = a.length - 1;
  while (a[first] + a[last] != num) {
    if (a[first] + a[last] > num) last -= 1;
    else first += 1;
  }

  console.log("Numbers are  " + a[first] + " " + a[last]);
}


pairCheckForSum([1, 4, 45, 6, 10, -8]);
