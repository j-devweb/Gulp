// Modal popup start
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let modalBtn = document.querySelector(".modal__btn");
let closeBtn = document.querySelector(".modal__close");

modalBtn.addEventListener("click", function () {
  overlay.classList.add("active");
  modal.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  overlay.classList.remove("active");
  modal.classList.remove("active");
});

document.addEventListener("click", function (e) {
  let click = e.target.classList.value;
  if (click === "overlay active") {
    overlay.classList.remove("active");
    modal.classList.remove("active");
  }
});
// Modal popup end