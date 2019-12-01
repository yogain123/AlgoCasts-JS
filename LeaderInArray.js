//JS program to print leaders in an array
/*
Write a program to print all the LEADERS in the array. An element is leader if it is greater than all the elements to 
its right side. And the rightmost element is always a leader. For example int the array {16, 17, 4, 3, 5, 2}, leaders are 17, 5 and 2.*/


leaderInArray([16, 17, 4, 3, 5, 2]);
function leaderInArray(arr) {
    let max = -Infinity;
    for (let i = arr.length-1; i >= 0; i--) {
        if(arr[i]>max){
        console.log(arr[i]);
        max = arr[i];
        }
    }
}
