//
//
//
import Node from '../../../haas/linked/node5es.js'


l.append(new Node('c'))
l.append(new Node('d'))
l.append(new Node('e'))
l.append(new Node('f'))

l.prepend(new Node('a'))

l.traverse()

console.log(l.contains(new Node('c')))
console.log(l.contains(new Node('z')))
console.log(l.contains(new Node('a')))

console.log(l.getHead())
console.log(l.getTail())

l.insertBefore(new Node('z'), new Node('c'))
l.traverse()

l.insertAfter(new Node('y'), new Node('c'))
l.traverse()