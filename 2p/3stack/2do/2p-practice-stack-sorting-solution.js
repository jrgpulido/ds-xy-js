function getRandomIntInclusive(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function RandomStacks(siz,stack){
    let arr=[];
    for(let i=0; i<siz; i++){
        arr.push(i);
    }
    let a=0
    for(let i=arr.length; i>0; i--){
        a=getRandomIntInclusive(0,arr.length - 2)
        stack.push(arr[a]);
        arr.splice(a,1);
    }  
}

function Stack() {
    this.dataStore = []
    this.top=0
    this.push=push
    this.pop=pop
    this.peek=peek
    this.clear=clear
    this.length=length
}

function push(element) {
    this.dataStore[this.top++]=element
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

function sort(stack){
    let tempStack= new Stack();
    let step=0;
    while (stack.length() > 0){
        let tmp=stack.pop();
        step++;
        while (tempStack.length() > 0 && tempStack.peek() > tmp){
            stack.push(tempStack.peek());
            tempStack.pop();
            step++
        }
        tempStack.push(tmp)
    }
    step++;
    stack.dataStore = tempStack.dataStore;
    console.log("Tomó "+step+" pasos para completarse")
}

let Mystack=new Stack()

for(var i=0; i<5; i++){
    Mystack.clear();
    RandomStacks(10, Mystack)
    console.time('Tiempo de ejecución')
    sort(Mystack)
    console.timeEnd('Tiempo de ejecución')
    console.log(Mystack.dataStore)
}

for(var i=0; i<5; i++){
    Mystack.clear();
    RandomStacks(100, Mystack)
    console.time('Tiempo de ejecución')
    sort(Mystack)
    console.timeEnd('Tiempo de ejecución')
    console.log(Mystack.dataStore)
}

for(var i=0; i<5; i++){
    Mystack.clear();
    RandomStacks(1000, Mystack)
    console.time('Tiempo de ejecución')
    sort(Mystack)
    console.timeEnd('Tiempo de ejecución')
    console.log(Mystack.dataStore)
}