function sum(firstArgument) {
    const nextSum = secondArgument => sum.call(null, firstArgument + secondArgument);
    nextSum.valueOf = () => firstArgument;
    return nextSum;
}
// Should set plus in the front because of the valueOf method return value as toString()
console.log(+sum(10)(20)(30)) // 60
