const traverse=(n)=>{//es6
    let c=n//iterator 
    while(c){//exists
        console.log(c.data)
	c=c.next
    }
}
