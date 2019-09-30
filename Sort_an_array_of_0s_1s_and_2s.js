class Sort_an_array_of_0s_1s_and_2s {
  sort() {
    var a = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
    var count = [0, 0, 0];
    var i, j;

    for (i = 0; i < a.length; i++) count[a[i]] += 1;

    let result = [];
    for (i = 0; i <= 2; i++) {
      for (j = 1; j <= count[i]; j++) result.push(i);
    }
    console.log(result);
  }
}

let sortIt = new Sort_an_array_of_0s_1s_and_2s();
sortIt.sort();
