import "./style.css";
import "./modern-normalize.css";
import {
  fillHero,
  fillButtons,
  styleButtons,
  activateHome,
  fillHome,
  fillHomeOffer,
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
  if (document.querySelector(".home-container")) {
    content.removeChild(homeContainer);
  }
  fillHome();
  fillHomeOffer();
});

menuBtn[0].addEventListener("click", () => {
  const homeContainer = document.querySelector(".home-container");
  if (document.querySelector(".home-container")) {
    content.removeChild(homeContainer);
  }
});

contactBtn[0].addEventListener("click", () => {
  const homeContainer = document.querySelector(".home-container");
  if (document.querySelector(".home-container")) {
    content.removeChild(homeContainer);
  }
});
