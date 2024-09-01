// var x = "amit"
// console.log(x)
// //no of char...
// console.log(x.length)
// // console.log(x[0])
// // console.log(x[1])
// // console.log(x[2])
// // console.log(x[3])
// // console.log(x[4])

// for(let i=0;i<4;i++){
//     console.log(x[i])
// }

// var x = "royal"
// //...concatenation
// x = x + " enfield"
// console.log(x)

var str1 = "India"
var copystr= ""
for(let i=0;i<str1.length;i++){
    //"" =    "" + "I" = "I"
    //I = I + n = In
    //In = In + d = Ind
    //Ind = Ind + i = Indi
    //Indi = Indi + a = India
    copystr = copystr + str1[i]

}
console.log(copystr)

var revstr = "";
console.log(str1.length)
console.log(str1[5])
for(let i= str1.length-1;i>=0;i--){
    //console.log(str1[i])
    revstr = revstr + str1[i]//a ai  //aid // aidn // aidnI
}
console.log("reverse...",revstr)