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