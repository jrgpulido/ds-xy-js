//
// describe
//

let node1={
 data:null,
 next:null
}

let node2={
 data:null,
 next:null
}

let node3={
 data:null,
 next:null
}


node3.data='c'
node2.data='b'
node1.data='a'

node1.next=node2
node2.next=node3

node1.next.data//outputs QM
node2.next.data//outputs QM
node3.next.data//outputs QM
