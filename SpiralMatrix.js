const arr = [
    [1,  2,  3,  4,  5,  6,  7],
    [8,  9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42],
    [43, 44, 45, 46, 47, 48, 49],
];

const SpiralMatrix = (array) => {
    const maxLength = array.length * array[0].length;
    const spiralWay = [];
    let latestItem = null;
    let x = 0,
        y = 0,
        i = 0;

    while(!latestItem) {
        for (let firstRowItem = y; firstRowItem < array[x].length - x; firstRowItem++) {
            spiralWay.push(array[x][firstRowItem]);
            i++;
        }
        for (let lastColumnItem = x + 1; lastColumnItem < array.length - x; lastColumnItem++) {
            spiralWay.push(array[lastColumnItem][array[lastColumnItem].length - x - 1]);
            i++;
        }
        for (let lastRowItem = array[array.length - x - 1].length - x - 2; lastRowItem >= y; lastRowItem--) {
            spiralWay.push(array[array.length - x - 1][lastRowItem]);
            i++;
        }
        for (let firstColumnItem = array[array.length - x - 1].length - x - 2; firstColumnItem > y; firstColumnItem--) {
            spiralWay.push(array[firstColumnItem][y]);
            i++;
        }
        if (i === maxLength) {
            latestItem = spiralWay[spiralWay.length - 1];
        } else {
            x++;
            y++;
        }
    }
    return {
        way: spiralWay.join(' => '),
        latestItem,
    }
};
console.log(SpiralMatrix(arr));


// Best solution
const input = [
    [1,  2,  3,  4,  5,  6,  7],
    [8,  9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 32, 33, 34, 35],
    [36, 37, 38, 39, 40, 41, 42],
    [43, 44, 45, 46, 47, 48, 49],
];

function run(input, result) {
    if (input.length === 0) {
        return result;
    }
    // add the first row to result
    result = result.concat(input.shift());
    // add the last element of each remaining row
    input.forEach(function(rightEnd) {
        result.push(rightEnd.pop());
    });
    // add the last row in reverse order
    result = result.concat(input.pop().reverse());
    // add the first element in each remaining row (going upwards)
    const tmp = [];
    input.forEach(function(leftEnd) {
        tmp.push(leftEnd.shift());
    });
    result = result.concat(tmp.reverse());
    return run(input, result);
}

const result = run(input, []);

console.log( 'result', result);