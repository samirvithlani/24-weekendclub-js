// var user ={
//     id:1,
//     name:"ram",
//     age:23
// }
// console.log(user)

var users = [
    {   
        id:1,
        name:"ram"
    },
    {
        id:2,
        name:"raj"
    },
    {   
        id:3,
        name:"parth"

    }
]
console.log(users)

//console.log(users[0].name)
// for(let i=0;i<users.length;i++){
//     console.log(users[i].name)
// }


users.forEach((user)=>{
    console.log(user.id + " "+user.name)
})


var usersName = users.map((user)=>{
    return user.name
})

// for(let i=0;i<users.length;i++){

//     usersName.push(users[i].name)
// }
// console.log(usersName)

//[{id:101,name:"upperCase"}]

var newUsers = users.map((user)=>{

    return {
        id:user.id+100,
        name:user.name.toUpperCase()
    };
})
console.log(newUsers)