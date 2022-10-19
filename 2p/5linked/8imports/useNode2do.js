// 1 insertAfter
//
// -> c char
// -> newNode Node
// <- True if inserted
// <- False if not found
//
// insertAfter(newNode,'b')
//

// 2 insertBefore
//
// -> c char
// -> newNode Node
// <- True if inserted
// <- False if not found
//
// insertBefore(newNode,'b')
//

class Node {
  
  constructor(d, n=null) {
    this._data = d;
    this._next = n;

    
  }
  // Getter
  get data() {
    return this.data;
  }}
var a="as"
let l = new Node
(a).insertBefore(l)

console.log(l.d)


