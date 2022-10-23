/** 
 *
 * your solution here
 *
 */
function Stack() {
  this.dataStore = []
  this.top = 0
  this.push = push
  this.pop = pop
  this.peek = peek
  this.length = length
  this.isEmpty = isEmpty
  this.isFull = isFull
  this.sortStack = sortStack
  this.size = size
  this.clear = clear
  this.traverse = traverse
  this.toString = toString
  this.search = search
}
//////////////////////////////////////////////////////////
//Agrega un elemento a la pila
function push(element) {
  this.dataStore[this.top++] = element
}


function pop() {
  return this.dataStore[--this.top]
}


function peek() {
  return this.dataStore[this.top - 1]
}


function length() {
  return this.top
}

//Devuelve true si la pila esta vacia
function isEmpty() {
  return this.top === 0
}

function isFull() {
  return this.top === this.dataStore.length
}

//Ordena una pila usando una pila temporal
function sortStack(stack) {
  let tempStack = new Stack()
  let steps = 0 //contador de pasos
  while (!stack.isEmpty()) {
    let tmp = stack.pop()

    //mientras que la pila temporal no este vacia y el elemento en el tope de
    // la pila temporal sea mayor que el elemento temporal
    while (!tempStack.isEmpty() && tempStack.peek() > tmp) {
      stack.push(tempStack.pop())
      steps++
    }

    // Empuja temp en la pila temporal
    tempStack.push(tmp)
    steps++
  }

  console.log('Steps: ', steps)
  return tempStack
}

//funcion traverse para recorrer la pila
function traverse(stack) {
  let top = stack.top - 1
  while (top > -1) {
    console.log(stack.dataStore[top])
    top--
  }
}

function toString(stack) {
  let top = stack.top - 1
  let str = ''
  while (top > -1) {
    str += stack.dataStore[top] + ' '
    top--
  }
  return str
} //funcion toString para imprimir la pila

function size() {
  return this.dataStore.length
}

function clear() {
  this.top = 0
}

let stack;

//funcion search burcar (n)
function search(n) {
  for (let i = 0; i < (stack.size()); i++) {
    if ((this.dataStore) === n) {
      console.log('El Numero', n, 'Esta en el: stack[' + i + ']')
      return true
    }
  }
  console.log('El Numero', n, '[No Encontrado]')
  return false
}

//-----------------------------------------------------------------
//funcion para generar una pila con n numeros aleatorios entre 0 y max numeros de elementos
function genStack(n, max) {
    let stack = new Stack()
    for (let i = 0; i < n; i++) {
        stack.push(Math.floor(Math.random() * max))
    }
    return stack
}
//////////////////////////////////////////////////////////

// // crear una pila \\ \\
stack = genStack(10, 100);

//imprimir la pila
// console.log('Pila Principal:')
// console.log(stack.dataStore)

//ordenando la pila
stack = stack.sortStack(stack)

console.time('sortStack')
//imprimir la pila ordenada
console.log('The Stack is sorted:')
console.timeEnd('sortStack')

console.log('\n',stack.dataStore)

//Search: Buscar el valor (n)
// console.log(stack.search(21))
// console.log('Size: ', stack.size())