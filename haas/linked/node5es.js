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

LinkedList.prototype.getHead = function () { // Devuelve el primer nodo de la lista
    return this.head.data
}

LinkedList.prototype.getTail = function () { // Devuelve el último nodo de la lista
    return this.tail
}

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

LinkedList.prototype.toString = function () { // Devuelve la lista en formato string
    let referencia = this.head;
    let cadena = ""
    while (referencia) {
        cadena += referencia.data + " "
        referencia = referencia.next
    }
    return cadena
}

// exporta la lista enlazada
export default LinkedList

// exporta el nodo
export { Node }