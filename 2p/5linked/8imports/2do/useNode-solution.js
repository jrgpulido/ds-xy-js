/**
 *
 * your solution here
 *
 */
import Node from '../../../../haas/linked/node6es.js'

let n = new Node('b')
// console.log(n)| // Node { data: 'b', next: null }
let n1 = 'c'
n.insertAfter(n1, 'a')

console.log(n)