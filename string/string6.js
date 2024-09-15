var data = "ramayana"
//var abc = data.startsWith("r") // true
var abc = data.startsWith("ma",2) // false
console.log(abc)

//var xyz = data.endsWith("a") // true
var xyz = data.endsWith("ma",4) // true
console.log(xyz)



var isExist = data.includes("n")
console.log("isExist...",isExist) // true

var isExist = data.includes("n",7)
console.log("isExist...",isExist) // false



//var x = data.slice(2,3) //0 1 2 
//var x = data.slice(2) //0 1 2 
//var x = data.substring(2,3) //0 1 2
var x = data.substring(2) //0 1 2
console.log(x)


data = data.replace("a","A")

console.log(data)












