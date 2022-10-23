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

//Eliminar un elemento de la pila
function pop() {
  return this.dataStore[--this.top]
}

//Devuelve el elemento superior de la pila
function peek() {
  return this.dataStore[this.top - 1]
}

//Devuelve el numero de elementos en la pila
function length() {
  return this.top
}

//Devuelve true si la pila esta vacia
function isEmpty() {
  return this.top === 0
}

//Ordena una pila usando una pila temporal
function sortStack(stack) {
  let tempStack = new Stack()
  while (!stack.isEmpty()) {

    // Saca el primer elemento
    let tmp = stack.pop()

    // Mientras la pila temporal no esté vacía &&
    // la parte superior de la pila es mayor que temp
    while (!tempStack.isEmpty() && tempStack.peek() > tmp) {

      // Saca de la pila temporal y
      // lo empuja a la pila principal
      stack.push(tempStack.pop())
    }

    // Empuja temp en la pila temporal
    tempStack.push(tmp)
  }
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

//funcion tostring para imprimir la pila
function toString(stack) {
  let top = stack.top - 1
  let str = ''
  while (top > -1) {
    str += stack.dataStore[top] + ' '
    top--
  }
  return str
}

//Devuelve el tamaño de la pila
function size() {
  return this.dataStore.length
}

//Limpia la pila
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
//funcion para generar una pila con numeros aleatorios entre 0 y n
function genStack(n) {
  let stack = new Stack()
  for (let i = 0; i < n; i++) {
    stack.push(Math.floor(Math.random() * n))
  }
  return stack;
}
//////////////////////////////////////////////////////////

// // crear una pila \\ \\
var stack = genStack(10);

//imprimir la pila
console.log('Pila Principal:')
console.log(stack.dataStore)

//ordenando la pila
stack = stack.sortStack(stack)

//imprimir la pila ordenada
console.log('Pila Ordenada')
console.log(stack.dataStore)

//Search: Buscar el valor (n)
console.log(stack.search(21))
console.log('Size: ', stack.size())