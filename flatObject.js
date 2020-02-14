let obj = {
    name:"yogendra",
    age:25,
    address:{
        city:"Bangalore",
        Country:"India",
        phno:{
            extension:12,
            mobno:9888888888
        },
        pincode:505055
    },
    gender:"male"
  }

let res = {};
flatObject(obj)
function flatObject(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if(Object.prototype.toString.call(value)==="[object Object]"){
            flatObject(value)
        }
        else{
            res[key] = value;
        }    
    }
}

console.log(res);

/**
 * result: 
 * { name: 'yogendra', 
  age: 25, 
  city: 'Bangalore', 
  Country: 'India', 
  extension: 12, 
  mobno: 9888888888, 
  pincode: 505055, 
  gender: 'male' } 
 */
