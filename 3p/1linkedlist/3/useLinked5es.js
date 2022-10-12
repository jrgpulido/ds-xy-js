//
// imports ES5
// linked5es2do
//

//first
//let n1=new Node('a',new Node('f'))
let n1=new Node('a')
let n2=new Node('b')

let l=new Linked(n1)
l.traverse(l.getHead())

l.prepend(n2)
l.traverse(l.getHead())

//
l.append(new Node('c'))
l.traverse(l.getHead())

//
l.prepend(new Node('d'))
l.traverse(l.getHead())

//then
//console.log(l.contains('x'))//false
//l.contains('a')//true
