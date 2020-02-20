// Problem :: Check if multiplication of any 2 value in an array is equal to the given number

//time conplicity of this algorithm1 ==> nlogn + o(n) === nlogn;
function multiplication1(arr, value){
    arr.sort((a,b)=>a-b);  // time complicity : nlog
    let i = 0;
    let j = arr.length-1;
    while(i<j){
        if(arr[i]*arr[j]===value){
            return true
        }
        else if(arr[i]*arr[j]<value){
            i++;
        }else{
            j--;
        }
    }
    return false
}

let res = multiplication1([2,5],10);
console.log(res);


// ================== Another way  =============================================
// Time complicity : O(n)
let res = multiplication2([2,5],10);
console.log(res);
function multiplication2(arr, value) {
    let hashSet = [];
    for (const item of arr) {
        if(value%item === 0 && hashSet.includes(+(value/item))){
            return true;
        }else{
            hashSet.push(item);
        }
    }
    return false
}
