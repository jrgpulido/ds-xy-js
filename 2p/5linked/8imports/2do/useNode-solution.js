/**
 *
 * your solution here
 *
 */
import Node from '../../../../haas/linked/node5es.js'

let list = new Node();list.prepend('b')
console.log(list)

console.log('\n******************************')

list.insertAfter('c','b') // inserta 'c' después de 'b'
list.traverse()

console.log('\n******************************')

list.insertBefore('c','b') // inserta 'c' antes de 'b'
list.traverse()

console.log('\n******************************')
console.log("*-**-**-**-**-**-**-**-**-**-*")
