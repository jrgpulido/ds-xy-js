//
// ok
//

function DirectedGraph() {
    this.edges = {}

    this.addVertex = addVertex
    this.addEdge = addEdge
    this.print = print
    this.printEdges = printEdges
}

addVertex = function(vertex) {
    this.edges[vertex] = {}
}

addEdge = function(origVertex, destVertex, weight){
    if (weight == undefined){
	weight = 0
    }
    this.edges[origVertex][destVertex] = weight
    //add here
    //4undirected graphs
}

print = function(){
    let o = Object.keys(this.edges)
    for(let v of o)
	console.log(v,this.edges[v])
}

printEdges = function(){
    let o = Object.keys(this.edges)
    for(let v of o)
	for (let e of o)
	    if (this.edges[v][e])
		console.log(v,e,this.edges[v][e])
}


///////////// ok



let digraph1 = new DirectedGraph()
digraph1.addVertex("A")
digraph1.addVertex("B")
digraph1.addVertex("C")
digraph1.addEdge("A", "B", 1)
digraph1.addEdge("B", "C", 2)
digraph1.addEdge("C", "A", 3)
//console.log(digraph1.edges)

digraph1.addEdge("A", "C", 4)//jrgp
//console.log(digraph1.edges)

digraph1.print()
digraph1.printEdges()
