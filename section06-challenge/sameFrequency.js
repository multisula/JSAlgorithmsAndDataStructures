/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
 */
function sameFrequency(num1, num2){
  let arr1 = []
  while(num1 > 0){
    let digit = num1 % 10
    arr1[digit] = ++arr1[digit] || 1
    num1 = Math.floor(num1 / 10)
  }

  while(num2 > 0){
    let digit = num2 % 10
    if(!arr1[digit]) return false
    if(--arr1[digit] < 0) return false
    num2 = Math.floor(num2 / 10)
  }
  return true
}

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

console.log(sameFrequency(182,281))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578,5879385))
console.log(sameFrequency(22,222))
