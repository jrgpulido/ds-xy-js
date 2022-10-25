export default
//
// ES5
//
function node(n) { // Node
  //Constructor
  this.head = n
  this.tail = n
  this.size = 1

  //Methods
  this.getHead = getHead
  this.getTail = getTail
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.insertAfter = insertAfter
  this.insertBefore = insertBefore
}

function getHead() { return this.head }

function prepend(n) {//new node to -FRONT-->
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {//new node to <--BACK-
    this.tail.next = n
    this.tail = n
    this.size++
}

function traverse() {
  let c = this.head
  while (c) {//exists
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
} // Recorre el nodo completo

//
// exercises
//

function contains(n) {
  let c = this.head
  while (c) {//exists
    if (c.key === n.key) return true
    c = c.next
  }
  return false
}

function getTail() { return this.tail }

function insertAfter(n, d) { // new node, data
    let c = this.head
    while (c) {//exists
        if (c.data === d) {
        n.next = c.next
        c.next = n
        this.size++
        return true
        }
        c = c.next
    }
    return false
}

function insertBefore(n, d) { // new node, data
    let c = this.head
    while (c) {//exists
        if (c.data === d) {
            n.next = c
            this.head = n
            this.size++
            return true
        }
    c = c.next
    }
    return false
}

let n = new node('b')
n.insertBefore('c', 'b')
// console.log(n) // Node { data: 'b', next: null }

console.log(n)