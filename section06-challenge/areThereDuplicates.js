/*
Implement a function called, areThereDuplicates which accepts a variable number of arguments,
and checks whether there are any duplicates among the arguments passed in.
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
 */
// function areThereDuplicates(...args) {
//   // good luck. (supply any arguments you deem necessary.)
//   const obj1 = {}
//   for (const arg of args) {
//     obj1[arg] = ++obj1[arg] || 1
//   }
//   for (const key in obj1) {
//     if(obj1[key] > 1) return true
//   }
//   return false
// }

// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//       return true
//     }
//     start++
//     next++
//   }
//   return false
// }

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

console.log(areThereDuplicates(1, 2, 3))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))