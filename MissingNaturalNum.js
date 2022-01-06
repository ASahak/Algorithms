// My example
const MissingNaturalNum = (arr) => {
    let result,
        maxValue = Math.max(...arr);
    for (let i = 1; i < maxValue; i++) {
        if (arr.indexOf(i) === -1) {
            result = i;
            break;
        }
    }
    return result;
}
console.log(MissingNaturalNum([1, 2, 3, 5, -3, -10, 56, 10]));


// Another solution
function MissingNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = Math.abs(arr[i]);
        if (arr[index - 1] > 0) {
            arr[index - 1] *= -1;
        }
    }
    let missingNumber = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            missingNumber = i + 1
            break;
        }
    }
    return missingNumber;
}
console.log(MissingNumber([1, 2, 38, 4, 5, 6, 7, 8, 10]))
