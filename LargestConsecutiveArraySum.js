LargestArraySum2([2, -3, 4, -1, -2, 1, 5, -3]);

function LargestArraySum2(arr){
    let sum = 0;
    let maxSoFar = 0;
    for (const item of arr) {
        sum+=item;
        if(sum<0)
            sum=0;
        if(sum>maxSoFar)
            maxSoFar=sum;
    }
    console.log(maxSoFar);  // 7
}
