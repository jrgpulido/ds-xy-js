function Queue() {
    this.dataStore=[]
    this.enqueue=function(element) {
	this.dataStore.push(element)
    }

  
    this.dequeue=function() {
	return this.dataStore.shift()
    }

  
    this.front=function() {
	return this.dataStore[0]
    }

  
    this.back=function() {
	return this.dataStore[this.dataStore.length-1]
    }

  
    this.toString=function() {
	let retStr = ""
	for (let i=0; i < this.dataStore.length; ++i) {
	    retStr += this.dataStore[i] + "\n"
	}

      
	return retStr
    }
    this.empty=function() {
	if (this.dataStore.length == 0)
	    return true	
	else 
	    return false
    }
    this.clear=function(){
        this.dataStore=[]
    }
    this.full=function() {}
}


function getRandomIntInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1) + min)
  }


function RandomQueue(siz,queue){
    let arr=[];
    for(let i=0; i<siz; i++){
        arr.push(i);
    }
    let a=0
    for(let i = arr.length; i>0; i--){
        a = getRandomIntInclusive(0,arr.length - 2)
        queue.enqueue(arr[a]);
        arr.splice(a,1);
    }  
}


function sort(queue){
    let temp1 = new Queue();
    let temp2 = new Queue();
    let step = 0;
    for(let i=0; i<queue.dataStore.length; i=0){
        step++
        let temp=queue.dequeue();
        step++
        if(temp < temp1.back()){
            for(let h=temp1.dataStore.length ; h > 0; h--){
            step++
            temp2.enqueue(temp1.dequeue())}
        }
        for(let j=temp2.dataStore.length; j>0 ; j = temp2.dataStore.length){
            step++
            if(temp!=null && temp2.front() >= temp){
                step++
                temp1.enqueue(temp)
                temp = null;
            }
            step++
            temp1.enqueue(temp2.dequeue());
        }
        step++
        if(temp!=null){
            step++
            temp1.enqueue(temp)
        }
    }
    queue.dataStore=temp1.dataStore;
    console.log("Tomó "+step+" pasos para completarse")
}


let Myqueue=new Queue()
for(var i=0; i<5; i++){
    Myqueue.clear()
    RandomQueue(10,Myqueue)
    console.time('Tiempo de ejecución')
    sort(Myqueue)
    console.timeEnd('Tiempo de ejecución')
    console.log(Myqueue.dataStore)
}


for(var i=0; i<5; i++){
    Myqueue.clear()
    RandomQueue(100,Myqueue)
    console.time('Tiempo de ejecución')
    sort(Myqueue)
    console.timeEnd('Tiempo de ejecución')
    console.log(Myqueue.dataStore)
}


for(var i=0; i<5; i++){
    Myqueue.clear()
    RandomQueue(1000,Myqueue)
    console.time('Tiempo de ejecución')
    sort(Myqueue)
    console.timeEnd('Tiempo de ejecución')
    console.log(Myqueue.dataStore)
}