// Task 1 factorial

function factorial(n){
    if(n==0){
        return 1;
    }
    return n * factorial(n-1);
}

console.log("factorial is : ",factorial(5));
console.log("******************************************");

// Task 2 : How many digits
function nDigits(num) {
  if (num === 0) return 1;

  num = Math.abs(num);
  let count = 0;

  while (num >= 1) {
    count++;
    num = Math.floor(num / 10);
  }

  return count;
}

// 1000/10 => 100/10 => 10/10 => 1/10 => 0
// 123 / 10
// 1 * 100 + 2*10 + 3*1
// 1*(10**2) + 2*(10**1) + 3*(10**0)
console.log("How Many digits : ",nDigits(1000));
console.log("***********************************");





// Task 3 :  Time to draw !
function drawTree(height) {
  for (let i = 0; i < height; i++) {
    let spaces = ' '.repeat(height - i );   // spaces before stars
    let stars = '*'.repeat(2 * i + 1);         // 1, 3, 5, 7...
    console.log(spaces + stars);
  }

  // Draw the stem
  let stem = ' '.repeat(height ) + '|';
  console.log(stem);
}

// 4 - 0 - 1 = 3
// 4 - 1 - 1 = 2
// 4 - 2 - 1 = 1
// 4 - 3 - 1 = 0

drawTree(4);
console.log("*".repeat(50));

function combinator(n,p){
    return factorial(n) / (factorial(p)*factorial(n-p));
}

console.log("This is the result of combinator ",combinator(5,2));
console.log("***********************");

function calculator(a,o,b){
    if(o ==="+"){
        return a + b;
    }else if(o === "-"){
        return a-  b;
    }else if(o === "*"){
        return a * b;
    }else if (o === "/"){
        return a / b;
    }else if(o === "%"){
        return a % b;
    }else if(o === "c"){
        return combinator(a,b);
    }
}
console.log("calculator is ",calculator(5,"+",2));
console.log("***********************");
