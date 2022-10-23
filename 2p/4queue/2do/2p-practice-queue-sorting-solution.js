/**
 **
 * your solution here
 *
 */
function Queue() { //Constructor
  this.dataStore = []
  this.top = 10  //Tamaño de la cola
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.length = length
  this.size = size
  this.clear = clear

  this.isFull = isFull //Devuelve true si la cola esta llena
  this.isEmpty = isEmpty //Devuelve true si la cola esta vacia
  this.toString = toString //Devuelve todos los elementos de la cola

  //
  // this.sortQueue = sortQueue //Ordena una cola usando una cola temporal
  this.genNum = genNum //Genera numeros aleatorios y los agrega a la cola
  //

  this.traverse = traverse //Recorre la cola y ejecuta una funcion
  this.search = search //Busca un elemento en la cola
}

function enqueue(element) {
  if (this.isFull()) {
    return "La cola esta llena"
  }
  else {
    this.dataStore.push(element)
  }
}

function dequeue() {
  if (this.isEmpty()) {
    return "La cola esta vacia"
  }
  else {
    return this.dataStore.shift()
  }
}

function front() {
  return this.dataStore[0]
}

function back() {
  return this.dataStore[this.dataStore.length - 1]
}

function length() {
  return this.dataStore.length
}

function size() {
  return this.top
}

function clear() {
  this.dataStore = []
}

function isFull() {
  return this.dataStore.length === this.top;
}

function isEmpty() {
  return this.dataStore.length === 0;
}

function toString() {
  let retStr = "";
  for (let i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n"
  }
  return retStr
}

//Ordena una cola usando una cola temporal
function sortQueue(queue) {
    let tempQueue = new Queue()
    while (!queue.isEmpty()) {

        // Saca el primer elemento
        let tmp = queue.dequeue()

        // Mientras la cola temporal no esté vacía &&
        // la parte superior de la cola es mayor que temp
        while (!tempQueue.isEmpty() && tempQueue.back() > tmp) {

        // Saca de la cola temporal y
        // lo empuja a la cola principal
        queue.enqueue(tempQueue.dequeue())
        }

        // Agrega temp a la cola temporal
        tempQueue.enqueue(tmp)
    }

    // Copia la cola temporal a la cola principal
    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.dequeue())
    }
}

function genNum(n, max) {
  for (let i = 0; i < n; ++i) {
    this.dataStore.push(Math.floor(Math.random() * max))
  }
}
//

function traverse(fn) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    fn(this.dataStore[i])
  }
}

function search(element) {
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return i
    }
  }
  return -1 //Si no se encuentra el elemento "Undefined"
}


let q = new Queue()
q.genNum(10, 100)

// console.log("\nPrimera fila de la cola:", q.front());
// console.log("Ultima fila de la cola:", q.back(), '\n');

console.log(q.dataStore)

sortQueue(q)
q.clear()