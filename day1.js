let firstName ="Marwane";
let lastName = "Laamiri";
const Pi = 3.14;
let radius = 5;
let favoriteSuperHero = "Spider-Man";
let favoriteQuote = "With great power comes great responsibility.";


let fullName = firstName + " " + lastName;
let areaOfCircle = Pi * radius * radius;
let perimeterOfCircle = 2 * Pi * radius;

// concatenation
let motivation = "a wise man named " + favoriteSuperHero + ": " + favoriteQuote;


// swapping values of variables Task 3
let a = 3;
let b = 10;

[a,b]=[b,a];


console.log("the value of a is : " + a +  " and the value of b is : " + b);


// conditional statement

function checkIfEven(number){
    if(number % 2 === 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}


function numberToDay(numDay){
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
function max(num1,num2,num3){
    if(num1>=num2 && num1>=num3){
        return num1;
    }else if(num2 >= num1 && num2 >= num3){
        return num2;
    }else{
        return num3;
    }
}

function myGrade(score){
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
// getScore(83);

