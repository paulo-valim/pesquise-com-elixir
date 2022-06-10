const buttonMenu = document.querySelector(".button--nav");
const dropdownMenu = document.querySelector(".nav__dropdown");
const colorMenu = document.querySelector(".icon__menu");

buttonMenu.addEventListener("click", () => {
  dropdownMenu.classList.toggle("nav__dropdown--active");
  buttonMenu.classList.toggle("button--nav--active");
  colorMenu.classList.toggle("icon__menu--active");
});
