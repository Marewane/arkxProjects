function isTriangle(a, b, c) {
  if (a >= b && a >= c) {
    return b + c > a;
  } else if (b >= a && b >= c) {
    return a + c > b;
  } else {
    return a + b > c;
  }
}

console.log("******************************************************************");
console.log(isTriangle(2,2,2));