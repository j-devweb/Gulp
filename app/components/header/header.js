// Бургер меню

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuLink = document.querySelectorAll("a");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("active");
});

menuLink.forEach((el) => {
  el.addEventListener("click", () => {
    burger.classList.remove("burger--active");
    menu.classList.remove("active");
  });
});
// Бургер меню