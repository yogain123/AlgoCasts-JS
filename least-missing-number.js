/*
This is a demo task.

Write a function:

class Solution { public int solution(int[] A); }

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Copyright 2009–2020 by Codility Limited. All Rights 
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    
    A = A.sort((a,b)=>a-b);

    
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.every(item=>item<=0)){
        return 1;
    }
    
    let positiveArr = A.filter(item=>item>0);
    positiveArr = [...new Set(positiveArr)]
    let incremental = 1;

    console.log(positiveArr);
    
    
    for(var item of positiveArr){
        if(incremental !== item){
            return incremental;
        }else{
            incremental++;
        }
    }
    return ++item;
    }



let res = solution([1,2,3]);

console.log(res);
