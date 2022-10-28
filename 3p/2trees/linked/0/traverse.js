//
// imports
// Tree
//

function traverse(n){//node
   if (n!==null){//else //base case
       console.log(n.d)//traverse, analize, explore, search, TASK (console)

       //recursive calls
       traverse(n.l)
       traverse(n.r)
   }//else
 }



traverse(root)
console.log()
