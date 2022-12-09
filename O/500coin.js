function coin() {
  n = Math.random()
  if (n < 0.5)
    return 'cara'
  else
    return 'sol'
}

console.log(coin())
console.log(coin())
console.log(coin())
console.log(coin())
console.log(coin())

  for (let i = 0; i < 500; i++) {
  const num = Math.floor(Math.random() * 0.5);
  console.log(num);
}
