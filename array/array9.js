var data =[["sachin","kohli"],["Dhoni","MS"],["Rohit","Hardik"]]


// var filterData = data.map((d)=>{
//     return d.filter((d1)=>{
//         return d1.length==6
//     });
// })

var filterData = data.flatMap((d)=>{
    return d.filter((x)=>{
        return x.length==6;
    })
})
console.log(filterData)

var data1 =[[[10,20],[100,200]],[[120,222],[90,80]],[[100,200],[98,88]]]

var flatData = data1.flatMap((d)=>{
    return d.flatMap((x)=>{
        return x;
    })
})
console.log(flatData)