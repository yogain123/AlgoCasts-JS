function selectionSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) index = j;
    }
    if (index != i) [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr;
}

console.log(selectionSort([3, 2, 1, 5, 4, 3, 7, 8]));
