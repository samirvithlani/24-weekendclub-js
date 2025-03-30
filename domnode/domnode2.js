const root = document.getElementById("root");

const getInput = () => {
  root.innerHTML = "";
  const input = document.getElementById("input");
  const value = input.value;
  console.log(value);

  const randomNo = Math.floor(Math.random() * value + 1);
  console.log(randomNo);

  for (let i = 1; i <= value; i++) {
    const box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.backgroundColor = "red";
    box.style.margin = "10px";
    box.style.display = "inline-block";
    box.style.textAlign = "center";
    //box.innerHTML = i;
    box.innerHTML = `<h4>${i}</h4>`;
    root.appendChild(box);

    box.addEventListener("click", () => {
      //box.style.backgroundColor = "green";
      if (i === randomNo) {
        box.innerHTML = `<h4>💣</h4>`;
      } else {
        box.style.backgroundColor = "green";
      }
    });
  }
};
