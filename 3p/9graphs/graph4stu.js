//
// aGraph
// pp172 A Common-Sense Guide to DS usesJS etAl (book)
//

//ds
let f={}

//nodes
let alice={la:{}}
let cinthia={lc:{}}
let bob={lb:{}}

//in2ds
f.alice=alice
f.cinthia=cinthia
f.bob=bob

//links
let la={cinthia,bob}
let lc={bob}
let lb={cinthia}

//in2ds
f.alice.la=la
f.cinthia.lc=lc
f.bob.lb=lb
