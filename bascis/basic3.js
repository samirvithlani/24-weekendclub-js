let x = 100
console.log("c outside of block.",x)

{
    console.log("Inside of block",x)
    let y = 200
    console.log("Inside of block",y)
}

//console.log("c outside of block.",y)

let p =200
p = 300 //reassign
console.log("p outside of block.",p)

let q = 100
//let q = 200
//let redeclaration is not possible in js
//console.log("q outside of block.",q)


var x1 =100
let x1 =200
