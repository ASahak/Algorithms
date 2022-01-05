const FirstNonRepeatingChar = (str) => {
   let firstChar = '_';
   for (let i = 0; i < str.length; i++) {
       const index = str.indexOf(str[i]);
       if (index === i && str.indexOf(str[i], index + 1) === -1) {
           firstChar = str[i];
           break;
       }
   }
   return firstChar
}

console.log(FirstNonRepeatingChar('the quick brown fox jumps then quickly blow air'));