//
// 
//

function preorder(n){
  if (n!==null){
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}
