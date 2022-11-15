//
// 
//

function preorder(n){
  if (n){//exists
    console.log(n.d)

    preorder(n.r)
    preorder(n.l)
  }
}
