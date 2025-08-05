function binarySearch(arr,target){
    let low = 0;
    let high = arr.length - 1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(target == arr[mid]){
            return mid;
        }else if(target < arr[mid]){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19],10));





function linearSearch(arr,element){
    let index;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == element){
            index = i;
        }
    }
    if(index){
        return index;
    }else{
        return "there is no element in this array";
    }
}
console.log("**************************************************");
console.log(linearSearch(["marewane","ahmed","mohammed"],"marewane"));