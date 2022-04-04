const arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
function DichotomyBinarySearch(array, searchValue) {
  let low = 0;
  let high = array.length - 1;
  let mid = ~~((low + high) / 2);
  while (low <= high) {
    mid = ~~((low + high) / 2);
    if (array[mid] === searchValue) return  mid;
    else if (array[mid] < searchValue) {
      low = mid + 1
    } else {
      high = mid -1
    }
  }
  return -1
}
console.log(DichotomyBinarySearch(arr, 7))
