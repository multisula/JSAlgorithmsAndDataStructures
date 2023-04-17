/*
fib
Write a recursive function called fib
  which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
  which starts with 1 and 1,
  and where every number thereafter is equal to the sum of the previous two numbers.
 */

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(nth){
  // add whatever parameters you deem necessary - good luck!
  if (nth === 1) return 1
  if (nth === 2) return 1

  return fib(nth - 1) + fib(nth - 2)
}


console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
console.log(fib(35))