// [5,2,9,1,5,6]
function selectionSort(arr) {
    // Loop through the entire array
    for (let i = 0; i < arr.length - 1; i++) {
        // Assume the current index is the smallest
        let minIndex = i;

        // Loop through the remaining unsorted part of the array
        for (let j = i + 1; j < arr.length; j++) {
            // If we find a smaller element, update the minIndex
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // If the minIndex is not the current index, swap the elements
        if (minIndex !== i) {
            // Swap arr[i] with arr[minIndex]
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