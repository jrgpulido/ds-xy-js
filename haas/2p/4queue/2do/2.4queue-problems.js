/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Queue implementation (array-based)
 *
 * add
 *    top
 * 
 * methods
 *    isFull()
 *    isEmpty()
 *
 */
//
// ES5
// to complete
//

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
q.enqueue("isFull") /////// ;
q.enqueue("isFull") /////// ;
//////////////////////////// ;
console.log('\n')
console.log(q.toString())

console.log("Primera fila de la cola: " + q.front());
console.log("Ultima fila de la cola " + q.back());

q.dequeue()


console.log('\n')
console.log(q.toString())
