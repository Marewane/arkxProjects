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



function bubbleSort(arr) {
  let n = arr.length;

//  [5,3,1,2,9,0] length here is 6 but it will be n - 1 is 5
// first step i = 0 and j = 0
// [3,1,2,5,0,9] first step
// [1,2,3,0,5,9] second step 
// [1,2,0,3,5,9] third step
// [1,0,2,3,5,9] fourth step
// [0,1,2,3,5,9] fifth step
  for (let i = 0; i < n - 1; i++) { // this is for outer loop
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next
            if (arr[j] > arr[j + 1]) {
                // Swap using a temporary variable
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

  return arr;
}

// Example usage:
const numbersToSort = [5, 3, 8, 4, 2,0];
console.log("**************************************************");
console.log("Sorted array:", bubbleSort(numbersToSort));


let arr = [1,2,3,4,5];
// [3,8,1,2,9,0]
function selectionSort(arr) {
  let n = arr.length;

//   [4,3,2,1] length is 4 
  for (let i = 0; i < n - 1; i++) {
        // Assume the current index is the smallest
        let minIndex = i;

        // Check the rest of the array to find the actual smallest
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Found new minimum, remember its index
            }
        }

        // Swap if a smaller value was found
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage:
let numbers = [9, 5, 2, 8, 1];
console.log("********************************************************");
console.log("Sorted array using SelectionSort :", selectionSort(numbers));



// [5, 4, 3, 1, 2]
// this is for i=1 [5,5,...] => [4,5,...]
// this is for i=2 [4,5,3,1,2] => [4,5,5,1,2] => []
// this is for i=3 [3,5,4]
function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i]; // current element to be inserted => key = 3
        let j = i - 1; 

        // Shift elements greater than key to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the key in its correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Test it
let arrTest = [5, 4, 3, 1, 2];
// console.log("Sorted array:", insertionSort(arrTest));




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