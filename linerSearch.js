function linerSearch(arr, itemToSearch) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === itemToSearch) {
      return {
        present: true,
        index: i
      };
    }
  }
  return {
    present: false
  };
}

console.log(linerSearch([1, 2, 3, 4, 44, 6, 5, 4, 7, 8], 8888));
