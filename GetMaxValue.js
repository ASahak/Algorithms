const arr = [12, 20, 8, 67, 3];
function GetMaxValue (array) {
// Example 1
  let maxValue = array[0];
  for (let i = 0; i < array.length; i++) {
    if (maxValue < array[i]) maxValue = array[i]
  }
  return maxValue;

// Example 2
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > arr[i + 1]) {
  //     let temp = arr[i + 1];
  //     arr[i + 1] = arr[i]
  //     arr[i] = temp;

  //   }
  // }
  // return arr[arr.length -1]
}
console.log(GetMaxValue(arr))
