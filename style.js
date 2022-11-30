"use strict";
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    console.log("rest");
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
  });
}

let bar = document.querySelector(".fa-bars");
let x = document.querySelector(".fa-x");
let nave = document.querySelector(".nav");
bar.addEventListener("click", () => {
  nave.classList.add("add");
  bar.style.display = "none";
  x.style.display = "flex";
});
x.addEventListener("click", () => {
  nave.classList.remove("add");
  x.style.display = "none";
  bar.style.display = "block";
});
window.addEventListener("scroll", () => {
  nave.classList.remove("add");
  x.style.display = "none";
  bar.style.display = "block";
});
if (nave.style.maxWidth > "649px") {
  bar.style.display = "none";
  console.log('egbami');
}
