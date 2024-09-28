var lang = ["Gujarati","Hindi","English","Marathi"];

// lang[lang.length] = "Punjabi";
// console.log(lang);

// lang.length-=1;
console.log(lang);
//1st param index... 2nd param will be delete count...
//lang.splice(1,1) //1st index and remove 1 element
//lang.splice(0,3)
//lang.splice(2,0)//2nd index and remove 0 element
//lang.splice(2,1,"Telugu","Tamil");
//lang.splice(1,0,"Sanskrit");
var removedElms = lang.splice(1,3);
console.log("removing...",removedElms);
console.log(lang);


