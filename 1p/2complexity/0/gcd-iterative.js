//
// gcd - greatest common divisor
// also known as Euclid's algorithm
//
const gcd=(a, b) => {
    let u = a
    let v = b
    let r = 0
    while (u > 0) {
        if (u < v) {
            r = u
            u = v
            v = r
        }
        u -= v
    }
    console.log('print here how many steps it took')
    return v
}

console.time('it took')
console.log('gcd(1, 1e3) =',gcd(1, 1000000))//1
console.log('print here how much time it took')
console.timeEnd('it took')

//then try
//console.log(gcd(3, 2))
//console.log(gcd(1000000005, 999999999))
//can we do better ? (yes/no)
