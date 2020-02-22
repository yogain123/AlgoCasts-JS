let arr = [];
let sum = (data)=>{
    if(!data){
        return arr.length?arr.reduce((a,b)=>a+b) : 0;
    }
    arr.push(data);
    return sum;
}

let res = sum(1)(2)(3)(4)();  // tricky
console.log(res); // 10


//=================

const summ = a=>b=>c=>d=>a+b+c+d;
let result = summ(1)(2)(3)(4);
console.log(result); // 10


