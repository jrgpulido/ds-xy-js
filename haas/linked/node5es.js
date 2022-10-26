//
// ES5
//
function LinkedList() { // Constructor de listas enlazadas
    this.head = null;
    this.tail = null;

}

function Node(data) { // Constructor de nodos
    this.data = data
    this.next = null
}

/////////////////////////////////////////////////////
// Tested - OK - getHead
LinkedList.prototype.getHead = function () { // Devuelve el primer nodo de la lista
    return this.head.data
}

// Tested - OK - getTail
LinkedList.prototype.getTail = function () { // Devuelve el último nodo de la lista
    return this.tail
}

// Tested - OK - prepend
LinkedList.prototype.prepend = function (data) { // Añade un nodo al principio de la lista
    if (!this.head) {
        this.head = new Node(data)
        this.tail = data
    }
    else {
        let referencia = this.head;
        this.head = new Node(data)
        this.head.next = referencia
    }
}

// Tested - OK - append
LinkedList.prototype.append = function (data) { // Añade un nodo al final de la lista
    if (!this.head) {
        this.head = new Node(data)
        this.tail = data
    }
    else {
        let referencia = this.head;
        while (referencia.next) {
            referencia = referencia.next
        }
        referencia.next = new Node(data)
        this.tail = data
    }
}

// Tested - OK - toString
LinkedList.prototype.toString = function () { // Devuelve la lista en formato string
    let referencia = this.head;
    let cadena = ""
    while (referencia) {
        cadena += referencia.data + " "
        referencia = referencia.next
    }
    return cadena
}

// Tested - OK - traverse
LinkedList.prototype.traverse = function () { // Recorre la lista y ejecuta una función callback
    let referencia = this.head;
    let i = 0
    while (referencia) {
        console.log('['+i+']',referencia.data)
        referencia = referencia.next
        i++
    }
    console.log('\n')
}

// Tested - OK - contains
LinkedList.prototype.contains = function (data) { // Devuelve true si la lista contiene el valor buscado
    let referencia = this.head
    while (referencia) {
        if (referencia.data === data) {
            console.log('El nodo [' +data+ '] está en la lista')
            return true
        }
        referencia = referencia.next
    }
    console.log('El nodo [' +data+ '] no está en la lista')
    return false
}

// Tested - OK - insertAfter
LinkedList.prototype.insertAfter = function (input, data) { // Añade un nodo después de otro
    let referencia = this.head
    let newNode = new Node(input)
    while (referencia) {
        if (referencia.data === data) {
            newNode.next = referencia.next
            referencia.next = newNode

            console.log('El nodo [' +input+ '] se ha insertado después del nodo [' +data+ ']' )
            return true
        }
        referencia = referencia.next
    }
    console.log('El nodo [' +data+ '] no está en la lista')
    return false
}

// Tested - OK - insertBefore - ERROR en Arrays
LinkedList.prototype.insertBefore = function (input, data) { // Añade un nodo antes de otro

    let referencia = this.head
    let newNode = new Node(input)

    if (referencia.data === data) {
        newNode.next = referencia
        this.head = newNode

        console.log('El nodo [' +input+ '] se ha insertado antes del nodo [' +data+ ']' )
        return true
    }
    while (referencia) {

        if (referencia.next.data === data) {
            newNode.next = referencia.next
            referencia.next = newNode

            console.log('El nodo [' + input + '] se ha insertado antes del nodo [' + data + ']')
            return true
        }
        referencia = referencia.next
    }
}

// exporta la lista enlazada
export default LinkedList

// exporta el nodo
export { Node }