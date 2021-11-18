//
// imports
// Tree
//

 function traverse(n){
   if (n!==null){//else //base case
       console.log(n.d)//traverse, analize, explore, TASK (console)
       traverse(n.l)
       traverse(n.r)
   }//else
 }



traverse(root)
console.log()
