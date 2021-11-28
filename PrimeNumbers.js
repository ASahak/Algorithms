/*isPrime*/
function isPrime (n) {
  let divisor = 2;
  while (divisor <= n / 2) {
    if (n % divisor === 0) return false
    else divisor++;
  }
  return true
}
console.log(isPrime(13))


/*Prime Factors*/
function primeFactors(n) {
  let factors = [],
      divisor = 2;
  while (n > 2) {
      if (n % divisor === 0) {
          n = n / divisor;
          factors.push(divisor);
      } else {
          divisor++;
      }
  }
  return factors;
}

console.log(primeFactors(40))
