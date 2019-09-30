let StackTS = require("./stack");
class Next_Greater_Element {
  getResult() {
    var a = [4, 5, 2, 25];
    let s = new StackTS();

    s.push(a[0]);
    var i, k;

    for (i = 1; i < a.length; ) {
      k = s.peek();
      if (a[i] > k) {
        while (a[i] > k && !s.isEmpty()) {
          console.log(k + "--->" + a[i]);

          s.pop();
          if (!s.isEmpty()) {
            k = s.peek();

            if (k > a[i]) console.log(k + "--->" + -1);
          }
        }

        s.push(a[i]);
        i++;
      } else {
        s.push(a[i]);
        i++;
      }
    }
    console.log(a[a.length - 1] + "--->" + -1);
  }
}

console.log("==========NEXT GREATER ELEMENT=========");

let resTS = new Next_Greater_Element();
resTS.getResult();
