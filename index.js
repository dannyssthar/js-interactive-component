"use strict";
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const message = document.querySelector(".select");

one.addEventListener("click", function () {
  message.textContent = `You selected 1 out of 5`;
  one.style.backgroundColor = "hsl(25, 97%, 53%)";
});
two.addEventListener("click", function () {
  message.textContent = `You selected 2 out of 5`;
  two.style.backgroundColor = "hsl(25, 97%, 53%)";
});
three.addEventListener("click", function () {
  message.textContent = `You selected 3 out of 5`;
  three.style.backgroundColor = "hsl(25, 97%, 53%)";
});
four.addEventListener("click", function () {
  message.textContent = `You selected 4 out of 5`;
  four.style.backgroundColor = "hsl(25, 97%, 53%)";
});
five.addEventListener("click", function () {
  message.textContent = `You selected 5 out of 5`;
  five.style.backgroundColor = "hsl(25, 97%, 53%)";
});
document.querySelector(".submit").addEventListener("click", function () {
  document.querySelector("section").classList.remove("hidden");
  document.querySelector(".container").classList.add("hidden");
});
