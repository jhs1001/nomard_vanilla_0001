//alert("hi");

let a = 6;
const b = "2";
let Name3 = "nico"
const YourName = "nico"
const amIFat = undefined;
let somthing;

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fir = "fir";
const sat = "sat";
const sun = "sun";

const Week = [mon, tue, wed, thu, fir, sat, sun];
const nonsense = [1,2,"hello", false, null, true, undefined, "nico"];
const Week2 = ["mon", "tue", "wed", "thu", "fir", "sat", "sun"];

console.log(Week, nonsense);
console.log(Week2[3]);
console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello " + Name3);

Name3 = "coco"

console.log("hello " + Name3);
console.log("hello " + YourName);
console.log(amIFat);
console.log(somthing);

Week2.push("sunday")

console.log(Week2)



const player = {
    name: "nico",
    point: 10,
    age: 165,
    fat: true,
};

console.log(player.name);
console.log(player);

player.name = "soso";
console.log(player.name);

player.lastname = "potato";
console.log(player);