export default
//
// todo
// then as ES6
//
class Matrix {
    constructor(r,c){
	if (typeof(c)==='undefined')
	    c=r//4identity
	
	this._M = new Array(r)
	if (r!=null && c!=null){
	    this.r=r,this.c=c
	    for (let i = 0; i < this.r; i++)
		this._M[i]=new Array(c)
	}
	else throw new Error(`
			@jrgp.matrix 
			matrix undefined
		`)
    }

    fill(r){
	this.ones(r)
    }

    // -> 
    // <-
    // this._M modified
    ones(v=1){
	for (let i = 0; i < this.r; i++) {
	    for (let j = 0; j < this.c; j++) {
		this._M[i][j]=v
	    }
	}
    }

    zeroes(){
	for (let i = 0; i < this.r; i++) {
	    this._M[i]=new Array(this.r).fill(0)
	}
    }

    random(){
	for (let i = 0; i < this.r; i++) {
	    for (let j = 0; j < this.c; j++) {
		this._M[i][j]=Math.random()
	    }
	}
    }

    identity() {
	this.zeroes()
	for (let i = 0; i < this.r; i++) 
	    this._M[i][i]=1
    }

    // -> row, column, value
    // <-
    // this._M modified
    setValue(r,c,v){		
	this._M[r][c]=v
    }

    // -> row, column
    // <- value at (r,c)
    getValue(r,c){		
	return this._M[r][c]
    }

    // -> row
    // <- array at r
    getRow(r) {//validate qm
	return this._M[r]
    }

    // -> columns
    // <- array at c
    getCol(c) {//validate
	let v = new Array()
	for (let j = 0; j < this._M.length; j++) {
            v.push(this._M[j][c])
	}
	return v
    }

    // -> 
    // <- this._M
    getMatrix(){		
	return this._M
    }


    // -> array of arrays
    // <-
    // this._M modified
    setMatrix(m){//validate
	for (let i = 0; i < this.r; i++) {
	    for (let j = 0; j < this.c; j++) {
		this._M[i][j]=m[i][j]
	    }
	}
    }

    // -> m: array of arrays
    // <- a: array of arrays = this._M + m
    sum(m){//validate
	if (this.r=== m.length && this.c ===m[0].length){	  
	    let a = new Array(m.length)	
	    for (let i = 0; i < this.r; i++) {
		a[i]=new Array(m[i].length)
		for (let j = 0; j < this.c; j++) {
		    a[i][j]=this._M[i][j]+m[i][j]
		}
	    }return a
	}
	else throw new Error(`
			jrgp...Matrices
			have different dimensions
		`)
    }

    // -> 
    // <- a new Matrix object
    clone(){
	let c=new Matrix(this.r,this.c)
	c.setMatrix(this._M)
	return c
    }

    // ->
    // <- true if this.M is squared
    // <- false if not
    isSquared(){
    	if (this.r===this.c)
    	    return true
	else
	    return false
    }

    // ->
    // <- true if this.M is symmetric
    // <- false if not
    isSymmetric() {
	if (!this.isSquared())
	    return false
	for (let r = 0; r < this.r; r++)
            for (let c = r; c < this.r; c++)
		if (this._M[r][c] != this._M[c][r])
		    return false
	return true
    }

    isSymmetricAlt(){
	//if (!this.isSquared()){return false}
	for(var j=0;j<this.r;j++){
	    for(var k=0;k<this.c;k++)
		if (this.M[j][k]!=this.M[k][j])
		    return false
	}return true
    }

    // ->
    // <- this._M as astring
    toString(){
	let m=''
	for (let i = 0; i < this.r; i++) {
	    for (let j = 0; j < this.c; j++) {
		if (typeof(this._M[i][j])!=='undefined')
		    m+=this._M[i][j]+'\t'
		else throw new Error(`
			@jrgp.matrix.toString
			matrix not initialized 
			`)		
	    }m+='\n'
	}return m
    }

    print(m='-> nomsg, add title'){
	console.log(m)
	console.log(this.toString())
    }
}
