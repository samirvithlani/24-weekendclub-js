const root = document.getElementById('root');   //<div>
const h1 = document.createElement("h1") //<h1>
h1.innerHTML = "Hello World";
root.appendChild(h1); //<div><h1>Hello World</h1></div>

var users = ["ram","shyam","mohan","sohan","amit"];

const ul = document.createElement("ul");
for(let i=0;i<users.length;i++){

    const li = document.createElement("li") //<li>
    li.innerHTML = users[i];
    ul.appendChild(li);
}
root.appendChild(ul); //<div><h1>Hello World</h1><ul><li>ram</li><li>shyam</li><li>mohan</li><li>sohan</li></ul></div>
