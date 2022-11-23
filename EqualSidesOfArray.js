// Find the index of element which left and right sides sum are equal

function findEvenIndex(arr)
{
  const commonSum = arr.reduce((acc, item) => {
    acc+=item;
    return acc;
  }, 0);
  
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if((commonSum - arr[i]) / 2 === leftSum) return i
    leftSum+=arr[i];
  }
  return -1
}
console.log(findEvenIndex([1,2,3,4,3,2,1]));
