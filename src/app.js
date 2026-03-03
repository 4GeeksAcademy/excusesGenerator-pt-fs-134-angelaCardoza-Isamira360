import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function (excuse) {
  //write your code here

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
 


  const randomNumber = (array) => Math.floor(Math.random() * array.length);
  const randomValue = (array) => array[randomNumber(array)];

//this way is better because you can add more arrays and dont have to white more code in the function to build excuses. :)
  function excuse() {

    const parts = [who, action, what, when]
    let words = '';

    for (let part of parts) {
      words += randomValue(part) + ' ';
    }

    return `<br> ${words.trim()}`;

  }

  document.getElementById("excuse").innerHTML = document.getElementById("excuse").textContent = excuse();

};
