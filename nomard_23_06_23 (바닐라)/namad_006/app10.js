
const title = document.querySelector(".hello:first-child h1");

title.innerText = "hi Korean";

console.dir(title);

title.style.color = "yellow";


function Click() {
    let randomColor = getRandomColor();
    title.style.color = randomColor;
    console.log("wow 방가");
}

title.addEventListener("click", Click);


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}