function add(a,b){

    return a + b;
}

var ans = add(100,20)
console.log("ans = ",ans)


function getFullName(fname,lname){

    return fname + " "+ lname
}

var fullName = getFullName("ram","sharma")
console.log(fullName)

function isValid(age){


    if(age>=18){
        return true
    }
    else{
        return false
    }

}

var flag = isValid(18)
console.log(flag)

if(isValid(18)){
    console.log("valid...")
}
else{
    console.log("not valid..")
}


function findDigits(no){

            var count =0;

        while(no>0){
            
            no = Math.floor(no/10)
            count++

        }
        return count;

}

var digits = findDigits(1234)
console.log(digits)