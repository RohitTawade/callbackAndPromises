function doubleArray(arr, callback) {
    const doubledArray = arr.map(callback);
    return doubledArray;
}

// Example callback function to double a number
function double(num) {
    return num * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleArray(numbers, double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
