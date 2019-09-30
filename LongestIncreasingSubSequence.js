//https: //www.youtube.com/watch?v=CE2b_-XfVDk

class LongestIncreasingSubSequence {
  getLongestIncreasingSubSequence() {
    var a = [3, 4, -1, 0, 6, 2, 3];

    var i, j;
    var countArray = [];
    for (i = 0; i < a.length; i++) countArray[i] = 1;

    i = 0;
    j = 1;

    while (j < a.length) {
      if (i != j) {
        if (a[i] < a[j] && countArray[i] + 1 > countArray[j])
          countArray[j] = countArray[i] + 1;
        i++;
      } else {
        i = 0;
        j = j + 1;
      }
    }

    var res = this.findMax(countArray);
    console.log(res);
  }

  findMax(countArray) {
    var max = 0;
    for (var i = 0; i < countArray.length; i++) {
      if (countArray[i] >= max) max = countArray[i];
    }

    return max;
  }
}

let longestIncreasingSubSequence = new LongestIncreasingSubSequence();
longestIncreasingSubSequence.getLongestIncreasingSubSequence();
