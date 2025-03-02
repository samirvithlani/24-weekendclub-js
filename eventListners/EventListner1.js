const myButton  = document.getElementById('myButton');
myButton.addEventListener("click",()=>{
    console.log("Button Clicked");
})
myButton.addEventListener("mouseover",()=>{
    myButton.style.backgroundColor ="green"
})
myButton.addEventListener("mouseout",()=>{
    myButton.style.backgroundColor ="red"
})


const height = document.getElementById('height');
const width = document.getElementById('width');
const box = document.getElementById('box');
box.style.backgroundColor = "blue";

height.addEventListener("input",()=>{
    //console.log("Height: ",height.value);
    box.style.height = height.value + "px";
})
width.addEventListener("input",()=>{
    //console.log("Width: ",width.value);
    box.style.width = width.value + "px";
})
