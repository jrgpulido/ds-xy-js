//
// Tree
//

/*
binary tree
*/

let root={
  d:'+',
  l:null,
  r:null
 }

 let n1={
  d:1,
  l:null,
  r:null
 }

 let n2={
  d:2,
  l:null,
  r:null
 }


 root.l=n1
 root.r=n2

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
