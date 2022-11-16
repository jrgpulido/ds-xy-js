//
// simplest graph qm
//

friends = {
    "Alice" : ["Bob", "Diana", "Fred"],
    "Bob" : ["Alice", "Cynthia", "Diana"],
    "Cynthia" : ["Bob"],
    "Diana" : ["Alice", "Bob", "Fred"],
    "Elise" : ["Fred"],
    "Fred" : ["Alice", "Diana", "Elise"]
}

friends['Fred']
