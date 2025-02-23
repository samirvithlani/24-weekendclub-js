const submitHandler = (event)=>{
    event.preventDefault() //action -stop...

    const nameOutput = document.getElementById("nameOutput")//<h1>
    const ageOutput = document.getElementById("ageOutput")//
    //console.log("form subbmited...")
    const name = document.getElementById("name") //<input/>
    console.log(name.value)
    nameOutput.innerHTML = "Name = "+name.value

    const age = document.getElementById("age")
    console.log(age.value)
    ageOutput.innerHTML = "Age = "+age.value

}