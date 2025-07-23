// hackerRank  Task challenge
function vowelsAndConsonants(s){
    let vowels = ["a","o","i","u","e"];
    let vow = [];
    let consonant = [];
    // marewane
    // a > e > a > e and m > r > w > n
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            vow.push(s[i]);
        }else{
            consonant.push(s[i]);
        }
    }
    for(let i=0;i<vow.length;i++){
        console.log(vow[i]);
    }
    for(let i=0;i<consonant.length;i++){
        console.log(consonant[i]);
    }
}

vowelsAndConsonants("marewane");
console.log("**************************************");

// The code of task day 2 , is in day1












































// var x = 10;
// if (true) {
//   var x = 20;
// }
// console.log(x);
// const x = 10;
// if (true) {
//   const x = 20;
//   console.log(x);
// }
// console.log(x);

// function testFunc(...args){
//     for(let i = 0; i < args.length; i++){
//         console.log(args[i]);
//     }
// }

// let i=0;

// while(i<10){
//     if(i==7){
//         return;
//     }
//     console.log(`the i is ${i}`);
//     i++;
// }

















