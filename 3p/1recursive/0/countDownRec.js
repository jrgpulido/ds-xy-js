//
// 5,..,1
// vs
// countDownIter.js
//

function countDownToZero(n) {
    if (n < 1) {//base case
        return
    } else {
        console.log(n)
        countDownToZero(n - 1)//recursive call
    }
}

countDownToZero(5)