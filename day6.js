const fs = require("fs");
const path = require("path");

// return masked string for codewar
function maskify(cc) {
  let maskedString = [];
  if(cc.length > 4){
    for(let i=0;i<cc.length;i++){
        if(cc.length - i > 4){
        maskedString.push("#");
        }else{
        maskedString.push(cc[i]);
        }
    }
  }else{
    return cc;
  }
  return maskedString.join("");
}

console.log(maskify("abcss"));




console.log("*****************************************");





