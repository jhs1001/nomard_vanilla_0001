
const title = document.querySelector(".hello h1:nth-of-type(2)");

title.innerText = "hi Korean";

console.dir(title);

title.style.color = "red";


function Click() {
    let randomColor = getRandomColor();
    title.style.color = randomColor;
    console.log("wow 방가");
}

title.addEventListener("click", Click);
title.addEventListener("mouseenter", Mouse);
title.addEventListener("mouseleave", mouseleave);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function Mouse() {
    console.log("mouse is here!");
    title.innerText = "mouse is here!"
}

function mouseleave() {
    console.log("mouse is gone!");
    title.innerText = "mouse is cone!"
}