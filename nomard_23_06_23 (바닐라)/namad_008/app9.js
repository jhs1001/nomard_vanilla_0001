
const title = document.querySelector(".hello:first-child h1");

title.innerText = "hi Korean";

console.dir(title);

title.style.color = "yellow";


function Click() {
    console.log("wow 방가");
}

title.addEventListener("click", Click);
