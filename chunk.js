console.log(chunk([1, 2, 3, 4, 5], 4));

function chunk(arr, size) {
    let result = [];
    let index = 0;
    while (index < arr.length) {
        result.push(arr.slice(index, index + size));
        index = index + size;
    }
    return result;
}