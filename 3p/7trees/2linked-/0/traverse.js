//
// imports
// Tree
//

 function preorder(n){
   if (n!==null){//else //base case
       console.log(n.d)//traverse, analize, explore, TASK (console)
       preorder(n.l)
       preorder(n.r)
   }//else
 }



preorder(root)
console.log()
