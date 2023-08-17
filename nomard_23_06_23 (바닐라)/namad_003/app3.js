//app3.js

function plus(a,b) {
    console.log(a + b);
}


plus(3,5);


const player = {
    name: "nico",
    sayHello: function(otherPersonName){
        console.log("hello! " + otherPersonName + " nice to meet you");
    },
};


console.log(player.name);
player.sayHello("yeojin");
player.sayHello("nico");

const age = 96;

function calculateKrAge(age) {
    return age + 2;
}

const krage = calculateKrAge(age);

console.log(krage);

const calcultor = {
    plus: function (a,b) {
        return a + b;
    },
    minus: function (a,b) {
        return a - b;
    },
}

console.log(calcultor.minus(10,5));