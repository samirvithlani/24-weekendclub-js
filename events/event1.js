const changeText =()=>{
    //alert("function called...")
    const txt = document.getElementById("txt") //<h1></h1>
    //console.log(txt.innerHTML)
    txt.innerHTML = "HI"
    txt.style.color="red"

}

const changeLink = ()=>{

    const google = document.getElementById("google")//<a>
    google.href = "https://www.hotstar.com"
    google.innerHTML ="hotstar"
}

var count = 0
const changeShape =()=>{

    count++
    if(count==1){
        const mydiv = document.getElementById("mydiv") //<div>
        mydiv.style.borderRadius = "50%"
        mydiv.style.backgroundColor="blue"
    }
    else if(count==2){
        
        const mydiv = document.getElementById("mydiv") //<div>
        mydiv.style.borderRadius = "0%"
        mydiv.style.height="200px"
        mydiv.style.width="200px"
        
        //mydiv.style.borderRadius = "50%"
        //mydiv.style.backgroundColor="blue"
    }

}