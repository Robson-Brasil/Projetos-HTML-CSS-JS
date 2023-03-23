let open = true;

const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".burger-button");
const menuMobile = document.querySelector(".menu-mobile");

menuMobile.addEventListener("click", () => {
  menuClose.classList.toggle("close", open);
  menu.classList.toggle("open", open);
  open = !open;
});
