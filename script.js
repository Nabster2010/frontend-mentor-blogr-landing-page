const menuBtn = document.getElementsByClassName("menu-btn")[0];
const subBtn = document.getElementById("sub-btn");

menuBtn.addEventListener("click", () => {
  [...document.getElementsByClassName("menu-btn")[0].children].forEach((el) => {
    el.classList.toggle("hidden");
  });
  document.getElementsByClassName("nav-menu")[0].classList.toggle("hidden");
});

subBtn.addEventListener("click", () => {
  document.getElementById("arrow").classList.toggle("rotate-180");
  document.getElementById("drop-down").classList.toggle("hidden");
});
