/**
 * @param {string} s
 * @return {number}
 */

const romanMapping = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}
var romanToInt = function(s) {
    let sum = 0;
    let arrNumber = [...s].map(item=>romanMapping[item]);
    for(let i=0;i<arrNumber.length;){
        if(arrNumber[i]<arrNumber[i+1]){
            sum = sum + arrNumber[i+1] - arrNumber[i];
            i=i+2;
        }else{
            sum = sum + arrNumber[i];
            i++;
        }
    }
    return sum;
};
