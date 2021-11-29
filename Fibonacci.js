// Fibonacci recursion
const Fibonacci = (n) => {
    if (n < 2) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}
console.log(Fibonacci(12));

const FibonacciWithoutRecursion = (n) => {
    if (n < 2) return n;
    let numbers = [0, 1];
    for (let i = 2; i <= n; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2]);
    }
    return numbers[n];
}
console.log(FibonacciWithoutRecursion(12));