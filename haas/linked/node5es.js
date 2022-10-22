//
// imports ES5
// Node (Node4stu5es.js)
//

function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.insertAfter = insertAfter
  this.insertBefore = insertBefore
}

function getHead() { return this.head }

function prepend(n) {//new node to -FRONT-->
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {//new node to --BACK->
  n.next = null//
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

function contains(n) {//node
  let c = this.head
  while (c) {//exists
    if (c.key === n.key) return true
    c = c.next
  }
  return false
} // Recorre el nodo hasta (n)

function getTail() { return this.tail }

function insertAfter(newNode, k) {//node, key
  let c = this.head
  while (c) {// Mientra existe (c)
    if (c.key === k) {
      newNode.next = c.next
      c.next = newNode
      this.size++
      return
    }
    c = c.next
  }
}

function insertBefore(newNode, k) {//node, key
  let c = this.head
  while (c) {// Mientra existe (c)
    if (c.next.key === k) {
      newNode.next = c.next
      c.next = newNode
      this.size++
      return
    }
    c = c.next
  }
}