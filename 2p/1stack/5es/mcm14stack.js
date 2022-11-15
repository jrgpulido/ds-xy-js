//
// ES5
// from the book mcm14
//

function Stack() {
    this.dataStore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    this.clear = clear
    this.length = length
}

function push(element) {
    this.dataStore[this.top++] = element
}

function peek() {
    return this.dataStore[this.top-1]
}

function pop() {
    return this.dataStore[--this.top]
}

function clear() {
    this.top = 0
}

function length() {
    return this.top
}

let s = new Stack()
s.push("David")//0
s.push("Raymond")//1
s.push("Bryan")//2
console.log("length: " + s.length())
console.log(s.peek())



let popped = s.pop()
console.log("The popped element is: " + popped)
console.log(s.peek())



s.push("Cynthia")
console.log(s.peek())


s.clear()
console.log("length: " + s.length())
console.log(s.peek())
s.push("Clayton")
console.log(s.peek())
