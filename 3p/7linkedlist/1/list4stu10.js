//
// imports
// node
// traverse
//

let r=new Node(0)//root
let p=new Node(1)//previous
r.next=p//link
for (let i=2;i<10;i++){
    let n = new Node(i)//next
    p.next = n//link
    p=n
}

traverse(r)
