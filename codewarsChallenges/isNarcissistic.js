function isNarcissistic(number){
    if (typeof number !== "number") throw new Error('The Value should be number!');
    let numberLength = number.toString().length;
    let tempNumber = number;
    let result = 0;

    while(tempNumber > 0){
        result += Math.pow(tempNumber%10,numberLength);
        tempNumber = Math.floor(tempNumber / 10);
    }
    return result == number;
}

try{
    console.log(isNarcissistic(153));
}catch(err){
    console.log(err.message);
}
