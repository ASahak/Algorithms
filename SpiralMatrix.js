const arr = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
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
        i = 0,
        item = null;

    while(!latestItem) {
        for (let firstRowItem = y; firstRowItem < array[x].length - x; firstRowItem++) {
            item = array[x][firstRowItem];
            spiralWay.push(item);
            i++;
        }
        for (let lastColumnItem = x + 1; lastColumnItem < array.length - x; lastColumnItem++) {
            item = array[lastColumnItem][array[lastColumnItem].length - x - 1];
            spiralWay.push(item);
            i++;
        }
        for (let lastRowItem = array[array.length - x - 1].length - x - 2; lastRowItem >= y; lastRowItem--) {
            item = array[array.length - x - 1][lastRowItem];
            spiralWay.push(item);
            i++;
        }
        for (let firstColumnItem = array[array.length - x - 1].length - x - 2; firstColumnItem > y; firstColumnItem--) {
            item = array[firstColumnItem][y];
            spiralWay.push(item);
            i++;
        }
        if (i === maxLength) {
            latestItem = item;
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
