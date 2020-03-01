//Cloning Object Deeply

let obj = {
    "name": "yogendra",
    "age": 23,
    "indian": true,
    "dummy":{
        "dummy1":{
            "dummy2":{
                "name":"yogendra"
            }
        }
    },
    yummy:"yummy",
    "address": [
      {
        "type": "present",
        "city": "bangalore"
      },
      {
        "type": "permanent",
        "city": "kanpur"
      }
    ],
    "phno": [
      "9888876556",
      "1234565678"
    ],
    "hobbies": {
      "type": "school",
      "hob": "reading"
    },
    "location" : {
              "lat" : 40.12,
              "lon" : -71.34
          }
  }

let res = {};

function deepClone(obj){
    for (const [key, value] of Object.entries(obj)) {
        if(Object.prototype.toString.call(value) === "[object Object]"){
            res[key] = value
            deepClone(value);
        }else{
            res[key] = value
        }
    }
    return res;
}

let result = deepClone(obj)
console.log(JSON.stringify(result));
