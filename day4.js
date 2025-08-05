// Task 1
function sum(nums){
    let tot=0;
    for(let i=0;i<nums.length;i++){
        tot += nums[i];
    }
    return tot;
}

function countEven(nums){
    let totEven = 0;

    for(let i=0;i<nums.length;i++){
        if(nums[i] % 2 == 0){
            totEven++;
        }
    }
    return totEven;
}

function double(nums){
    let doubleArr = [];
    for(let i=0;i<nums.length;i++){
        doubleArr.push(nums[i]*2);
    }

    return doubleArr;
}




















// [1,2,3,4,5] SEARCH FOR 4
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Found it!
        } else if (target > arr[mid] ) {
            low = mid + 1; // Go right
        } else {
            high = mid - 1; // Go left
        }
    }

    return -1; // Not found
}