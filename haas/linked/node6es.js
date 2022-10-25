  //
  // ES6
  //
class Node {
    constructor(d, n = null) {
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

    toString() {
        return this._data
    }

    // exercises
    // 1. implement contains
    contains(n) {
        let c = this.head
        while (c) {
            if (c.key === n.key) return true
            c = c.next
        }
        return false
    }

    // 2. implement insertAfter
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

    // 3. implement insertBefore
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

    // 10. implement sort
    n;
    sort() {
        let c = this.head
        while (c) {
            if (c.key === this.n.key) return true
            c = c.next
        }
        return false
    }

    // 35. implement getTail
    // 36. implement getHead
    // 37. implement traverse
    // 38. implement append
    // 39. implement prepend
    // 40. implement getTail
}