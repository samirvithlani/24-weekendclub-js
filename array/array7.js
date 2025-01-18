var data = ["raj","shyam","parth","amit","kunal","ajay"]
var upperData =[]

// data.forEach(function(d){

//     console.log(d)
// })


// data.forEach((d)=>{
//     console.log(d)
// })

// for(let i=0;i<data.length;i++){
//     console.log(data[i])
// }
// for(let i=0;i<data.length;i++){
    
//     upperData.push(data[i].toUpperCase())

// }
// console.log(upperData)


//MAP

upperData = data.map((d)=>{
    return d.toUpperCase()
})
console.log(upperData)