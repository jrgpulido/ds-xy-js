/** 
 *
 * your solution here
 *
 */
function Node(data) {//constructor
    this.data = data
    this.next = null
}

function Linked(n) {//node
    this.head = n//node
    this.tail = n//node
    this.size = 1

    this.getHead = getHead
    this.prepend = prepend
    this.append = append
    this.traverse = traverse
    this.getTail = getTail
    this.contains = contains
    this.insertAfter = insertAfter
    this.insertBefore = insertBefore
}

function getHead() { return this.head }

//Agrega un elemento al principo
function prepend(n) {//new node
    n.next = this.head
    this.head = n
    this.size++
}

//Agrega un elemento al final
function append(n) {//new node
    n.next = null
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
}

//
// exercises
//
//FUncion para encontrar si existe un numero
function contains(v) {
    let n = this.head
    while (n) {
        if (n.data === v) {
            return true
        }
        n = n.next
    }
    return false
}
function getTail() {
    return this.tail
}

//Funcion para insertar un nodo despues de uno que queremos
function insertAfter(newNode, srch) {
    let n = this.head
    while (n) {
        //Cambiar las ligas de next del nodo
        if (n.data === srch) {
            let myNode = new Node(newNode)
            myNode.next = n.next
            n.next = myNode
            this.size++
            return true
        }
        n = n.next
    }
    console.log("no pudimos insertar el nuevo nodo " + newNode + " porque no existe el nodo "+ srch)
    return false
}
//Funcion para insertar un nodo antes de uno que queremos
function insertBefore(newNode, srch, linked) {
    let n = this.head
    let h = this.head
    let r = 0
    let l = linked
    while (n) {
        //Compruebo si el usuario quiere insertar un elemento antes del primero y si es asi lo vuelvo head a ese valor
        if(h.data === srch){
            let myNode = new Node(newNode)
            l.prepend(myNode)
            return true
        }
        else if (n.data === srch) {
            console.log("hiiii " + h.data)
            console.log("xdxd "+ r.data)
            let myNode = new Node(newNode)
            r.next = myNode
            myNode.next = n
            //myNode.next = n.next
            //n.next = myNode
            this.size ++
            return true
        }
        //En esta variable guardo el valor viejo de n accediendo mas rapido al que se encuentra atrás
        r = n
        n = n.next
    }
    console.log("no llega")
    return false
}

//first
//let n1=new Node('a',new Node('f'))
let n1 = new Node('a')
let n2 = new Node('b')

let l = new Linked(n1)//new Node('a')
l.traverse(l.getHead())

l.prepend(n2)
l.traverse(l.getHead())

//
l.append(new Node('c'))
l.traverse(l.getHead())

//
l.prepend(new Node('d'))
l.append(new Node('di'))

l.traverse(l.getHead())
//console.log(l.getTail())

//console.log(l.contains('z'))
l.insertAfter("l", "d")
l.insertAfter("b", "l")


console.log(l.getHead())
console.log(l.getTail())
l.traverse()

l.insertBefore("x", "d", l)

console.log(l.getTail())
l.traverse()
console.log(l.getHead())
console.log(l.getTail())