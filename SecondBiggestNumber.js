function findSecondBiggestNumber(arrNumbers) {
  let first = -Infinity;
  let second = -Infinity;

  for(let i = 0; i < arrNumbers.length; i++) {
    const num = arrNumbers[i]
    if(num > first) {
      second = first;
      first = num;
    } else if(num > second && num < first) {
      second = num
    }
  }

  return second;
}


console.log(findSecondBiggestNumber([6,8,55,44,1,66,88,90,91,-1]))
