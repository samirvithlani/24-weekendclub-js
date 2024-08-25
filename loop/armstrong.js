var no = 1634;
var rem =0;
var sum =0

//no of digits..
var noofdigit = 4

while(no>0){

    rem = no % 10 
    sum = sum + rem ** noofdigit
    no = Math.floor(no/10);

}

console.log("sum = ",sum)