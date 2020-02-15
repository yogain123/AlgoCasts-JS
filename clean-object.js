let obj = {
    name:undefined,
    address:{
        pincode:null,
        country:"India",
        phno:{
            extension:null,
            num:999999
        }
    },
    gender:"male"
}


clean(obj);
// this clean function will remove all dirty values like null, undefined or anything with is false in javascript from the object using recurion
console.log(obj);

function clean(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if(Object.prototype.toString.call(value)==="[object Object]"){
            clean(value)
        }else{
            if(!value  && (!(String(value) === "false"))){
            delete obj[key];
            }
        }
    }
}
