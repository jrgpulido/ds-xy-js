//
// aTree as object
//

//root node
let root={
  d:0,
  l:null,
  r:null
 }

//left node
 let n1={
  d:1,
  l:null,
  r:null
 }

//right node
 let n2={
  d:2,
  l:null,
  r:null
 }

//links
 root.l=n1
 root.r=n2

//traversal
 function traverse(n){
   if (n!==null){
    traverse(n.l)
    traverse(n.r)
    console.log(n.d)
   }
 }

traverse(root)

/*
  r      //1st
/  \
n1  n2   //2nd
/ \ /\
 null    //3rd
*/
