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


// Tabs start
let tabsBtn = document.querySelectorAll(".tabs__toggle"),
  contents = document.querySelectorAll(".tabs__content");

tabsBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    tabsBtn.forEach((tab) => {
      tab.classList.remove("active");
    });

    contents[index].classList.add("active");
    tabsBtn[index].classList.add("active");
  });
});
// Tabs end