/**
 **
 * your solution here
 *
 */
function Queue() { //Constructor
  this.dataStore = [] //Inicializa el array
  this.top = 10  //Tamaño de la cola
  this.enqueue = enqueue //Agrega un elemento a la cola
  this.dequeue = dequeue //Elimina un elemento de la cola
  this.front = front //Devuelve el primer elemento de la cola
  this.back = back //Devuelve el ultimo elemento de la cola
  this.length = length //Devuelve la longitud de la cola
  this.size = size //Devuelve el tamaño de la cola
  this.clear = clear //Limpia la cola
  this.sortQueue = sortQueue //Ordena la cola
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

//---------------------------------------------------------------------*

function sortQueue() { //Ordena una cola usando una cola temporal y una pila temporal
  let tempQueue = new Queue() //Cola temporal
  let tempArray = [] //Array temporal
  let step = 0 //Contador de pasos

  //Recorre la cola y agrega los elementos a un array
  while (!this.isEmpty()) {
    tempArray.push(this.dequeue()) //Se agrega el elemento a la cola temporal
    step++
  }

  //Ordena el array
  // tempArray.sort((a, b) => a - b) //Ordena el array de menor a mayor

  //Ordena el array de menor a mayor
  function sortArray(array) {
    let temp = 0
    for (let i = 0; i < array.length; i++) { step++
      for (let j = 0; j < array.length; j++) { step++
        if (array[i] < array[j]) { step++
          temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
      }
    }
    return array
  }
  //----------------------------------------------
  tempArray = sortArray(tempArray)

  //Recorre el array y agrega los elementos a la cola
  while (tempArray.length > 0) {
    tempQueue.enqueue(tempArray.shift()) //Se agrega el elemento a la cola
    step++
  }
  console.log("Steps: " + step)
  return tempQueue
}

//Genera n numeros aleatorios entre 0 y max numeros de elementos
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
//Test

for (let i = 0; i < 5 ; i++) {
  q.genNum(1e3, 1e3)

// console.log("\nPrimera fila de la cola:", q.front());
// console.log("Ultima fila de la cola:", q.back(), '\n');

// console.log('Cola sin Ordenar:',q.dataStore)

  console.log('Corrida #',i+1)
  console.time('sortQueue')
  q = q.sortQueue()
  console.log('The Queue is sorted now')
  console.timeEnd('sortQueue')
  console.log()

  q.clear()
}



console.log(q.dataStore)
