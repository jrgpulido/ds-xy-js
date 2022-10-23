/** 
 *
 * your solution here
 *
 */
function Queue() {
  this.dataStore = []
  this.top = 5 // Add top ---------------------------- 1st
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.isFull = isFull
  this.isEmpty = isEmpty
}

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


let q = new Queue()
q.enqueue("Meredith")
q.enqueue("Cynthia")
q.enqueue("Jennifer")
////////////////////////////
q.enqueue("Hector")
q.enqueue("Alvarez")
//////////////////////////// ; isFull()
q.enqueue("isFull12") /////// ;
q.enqueue("isFull13") /////// ;
//////////////////////////// ;
console.log(q.toString())

console.log("Primera fila de la cola:", q.front());
console.log("Ultima fila de la cola :", q.back());

console.log()
q.dequeue()
console.log()

// console.log(q.toString())

console.log('isFull?',q.isFull())

console.log('isEmpty?',q.isEmpty())