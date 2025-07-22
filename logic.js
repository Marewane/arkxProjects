// conditional statement

function checkIfEven(number){
    if(number % 2 === 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}


function weekDayName(numDay){
    switch(numDay){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}
}

// -2,3,5
function maxNumber(num1,num2,num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    }else if(num2>=num1 && num2>=num3){
        return num2;
    }else{
        return num3;
    }
}

function getScore(score){
    if(score>85){
        console.log("grade is A");
    }else if(score>70 && score <=85){
        console.log("grade is B");
    }else if(score>55 && score<=70){
        console.log("grade is C");
    }else if(score>40 && score<=55){
        console.log("grade is is D");
    }else if(score>15 && score<=40){
        console.log("grade is E");
    }else{
        console.log("grade is D");
    }
}
getScore(83);
console.log(typeof ("5"-2));
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

let i=0;

while(i<10){
    if(i==7){
        return;
    }
    console.log(`the i is ${i}`);
    i++;
}