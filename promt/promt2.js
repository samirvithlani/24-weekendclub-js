var chances = 3;

while(chances>0){
    var amount = parseInt(prompt("enter amount you have remaining chances "+chances))
    console.log("amount",amount)
    if(amount == NaN){
        //alert("please try again with number")
        console.log("please try again with number")
        chances =0;
        //break;
    }
    //900
   else if(amount<10000){
        //--chances; //2 //1 //0
        chances = chances-1;
    }
    else if(amount>10000){
        console.log("you have entered amount greater than 10000")
        break;
    }
}

console.log("chance",chances)
if(chances==0){
    alert("you have exceeded the limit")
}
