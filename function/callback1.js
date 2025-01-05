
function toBeCalled(){
    console.log("tobe called....")
}

function test(a){
    console.log("a",a)
    a()
}


// test(100)
// test("ok")
// test(true)
// test({name:"ram"})
// test([100,20])
// test()
test(toBeCalled)



const imageViewer =()=>{
    console.log("image viewer...")
}
const pdfViewer =()=>{
    console.log("pdf viewer...")
}

const videoPlayer = ()=>{
    console.log("video player....")
}

const fileViewer = (cb)=>{

    //cb -->callback
    console.log("filevievier....")
    cb()

}


var fileName = "abc.pdf"

if(fileName.endsWith(".pdf")){
    fileViewer(pdfViewer)
}
else if(fileName.endsWith(".jpg")){
    fileViewer(imageViewer)
}
else if(fileName.endsWith(".mp4")){
    fileViewer(videoPlayer)
}

