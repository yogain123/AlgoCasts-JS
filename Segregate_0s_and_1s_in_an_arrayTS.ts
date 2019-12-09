/*
Maintain two indexes. Initialize first index left as 0 and second index right as n-1.
Do following while left < right
a) Keep incrementing index left while there are 0s at it
b) Keep decrementing index right while there are 1s at it
c) If left < right then exchange arr[left] and arr[right]
*/

// class Segregate_0s_and_1s_in_an_array {
//   segregate(): void {
//     var a = [0, 1, 0, 1, 1, 1];

//     var first = 0;
//     var last = a.length - 1;

//     while (first < last) {
//       while (a[first] != 1 && first < last) first++;

//       while (a[last] != 0 && first < last) last--;

//       if (first < last) {
//         a[first] = 0;
//         a[last] = 1;
//         first++;
//         last--;
//       }
//     }

//     console.log(a);
//   }
// }

// let Seg = new Segregate_0s_and_1s_in_an_array();
// Seg.segregate();


//Another easy TS Solution
seg([0, 1, 0, 1, 1, 1]);

function seg(arr: number[]): void {
    let charMap =  buildCharMap(arr);
    console.log(charMap);
    let zero = Array(charMap[0]).fill(0);
    let one = Array(charMap[1]).fill(1);
    console.log([...zero, ...one]);   // [ 0, 0, 1, 1, 1, 1 ]
}

function buildCharMap(arr: number[]) {
    let obj = {};
    for (const item of arr) {
        obj[item] = obj[item] +1 ||1;
     }
     return obj
}
