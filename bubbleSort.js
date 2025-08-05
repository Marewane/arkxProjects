
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
                // let temp = arr[j];
                // arr[j] = arr[j + 1];
                // arr[j + 1] = temp;
                [ arr[j] , arr[j+1] ] = [ arr[j+1] , arr[j] ];
            }
        }
    }

  return arr;
}

// Example usage:
const numbersToSort = [5, 3, 3, 4, 2,0];
console.log("**************************************************");
console.log("Sorted array:", bubbleSort(numbersToSort));