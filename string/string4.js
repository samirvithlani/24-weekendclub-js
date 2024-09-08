//assci value of string
//A - 65
//a - 97
var data = "AMIT"

var x = data.charCodeAt(0)
console.log(x)

var x1 = String.fromCharCode(65) //A
console.log(x1)


var x2 = String.fromCharCode(x)
console.log(x2)

var x3 = String.fromCharCode(data.charCodeAt(0)+32)
console.log(x3)

//upper case to lower case

var userName = "rajveer"

userName = userName.toUpperCase()
console.log(userName)
userName = userName.toLowerCase()
console.log(userName)
