import "../scss/style.scss";
import * as bodyScrollLock from "body-scroll-lock";
import Swiper from "swiper";

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const refs = {
  openMenu: document.querySelector(".burgerBtn"),
  backdrop: document.querySelector(".backdrop"),
};

function toggleMenu() {
  refs.backdrop.classList.toggle("is-open");
  const isMenuOpen = refs.backdrop.classList.contains("is-open");

  const scrollLockMethod = isMenuOpen
    ? "disableBodyScroll"
    : "enableBodyScroll";
  bodyScrollLock[scrollLockMethod](document.body);
}

refs.openMenu.addEventListener("click", toggleMenu);

window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  refs.backdrop.classList.remove("is-open");
  bodyScrollLock.enableBodyScroll(document.body);
});
