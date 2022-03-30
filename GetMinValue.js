const arr = [12, 20, 8, 67, 3, 1];
function GetMinValue (array) {
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[minIndex]) minIndex = i
  }
  return array[minIndex]
}
console.log(GetMinValue(arr))
