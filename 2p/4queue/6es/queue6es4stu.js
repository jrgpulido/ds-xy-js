//
// todo
//

class Queue {//  constructor(){}//creates queue

    //enqueues the item on the queue
    enqueue(o){}//add, put, insert, enter, append, set: 'o'

    //returns the first item enqueued and removes it from queue
    dequeue(){}//get, delete, remove, leave

    //returns the front item without dequeueing the item
    front(){}//head: <- 'o'

    //returns the rear item without dequeueing the item
    back(){}//rear: <- 'o'

    //returns True if queue has not enqueued items
    isEmpty(){}//<-boolean
    //returns True if queue if full, depending on the DS
    isFull(){}//<-boolean

    search(k){}//looks4 'k',<- 'o'
    size(){}//length, count
    traverse(){}//visit
    
    makeEmpty(){}//clear
    toString(){}//print
}

let q1 = new Queue()
q1.isFull()