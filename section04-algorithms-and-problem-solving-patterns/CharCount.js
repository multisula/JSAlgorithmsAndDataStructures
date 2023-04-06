// Write a fuction which takes in a string and returns counts of each character in the string.

charCount("aaaa");  //  {a:4}
charCount("hello")  //  {h:1, e:1, l:2, o:1}

function charCount(str){
  // make object to return at end
  let result = {}
  // loop over string, for each character...
  // let regex = new RegExp('')
  for (let char of str) {
    // char = char.toLowerCase();
    // if character is something else (space, period, etc.) don't do anything
    // if(/[a-z0-9]/.test(char)) {
    if(isAlphaNumeric(char)) {
      // if the char is a number/letter AND is a key in object, add one to count
      // if the char is a number/letter AND not in object, add it to object and set value to 1
      result[char] = ++result[char] || 1;
    }
  }
  // return object at end
  return result
}

function isAlphaNumeric(char){
  let code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) && // numeric (0-9)
     !(code > 64 && code < 91) && // upper alpha (A-Z)
     !(code > 96 && code < 123)) {  // lower alpha (a-z)
    return false;
  }
  return true;
}

console.log(charCount('Hello'));
console.log(charCount('Hi, there'));