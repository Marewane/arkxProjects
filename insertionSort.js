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
console.log("Sorted array:", insertionSort(arrTest));