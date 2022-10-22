/** 
 *
 * your solution here
 *
 */
function Queue() {
  this.dataStore = []
  this.top = 10 // Add top ---------------------------- 1st
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.isFull = isFull
  this.isEmpty = isEmpty
  this.sortQueue = sortQueue
}

//------------------------------------------------------
//funcion para ordenar una cola con una temporal
function sortQueue(q) {
  let temp = new Queue() //Cola temporal
  while (!q.isEmpty()) { // Mientras la cola no este vacia
    let item = q.dequeue() // Desprendo el primer elemento de la cola

    while (!(temp.isEmpty()) && (temp.back()) > item) {
      // Mientras la cola temporal no este vacia y el ultimo elemento 
      // de la cola temporal sea mayor que el elemento desprendido

      q.enqueue(temp.dequeue()) //Añado el elemento desprendido a la cola

    } //Si no se cumple la condicion, se añade el elemento desprendido a la cola temporal
    temp.enqueue(item)
  }
  return temp
}

/////////////////////////////////////////////////////////

function enqueue(element) {
  if (this.isFull())
    console.log('\nLa cola esta llena')
  else {
    console.log(element, 'asido añadido')
    this.dataStore.push(element)
  }
}

function dequeue() {
  if (this.isEmpty())
    console.log('\nLa cola esta Vacia')
  else {
    console.log(this.dataStore.shift(), 'asido desprendido')
  }
}

function front() {
  return this.dataStore[0]
}

function back() {
  return this.dataStore[this.dataStore.length - 1]
}

function toString() {
  let retStr = "";
  for (let i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n"
  }
  return retStr
}

function isFull() {
  if (this.dataStore.length === this.top) {
    return true //Si esta Lleno
  }
  else {
    return false //No esta Lleno
  }
} //---------------------------- METODO isFull()

function isEmpty() {
  if (this.dataStore.length === 0) {
    return true //Si esta Vacio
  }
  else {
    return false //No esta Vacio
  }
} //---------------------------- METODO isEmpty()

//funcion para generar n numeros aleatorios
function randomNum(n) {
  let q = new Queue()
  for (let i = 0; i < n; i++) {
    q.enqueue(Math.floor(Math.random() * 1e2))
  }
  return q;
}

let q = randomNum(5)

console.log("Primera fila de la cola: " + q.front());
console.log("Ultima fila de la cola " + q.back());

console.log('\n', q.toString())

// q.dequeue()
// console.log('\n')
// console.log(q.toString())

// // imprimir la cola ordenada console cola ordenada
// console.log('Cola Ordenada:')
// console.log(sortQueue(q).toString())
