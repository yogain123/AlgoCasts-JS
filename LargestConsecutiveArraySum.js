LargestArraySum([2, -3, 4, -1, -2, 1, 5, -3]);
function LargestArraySum(arr){
    let maxEnding = 0;
    let maxSoFar = 0;
    for (const item of arr) {
        maxEnding+=item;
        if(maxEnding<0)
            maxEnding=0;
        if(maxEnding>maxSoFar)
            maxSoFar=maxEnding;
    }
    console.log(maxSoFar);
}
