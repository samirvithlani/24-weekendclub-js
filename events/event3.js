// const getData =() =>{

//     const txt = document.getElementById("txt") //<input>
//     console.log(txt.value)
// }

const users =["ram","ramesh","ramila","sumit","sushma","sneha","sumita"]

const searchData =()=>{
    const txt = document.getElementById("txt") //<input>
    console.log(txt.value)

    var filtUser = users.filter((user)=>{
        return user.includes(txt.value)
    })

    console.log(filtUser)

}

// var users = [
//     {
//         id:
//         fname:
//         lname:
//     }
// ]