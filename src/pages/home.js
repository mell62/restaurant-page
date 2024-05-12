import bobaImg from "../images/boba.png";
import bubbleTea from "../images/bubble-tea-img.jpg";
export { fillHome, fillHomeOffer };

const content = document.querySelector("#content");

function fillHome() {
  const homeContainer = document.createElement("div");
  const homeHero = document.createElement("div");
  const homeHeroText = document.createElement("div");
  const homeHeroLogo = document.createElement("div");
  const homeHeroLogoThe = document.createElement("div");
  const homeHeroLogoBobaCube = document.createElement("div");
  const homeText = document.createElement("div");
  const bobaIcon = document.createElement("img");
  const homeBtn = document.createElement("button");

  homeHeroText.textContent = "experience";
  homeHeroLogoThe.textContent = "the";
  homeHeroLogoBobaCube.textContent = "boba cube.";
  homeText.textContent =
    "Indulge in the perfect blend of flavors and fun at our cafe. Sip, relax, and let the good times bubble up!";
  bobaIcon.src = bobaImg;
  bobaIcon.setAttribute("style", "width:2rem;");
  homeBtn.textContent = "Book a Bubble!";

  homeHeroLogo.classList.add("home-hero-logo");
  homeHeroLogoThe.classList.add("home-hero-logo-the");
  homeHeroLogoBobaCube.classList.add("home-hero-logo-bobacube");
  homeHero.classList.add("home-hero");
  homeContainer.classList.add("home-container");
  homeText.classList.add("home-text");
  homeBtn.classList.add("home-btn");

  homeHeroLogo.appendChild(homeHeroLogoThe);
  homeHeroLogo.appendChild(homeHeroLogoBobaCube);
  homeHeroLogo.appendChild(bobaIcon);
  homeHero.appendChild(homeHeroLogo);
  homeHero.appendChild(homeHeroText);
  homeContainer.appendChild(homeHero);
  homeContainer.appendChild(homeText);
  homeContainer.appendChild(homeBtn);
  content.appendChild(homeContainer);
}

function fillHomeOffer() {
  const homeContainer = document.querySelector(".home-container");
  const offerCard = document.createElement("div");
  const offerCardText = document.createElement("div");

  offerCardText.textContent =
    "Beat the summer heat! 40% off on Tropical Swish and Blueberry Blast boba cups!";
  offerCardText.classList.add("offer-card-text");
  offerCard.classList.add("offer-card");

  offerCard.appendChild(offerCardText);
  homeContainer.appendChild(offerCard);
}
