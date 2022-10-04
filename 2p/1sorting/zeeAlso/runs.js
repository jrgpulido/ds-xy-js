// create random numbers
// sort them 'n take steps 'n time it took
// run 10 times

let createNumbers=(n)=>{
    let nums=[]
        for(let i=0; i<n; i++)
            nums.push(Math.floor(Math.random()*n))
    return nums 
}

let run=(n)=>{        
    console.time('run')
    n.sort()
    console.timeEnd('run')
}


run(createNumbers(1000000))
