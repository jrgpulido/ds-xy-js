//
// gcd - greatest common divisor
// also known as Euclid's algorithm
// https://ideone.com/00FoC9
//

function gcd(a, b) {
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

//verify output is correct
console.log('gcd:',gcd(22, 32))
console.log('print here how much time it took')

//then try
//console.log(gcd(3, 2))
//console.log(gcd(1000000005, 999999999))
//can we do better ? (yes/no)
