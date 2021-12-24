let a = 1, b = 2;

// ES6
const SwapNumbersES6 = (a, b) => {
  console.log(`Before Swap: a = ${a}, b = ${b}`);
    [a, b] = [b, a];
  console.log(`Before Swap: a = ${a}, b = ${b}`);
};
SwapNumbersES6(a, b);

// ES5
const SwapNumbersES5 = (a, b) => {
    console.log(`Before Swap: a = ${a}, b = ${b}`);
    b = b - a;
    a = a + b;
    b = a - b;
    console.log(`Before Swap: a = ${a}, b = ${b}`);
};

SwapNumbersES5(a, b);