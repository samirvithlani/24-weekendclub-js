const rollDice =() =>{


    const randomindex = Math.floor(Math.random()*6)
    const dice = document.getElementById("dice")

    console.log(randomindex)
    if(randomindex == 0){
        dice.innerHTML = "*"
    }
    if(randomindex == 0){
        dice.innerHTML = `<pre>  * * </pre>`
    }
    



}