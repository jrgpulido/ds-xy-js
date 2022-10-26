//
//
//
// import LinkedList from '../../../haas/linked/node5es.js'

import LinkedList from '../../../haas/linked/node5es.js'

let list = new LinkedList()

list.append('a')
console.log(list)

console.log('\n******************************')

list.append('b')
list.append([1, 2, 3, 4, 5])
console.log(list)

console.log('\n******************************')

list.prepend('MyHead')
console.log(list)

console.log('\n******************************')

console.log(list.getHead())

console.log('\n******************************')

console.log(list.getTail())

console.log('\n******************************')

console.log(list.toString())

console.log('\n******************************')

list.traverse()

console.log('\n******************************')

list.contains('b')

console.log('\n******************************')

list.insertAfter('c', 'b')
console.log(list)

console.log('\n******************************')
console.log("*-**-**-**-**-**-**-**-**-**-*")

list.insertBefore('c', 'b')
list.traverse()