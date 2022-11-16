export default
//
// ok
//
class Graph {

    constructor(o){//verify it is a matrix
	if ((o instanceof Array) && (o[0] instanceof Array))
	    this.m=o
	else
	    throw new Error(`
@jrgp.Graph() 
graph not initialized
got: ${typeof(o)}
must be: an array of arrays
`)
    }

    addVertex(v){
	this.m[v]=0
    }

    addEdge(e,f){//console.log('::'+typeof(this.m[e]))
	if (typeof(this.m[e])==='number'){
	    this.m[e]=[]
	}this.m[e][f]=1
    }

    //
    // compulsory
    //
    fill(){
    	for (let i = 0; i < this.m.length; i++) {
	    for (let j = 0; j < this.m.length; j++) {
		if (this.m[i][j]===undefined)
		    this.m[i][j]=0
	    }
	}
    }

    toString(){
	let s=''
	if (this.m.length>1 && this.m[0].length>0){	    
	    for (let i = 0; i < this.m.length; i++) {
		for (let j = 0; j < this.m[i].length; j++) {
		    s+=this.m[i][j]+' '
		}s+='\n'
	    }return s
	}
	else
	    throw new Error(`
@jrgp.Graph.toString() 
cannot print
not a graph  
`)
    }

    print(u='undescribed graph...'){
	console.log(u)
	console.log(this.toString())
    }
}
