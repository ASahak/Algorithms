const arr = [1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0];

const LongSequence = (array) => {
    let prev = array[0],
        maxCount = 0;
    const result = {};
    for (let i = 0; i < array.length; i++) {
        if (prev === array[i]) {
            maxCount++;
            if (maxCount > (result.count || 0)) {
                result.key = prev;
                result.count = maxCount;
            }
        } else {
            prev = array[i];
            maxCount = 1;
        }
    }
    return result;
};
console.log(LongSequence(arr));