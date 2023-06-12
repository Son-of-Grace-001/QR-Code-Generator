let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", navMenu);

let clear = document.querySelector(".clear");
clear.addEventListener("click", del);

function navMenu(){
  let navOption = document.getElementById("nav-option");
  navOption.style.display = "block";
}

function del(){
  let navOption = document.getElementById("nav-option");
  navOption.style.display = "none";
}