const body = document.getElementsByTagName("body")[0]
const greenButton = document.getElementById("green");
const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}

greenButton.addEventListener("click", () => setColor("green"));
redButton.addEventListener("click", () => setColor("red"));
blueButton.addEventListener("click", () => setColor("blue"));
randomColor();
///////////