const fs = require("fs");

// for writing in file this will create file if not exists and override the content that has been in file if exists
function writeFileAsync(filePath,content){
    return new Promise((resolve,reject)=>{
      let file = fs.writeFile(filePath,content,"utf8",(err)=>{
        if(err){
          reject(err);
        }else{
          resolve("content has been succefuly added");
        }
      })
    })
}

module.exports = writeFileAsync;