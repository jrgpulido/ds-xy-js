/** 
 *
 * your solution here
 *
 */
function Stack() {
  this.dataStore = [] //inicializa un array para almacenar la pila
  this.top = 0 //inicializa el tope de la pila
  this.push = push //agrega un elemento a la pila
  this.pop = pop //elimina un elemento de la pila
  this.peek = peek //lee el elemento en el tope de la pila
  this.length = length //devuelve la longitud de la pila
  this.isEmpty = isEmpty //devuelve true si la pila esta vacia
  this.isFull = isFull //devuelve true si la pila esta llena
  this.sortStack = sortStack //ordena una pila usando una pila temporal
  this.size = size //devuelve el tamaño de la pila
  this.clear = clear //limpia la pila
  this.traverse = traverse //recorre la pila
  this.toString = toString //imprime la pila
  this.search = search //busca un elemento en la pila
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

let stack = new Stack()

for (let i = 0; i < 5; i++) {
  // // crear una pila \\ \\
  console.log('Corrienda#',i+1)
  stack = genStack(10, 1e3);

//imprimir la pila
// console.log('Pila Principal:')
// console.log(stack.dataStore)

//ordenando la pila
  stack = stack.sortStack(stack)

  console.time('sortStack')
//imprimir la pila ordenada
  console.log('The Stack is sorted:')
  console.timeEnd('sortStack')

  console.log()

//Search: Buscar el valor (n)
// console.log(stack.search(21))
// console.log('Size: ', stack.size())
}

console.log('\n',stack.dataStore)