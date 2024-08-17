var x =100
console.log("c outside of block.",x)

{
    console.log("Inside of block",x)
    var y =200
    console.log("Inside of block",y)
}

console.log("c outside of block.",y)

var p =200
p = 300 //reassign
console.log("p outside of block.",p)


var q = 100
var q = 200
console.log("q outside of block.",q)
//var redeclaration is possible in js