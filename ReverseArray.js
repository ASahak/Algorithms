const arr = [ 2, 60 , 50 , 4, 95 , 80 , 70 ];
function ReverseArray(array) {
  let middle = ~~(array.length / 2);
  for (let i = 0; i < middle; i++) {
    let temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp
  }
  return array
}
console.log(ReverseArray(arr))
