// My solution
const GCD = (a, b) => {
    const [arr1, arr2] = [[], []];
    const result = [];
    [{ n: a, array: arr1 }, { n: b, array: arr2 }].forEach(e => {
        let divisor = 2;
        let n = e.n;
        while (n > 2) {
            if (n % divisor === 0) {
                e.array.push(divisor);
                n = n / divisor;
            } else {
                divisor++;
            }
        }
    });
    for (let i = 0; i< arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) > -1) {
            result.push(arr1[i]);
            arr2.splice(arr2.indexOf(arr1[i]), 1)
        }
    }
    return result.reduce((a, b) => a * b, 1);
}

console.log(GCD(336, 360));


// Best solutions
const GCD_Best = (a, b) => {
    if (b === 0) return a;
    return GCD_Best(b, a % b);
}
console.log(GCD_Best(336, 360));


function GCD_two_numbers(x, y) {
    while(y) {
        let t = y;
        y = x % y;
        x = t;
    }
    return x;
}
console.log(GCD_two_numbers(336, 360))
