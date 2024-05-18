import "./style.css";
import "./modern-normalize.css";
import {
  fillHero,
  fillButtons,
  styleButtons,
  activateHome,
  fillHome,
  fillHomeOffer,
  fillMenuCards,
} from "./barrel.js";

fillHero();
fillButtons();
activateHome();
styleButtons();
fillHome();
fillHomeOffer();

const nav = document.querySelector("nav");
const navButtons = nav.querySelectorAll("button");
const content = document.querySelector("#content");

const homeBtn = Array.from(navButtons).filter(
  (btn) => btn.textContent === "HOME"
);
const menuBtn = Array.from(navButtons).filter(
  (btn) => btn.textContent === "MENU"
);
const contactBtn = Array.from(navButtons).filter(
  (btn) => btn.textContent === "CONTACT"
);

homeBtn[0].addEventListener("click", () => {
  const homeContainer = document.querySelector(".home-container");
  const menuContainer = document.querySelector(".menu-container");
  if (document.querySelector(".home-container")) {
    content.removeChild(homeContainer);
  }
  if (document.querySelector(".menu-container")) {
    content.removeChild(menuContainer);
  }
  fillHome();
  fillHomeOffer();
});

menuBtn[0].addEventListener("click", () => {
  const homeContainer = document.querySelector(".home-container");
  const menuContainer = document.querySelector(".menu-container");
  if (document.querySelector(".home-container")) {
    content.removeChild(homeContainer);
  }
  if (document.querySelector(".menu-container")) {
    content.removeChild(menuContainer);
  }
  fillMenuCards();
});

contactBtn[0].addEventListener("click", () => {
  const homeContainer = document.querySelector(".home-container");
  const menuContainer = document.querySelector(".menu-container");
  if (document.querySelector(".home-container")) {
    content.removeChild(homeContainer);
  }
  if (document.querySelector(".menu-container")) {
    content.removeChild(menuContainer);
  }
});
