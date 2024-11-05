import "../scss/style.scss";
import * as bodyScrollLock from "body-scroll-lock";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const refs = {
  openMenu: document.querySelector(".burgerBtn"),
  backdrop: document.querySelector(".backdrop"),
  scroll: document.querySelector(".hero-scroll"),
  sectionPrices: document.querySelector(".prices"),
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

function scrollDown() {
  gsap.to(window, {
    duration: 1,
    scrollTo: refs.sectionPrices,
  });
}

refs.scroll.addEventListener("click", scrollDown);
