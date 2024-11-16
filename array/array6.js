var data = ["naman","sanjay","arjun","a"]
var palindromes = []

for(let i=0;i<data.length;i++){

    //naman
    
    for(let j=0;j<data[i].length;j++){
        //data[0][0] != data[0][5-1-0]
        //data[0][1] != data[0][5-1-1]
        //n != n
        //a != a
        //m != m
        if(data[i][j] != data[i][data[i].length-1-j]){
            break;
        }
        //j=4
        //j=3
        //j=2
        if(j == data[i].length-1){
            palindromes.push(data[i])
        }
    }

}
console.log(palindromes)




var users = ["naman","sanjay","arjun","a"]
var palindromes = []

for(let i=0;i<users.length;i++){

    console.log(users[i].split("").reverse().join(""))
    //['n',a,m,a,n]
    //[n,a,m,a,n]

    if(users[i].split("").reverse().join("") == users[i]){
        palindromes.push(users[i])
    }



}
console.log(palindromes)





var marks =[21,22,23,22,24]
//















