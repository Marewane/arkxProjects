const writeFileAsync = require("./writeFileAsync.js");
const readFileAsync = require("./readFileAsync.js");
const processFiles = require("./processFiles.js");

writeFileAsync("./fileText","welcome marwane you have been updated ").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err.message)
});

console.log("**********************************************");

readFileAsync("./fileText").then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err.message);
});

console.log("*******************************************************");

processFiles();

