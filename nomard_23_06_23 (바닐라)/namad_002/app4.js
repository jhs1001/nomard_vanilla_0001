//app4.js


const age = parseFloat(prompt("how old are you?"));

console.log(age);

console.log(isNaN(age));

if(isNaN(age)){
    console.log("맞았어");
} else {
    console.log("틀렸어");
}