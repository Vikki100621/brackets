module.exports = function check(str, bracketsConfig) {

  const openingBrackets = new Set();
  const closingBrackets = new Set();
  const matchingBrackets = {};
  const stack = [];
  const stackSecond = [];
  for (let [opening, closing] of bracketsConfig) {
    openingBrackets.add(opening);
    closingBrackets.add(closing);
    matchingBrackets[opening] = closing;
  }
  for (let char of str) {
    if (openingBrackets.has(char) && (closingBrackets.has(char))) {
      stackSecond.push(char)
    } else if (openingBrackets.has(char)) {
      stack.push(char);
    } else if (closingBrackets.has(char)) {
      const lastOpening = stack.pop();
      if (matchingBrackets[lastOpening] !== char) {
        return false;
      }
    }
  }
  if (stack.length == 0 && stackSecond.length % 2 === 0) {
    return true
  } else return false
    
  }

