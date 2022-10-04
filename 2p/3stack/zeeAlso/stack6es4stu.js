//
// ES6
// to complete
//

class Stack {
    constructor(){
        this.data = []
        this.top = 5//stack size
    }

    push(o){//validate stack not full
        if (this.isFull())
            console.log('full stack')
        else{
            this.data.push(o)
            console.log(o,'added')
        }
    }

    peek(){
        return this.data[this.data.length-1]
    }

    pop(){//validate stack not empty
        if (this.isEmpty())
            console.log('empty stack')
        else
            console.log(this.data.pop(),'popped')
    }

    isEmpty(){
        if (this.data.length === 0)//this.size()
            return true
        else
            return false
    }

    isFull(){
        if (this.data.length === this.top)
            return true
        else
            return false
    }

    size(){
     return this.data.length
    }

    search(k){}
    traverse(){}

    toString(){}
    makeEmpty(){
        this.data = []
    }
}

let s = new Stack()
s.push(4)
s.push(0)
s.push(3)
s.push(2)
s.push(1)
s.push(5)
//s.search(5)
console.log('size',s.size())

console.log(s.peek())
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()
console.log('size',s.size())
s.pop()
