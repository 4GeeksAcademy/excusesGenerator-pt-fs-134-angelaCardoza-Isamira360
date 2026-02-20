import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function(excuse) {
  //write your code here

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


const randomNumber = (array) => Math.floor(Math.random() * array.length);
const randomValue = (array) => array[randomNumber(array)];


function excuse() {
return `<br> ${randomValue(who)} ${randomValue(action)} ${randomValue(what)} ${randomValue(when)}`;

}

 

document.getElementById("excuse").innerHTML = document.getElementById("excuse").textContent = excuse();

};
