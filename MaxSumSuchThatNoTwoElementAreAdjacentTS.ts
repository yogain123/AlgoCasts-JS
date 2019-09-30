/*Function to return max sum such that no two elements
      are adjacent */

class MaxSumSuchThatNoTwoElementAreAdjacent {
  getMaxSumSuchThatNoTwoElementAreAdjacent(): void {
    var a = [5, 5, 10, 100, 10, 5];

    var inc = a[0];
    var exc = 0;
    var exc_new;
    for (var i = 1; i < a.length; i++) {
      exc_new = Math.max(inc, exc);

      inc = exc + a[i];
      exc = exc_new;
    }

    console.log(Math.max(inc, exc));
  }
}

let maxSumSuchThatNoTwoElementAreAdjacent = new MaxSumSuchThatNoTwoElementAreAdjacent();
maxSumSuchThatNoTwoElementAreAdjacent.getMaxSumSuchThatNoTwoElementAreAdjacent();
