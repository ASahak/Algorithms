const arr1 = [4, 5, 11, 19, 20],
    arr2 = [1, 2, 10, 15];

const MergeSortedArrays = (array1, array2) => {
    let merged = [];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
    while (current < (array1.length + array2.length)) {
        let unmerged1 = array1[index1];
        let unmerged2 = array2[index2];
        // if next comes from arr1
        if (unmerged1 < unmerged2 || (unmerged2 === undefined && unmerged1 !== undefined)) {
            merged[current] = unmerged1;
            index1++;
            // if next comes from arr2
        } else {
            merged[current] = unmerged2;
            index2++;
        }
        current++;
    }
    return merged;
}
console.log(MergeSortedArrays(arr1, arr2));