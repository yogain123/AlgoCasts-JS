interface BinaryObjecttype {
  present: boolean;
  index?: number;
}

function binarySearch(arr: number[], itemToSearch: number): BinaryObjecttype {
  let first = 0;
  let last = arr.length - 1;
  let mid = Math.ceil((first + last) / 2);
  while (first <= last) {
    if (itemToSearch < arr[mid]) last = mid - 1;
    else if (itemToSearch > arr[mid]) first = mid + 1;
    else
      return {
        present: true,
        index: Math.ceil(mid + 1)
      };
    mid = Math.ceil((first + last) / 2);
  }
  return {
    present: false
  };
}

//arr should be sorted for Binary
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
