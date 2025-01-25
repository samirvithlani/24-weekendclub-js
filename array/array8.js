var data = [100,121,222,345,678,900,111,776]

var evendata= data.filter((d)=>{
    return d%2==0;//true
})

// for(let i=0;i<data.length;i++){

//     if(data[i]%2==0){
//         evendata.push(data[i])
//     }
// }

console.log(evendata)


var users = ["sam","seeta","hari","sumit","geeta","ajay"]

var startsS = users.filter((user)=>{
    return user.startsWith("s")
})
console.log(startsS)

var lenValid = users.filter((user)=>{
    return user.length>=5;
})
console.log(lenValid)