/*
recursiveRange
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
 */

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(n){
  let result = 0

  function helper(helperInput){
    if(helperInput === 0) return

    result += helperInput

    helper(helperInput - 1)
  }

  helper(n)

  return result
}

console.log(recursiveRange(6))
console.log(recursiveRange(10))