class LargestArraySum {
  getLargestArraySum(): void {
    var a = [2, -3, 4, -1, -2, 1, 5, -3];

    var max_so_far = 0;
    var max_ending_here = 0;

    for (var i = 0; i < a.length; i++) {
      max_ending_here = max_ending_here + a[i];
      if (max_ending_here < 0) max_ending_here = 0;
      if (max_ending_here > max_so_far) max_so_far = max_ending_here;
    }
    console.log(max_so_far);
  }
}

let largestArraySum = new LargestArraySum();
largestArraySum.getLargestArraySum();
