export default
//
// 
//
class Node {
    constructor(d, n = null){
	this._data=d
	this._next=n
    }
  
    get data(){
	return this._data
    }

}