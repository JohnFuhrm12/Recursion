function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
      };
      
    const middle = Math.floor(arr.length / 2);

    // Split Arr
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
    let sortedArr = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sortedArr.push(left[leftIndex]);
          leftIndex++; 
        } else {
            sortedArr.push(right[rightIndex]);
          rightIndex++; 
        }
      };

    return sortedArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log(mergeSort([3, 4, 6, 2, 5, 1]));

// VSCode Instructions: Input an array in mergeSort(), run terminal command: node mergesort.js 