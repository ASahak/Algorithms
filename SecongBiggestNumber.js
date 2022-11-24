const arr = [55,77,44,55,66,11,88];


function findSecondBiggestNumber(arrNumbers) {
  let first = 0;
  let second = 0;

  for(let i = 0; i <= arrNumbers.length; i++) {
    if(arrNumbers[i] > first) {
      second = max;
      first = arrNumbers[i];
    } else if(arrNumbers[i] > second && arrNumbers[i] < first) {
      second = arrNumbers[i]
    }
  }

  return second;
}


console.log(findSecondBiggestNumber([6,8,55,44,1,66,88,90,91,-1]))
