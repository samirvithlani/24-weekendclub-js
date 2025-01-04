function test(){

    console.log("wo woar")
}

const test1 = ()=>{
    console.log("test1 called...")
}

test1()


// function sum(a,b){
//     return a +b;
// }

// const sum = (a,b)=>{
//     return a + b;
// }

const sum = (a,b)=>a+b
var ans = sum(100,20)
console.log("ans = ",ans)
console.log("ans1 = ",sum(100,20))




const findMax =(no1,no2)=>no1>no2?no1:no2

console.log(findMax(100,200))



