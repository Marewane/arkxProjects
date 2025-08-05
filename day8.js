function isIsogram(str){
    // start code here
    let letters = str.split("").filter((letter)=> letter !== " ").map((letter)=> letter.toLowerCase());
    let isIsogram = true;
    
    let letterTocheck ;
    for(let i=0;i<letters.length;i++){
        letterTocheck = letters[i];
        for(let j=i+1;j<letters.length;j++){
            if(letterTocheck == letters[j]){
                isIsogram = false;
            }
        }
    }
    return isIsogram;


}

console.log(isIsogram("moOse"));

