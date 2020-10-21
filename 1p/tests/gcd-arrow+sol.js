// arrow
// mod
//
let k=0

gcd=(a, b) =>{
    k++
    if (a%b === 0){
        console.log(k,'steps')
        return b
    }
    else
        return gcd(b,a%b)
}

console.time('time complexity')
console.log(gcd(1, 1000))//1
console.timeEnd('time complexity')
