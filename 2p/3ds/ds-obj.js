//
// uses three paradigms
// USES obj
// arrow
//

let obj = {}

//es6
const add    = (key, value) => obj[key] = value
const get    = (key)  => obj[key]
const remove = (key)  => delete obj[key]
const clear  = ()  => obj = {}

//first
add(1,'one')
add(2,'two')
obj

//then
remove(1)
obj

get(2)

//finally
clear()
obj
