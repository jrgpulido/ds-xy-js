//
// imports
// Node (Node4stu5es.js)
//


//first
let n1 = new Node(3)
let n2 = new Node(-2)
let n3 = new Node(1)

console.log(n1.data)
console.log('n1.next',n1.next)

//then
n1.next=n2
n2.next=n3
console.log('n2.next',n2.next)
