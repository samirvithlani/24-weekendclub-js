var data = [100,23,45,600,78,90,101]
//100 [0]
//23 [1]
//45 [2]

console.log(data)
// console.log(data[0])
// console.log(data[1])
// console.log(data[2])

var max = data[0]; //100


for(let i=0;i<data.length;i++){

    //data[0] = 100 > 100 false --> 100
    //data[1] = 23 > 100 false --> 100
    //data[2] = 45 > 100 false --> 100
    //data[3] = 600 > 100 true --> 600
    //data[4] = 78 > 600 false --> 600
    //data[5] = 90 > 600 false --> 600
    //data[6] = 101 > 600 false --> 600
    if(data[i]>max){
        //600
        max = data[i]
    }


}

console.log("max = ",max)
// var sum=0;

// for(let i=0; i<data.length; i++){
//  //   console.log(data[i])
//     sum = sum + data[i]
// }
// console.log(sum)