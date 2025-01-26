var users = ["ram","amit","shyam","zyan","jay"]

//users = users.sort() //alph...
users = users.sort((a,b)=>a.length-b.length)
console.log(users)

var salary = [1200,2340,900,120,700,800,2345]

//salary = salary.sort()
salary = salary.sort((a,b)=>a-b)
console.log(salary)



//find

var x = users.find((u)=>{
    return u =="amit"
})
console.log(x)

//reduce

//var total = salary.reduce((acc,sal)=>{return acc+sal},0)
var total = salary.reduce((acc,sal)=>acc+sal,0)
console.log(total)
// for(let i=0;i<salary.length;i++){

//     total = total + salary[i]
// }
// console.log(total)

//map : return same length of an array:
//filter: return same or less len of an array
//forEach:vod
//reduce: return only single value..


