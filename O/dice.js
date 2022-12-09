let n = 1
let reclama = 2

let caraAbajo = 5/6
let singleOdds = 1/6
console.log('Numero del dado:', n)
let posibles = Math.pow(6, n)
console.log('Posibles salidas:', posibles)
 
for (let i=0; i < n; i++) {
  if (i == 0) continue
  singleOdds = singleOdds * singleOdds
}
console.log(singleOdds * reclama)
 
console.log(singleOdds)