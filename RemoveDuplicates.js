const arr = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];

const RemoveDuplicates = (array) => {
    const newArray = [];
    const objKeys = {};
    for (let i = 0; i < array.length; i++) {
        if (objKeys.hasOwnProperty(array[i])) {
            continue;
        }
        objKeys[array[i]] = true;
        newArray.push(array[i]);
    }
    return newArray;
};
console.log(RemoveDuplicates(arr));



const RemoveDuplicatesViaSet = (array) => {
    const uniqueArr = new Set();
    for (let i = 0; i < array.length; i++) {
        uniqueArr.add(array[i]);
    }
    return uniqueArr;
};
console.log(RemoveDuplicatesViaSet(arr));
