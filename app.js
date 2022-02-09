const burger = document.querySelector(".menu__img");
const list = document.querySelector(".menu__navbar ul");

burger.addEventListener("click", () => {
  if (list.classList.contains("hidden")) {
    list.classList.remove("hidden");
  } else {
    list.classList.add("hidden");
  }
});
