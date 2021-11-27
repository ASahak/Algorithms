// My solution
const str = '(){()}[[]]';
const parentheses = {
  opened: {
    '(': [],
    '{': [],
    '[': [],
  },
  closed: {
    ')': [],
    '}': [],
    ']': [],
  },
}
const openSymbol = ['(', '{', '['];
const closedSymbol = [')', '}', ']'];
const split_str = str.split('');
const getLength = (key) => Object.keys(parentheses[key]).reduce((acc, item) => {
    acc += parentheses[key][item].length
    return acc;
}, 0);
let raceIndex = 0;

const func = () => {
  const cL = getLength('closed');
  const oL = getLength('opened');

  if (cL + oL === split_str.length) {
    return cL === oL
  }
  if (closedSymbol.indexOf(split_str[raceIndex]) > -1) {
    if (cL === oL) return false;
    parentheses.closed[split_str[raceIndex]].push(openSymbol[split_str[raceIndex]]);
  } else if (openSymbol.indexOf(split_str[raceIndex]) > -1) {
    parentheses.opened[split_str[raceIndex]].push(openSymbol[split_str[raceIndex]]);
  }
  raceIndex++;
  return func()
}
console.log(func(str));


// Best solution
const isValidParentheses = function(s) {
    const stack = [];
    const characters = { ')': '(', '}': '{', ']': '['};
    for (const char of s) {

        if (!characters[char]){
            stack.push(char);
        }
        else if (stack.pop() !== characters[char]){
            return false;
        }
    }
    return stack.length === 0;
};
console.log(isValidParentheses('(){()}[[]]'));
