//
// what it does : one by one
//

let numbers = [ 3, 2, 1]
console.log(numbers)

// 
numbers.push(10, 11)
console.log(numbers)

//
numbers.pop()
console.log(numbers)

//vs pop
numbers.shift()
console.log(numbers)

//vs push
numbers.unshift( -2, -1, 0)
console.log(numbers)

//remove/separate/splice
let ns = numbers.splice(2,3)
console.log(numbers)
console.log(ns)

//extract
let sl = numbers.slice(2)
console.log(numbers)
console.log(sl)
