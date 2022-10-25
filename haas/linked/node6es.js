export default
// Exporta la clase node
// ES6
//

class Node {
      constructor(d, n = null) {
          this.size = 1
          this._data = d
          this._next = n
      }

      get data() {
          return this._data
      }

      get next() {
          return this._next
      }

      set next(n) {
          this._next = n
      }

      append(n) {
          n.next = null
          this.tail.next = n
          this.tail = n
          this.size++
      }

      prepend(n) {
          n.next = this.head
          this.head = n
          this.size++
      }

      toString() {
          return this._data
      }

      contains(n) {
          let c = this.head
          while (c) {
              if (c.key === n.key) return true
              c = c.next
          }
          return false
      }

      insertAfter(n, d) {
          let c = this.head
          while (c) {
              if (c.data === d) {
                  n.next = c.next
                  c.next = n
                  return true
              }
              c = c.next
          }
          return false
      }

      insertBefore(n, d) {
          let c = this.head
          while (c) {
              if (c.data === d) {
                  n.next = c
                  this.head = n
                  return true
              }
              c = c.next
          }
          return false
      }

      getTail() {
          return this.tail
      }

      getHead() {
          return this.head
      }

      traverse() {
          let c = this.head
          while (c) {
              console.log(c.data)
              c = c.next
          }
          console.log('\n')
      }
  }