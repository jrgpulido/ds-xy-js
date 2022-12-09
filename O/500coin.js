function coin() {
  n = Math.random()
  if (n < 0.5)
    return 'cara'//cara = 1
  else
    return 'sol'//sol = 0
}

console.log(coin())
console.log(coin())
console.log(coin())
console.log(coin())
console.log(coin())

  for (let i = 0; i < 500; i++) {
  const num = Math.floor(Math.random() < 0.5);
  console.log(num);
}