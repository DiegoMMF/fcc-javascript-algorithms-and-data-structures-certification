/**
 * Intermediate Algorithm Scripting: Missing letters
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 */

const areConsecutives = (a, b) => {
  return (a.codePointAt(0) + 1 === b.codePointAt(0)) ? true : false;
}

function fearNotLetter(str) {
  const firstChar = str[0];
  const lastChar = str[str.length - 1];
  if (str.length === 1 || areConsecutives(firstChar, lastChar)) {
    return undefined;
  };
  return (areConsecutives(firstChar, str[1])) 
    ? fearNotLetter(str.slice(1))
    : String.fromCodePoint(str.codePointAt(0)+1);
  
}

console.log(fearNotLetter("ac"));

/*
  const a = "\u0041"
  console.log(str.charCodeAt(0));
  console.log(str.charCodeAt(1));
  console.log(str.charCodeAt(2));
  console.log(str.charCodeAt(3));
  console.log(str.charCodeAt(4));
  console.log(a.normalize());
  return str;
*/