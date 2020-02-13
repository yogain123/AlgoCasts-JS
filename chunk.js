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


//============ Other Way ================

  
console.log(chunk2([1, 2, 3,4,5,6,7,8,9], 4));

function chunk2(arr, size) {
    let res = [];
    let first = 0;
    let last = size;    
    while(true){
        res.push(arr.slice(first, last));
        first = last;        
        last = last + size;
        
        if(last>arr.length){
            if(arr.slice(first).length===0){
                break;
            }
            res.push(arr.slice(first));
            break;
        }
    }
    return res;

}
