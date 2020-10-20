//
//factorial : declarative : iterative
//
let f = function (n) {
    for (let i = 1, m = 1; i < n + 1; i += 1) {
        m *= i;//m=m*i
    }
    return m;
};


//readOnly zeeALso factorial.js
// f(0) = 1
// f(1) = 1
