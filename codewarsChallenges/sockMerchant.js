// pair of socks
function sockMerchant(socks){
    let colorCount = {};
    let pairs = 0;

    for(let color of socks){
        if(colorCount[color]){
            colorCount[color]++;
        }else{
            colorCount[color] = 1;
        }

    }

    for(let color in colorCount){
        pairs += Math.floor(colorCount[color] / 2);
    }
    return pairs;
}


console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));