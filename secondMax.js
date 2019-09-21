function getSecondMax(arr) {
    let max = getMax(arr);
    let maxIndex = arr.findIndex(item => item === max);
    arr[maxIndex] = -Infinity;
    return getMax(arr);
}

function getMax(arr) {
    let max = -Infinity;
    for (const item of arr) {
        if (item >= max)
            max = item;
    }
    return max;
}

console.log(getSecondMax([1, 2, 3, 4, 5, 66, 77, 8, 9]));