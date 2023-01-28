// Armstrong Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base

function isArmstrongNumber(value) {
  const digits = String(value);
  let result = 0;
  for (let i = 0; i < digits.length; i++) {
    result+= Math.pow(+digits[i], digits.length);
    if(result > value) return false;
  }
  return result === value;
}
console.log(isArmstrongNumber(153))
