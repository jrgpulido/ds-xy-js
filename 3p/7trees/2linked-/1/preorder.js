//
// 
//

function preorder(n){
  if (n!==null){
    console.log(n.d)
    traverse(n.l)
    traverse(n.r)
  }
}
