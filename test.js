




// let splitTest = test.split(" ");
// console.log(splitTest[0]);









function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let user = {name:"marwane",age:21};
            resolve(user);
        }, 2000);
    })
}

async function sayWelcome(){
    let user = await fetchUserData();
    console.log("Welcome To this Page " + user.name);
}

// sayWelcome().then(()=>{
//     console.log("the welcome message has been sent")
// });





let [first,second,...third] = [1,2,3,4,5,6];
// console.log(first);
// console.log(second);
// console.log(third);



var a = "a";
var b = "b";
console.log("swaping .................................................");
[a,b] = [b,a];
console.log(a,b);

let firstArr = [1,2,3];
let secondArr = [4,5,6];
let last = [firstArr,secondArr];
let strConct = "hello";
let user = {
    name:"marwane",
    lastname:"unkown"
}
const fixedName = {lasname:"laamiri",...user};
console.log(fixedName);

function testFun(...arg){
    console.log(arg)
}



// [0, 4, 6, 8, 8, 8, 5, 5, 7]
function setReducer(arr) {
    let result = [];
    let i = 0;

    while (i < arr.length) {
        let count = 1;

        // Count how many times the current number repeats
        while (i + count < arr.length && arr[i] === arr[i + count]) {
            count++;
        }

        result.push(count);
        i += count; // Skip to the next new number
    }

    return result;
}

// [1,2,3,4]
console.log("Testing ...  ",setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7,7,8]));



// [3, 3, 6, 2, 1, 3]
function group(arr) {
    let map = new Map();
    let result = [];

    for(let num of arr){
        if(!map.has(num)){
            map.set(num,[num]);
            result.push(map.get(num));
        }else{
            map.get(num).push(num);
        }
    }
    return result;
}

// console.log(group([3, 2, 6, 2, 1, 3]));



// function getUser (id, callback) {
//   return setTimeout(() => {
//     if (id === 5) {
//       callback(null, { nickname: 'Teddy' })
//     } else {
//       callback(new Error('User not found'))
//     }
//   }, 1000)
// }

// function callback (error, user) {
//   if (error) {
//     console.error(error.message)
//     process.exit(1)
//   }

//   console.log(`User found! Their nickname is: ${user.nickname}`)
// }


// console.log("*****************************************************");
// getUser(1, callback) // -> `User not found`
// getUser(5, callback) // -> `User found! Their nickname is: Teddy`




