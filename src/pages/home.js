import bobaImg from "../images/boba.png";
export { fillHome };

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

  homeHeroText.textContent = "experience";
  homeHeroLogoThe.textContent = "the";
  homeHeroLogoBobaCube.textContent = "boba cube.";
  homeText.textContent =
    " Indulge in the perfect blend of flavors and fun at our cafe. Sip, relax, and let the good times bubble up!";
  bobaIcon.src = bobaImg;
  bobaIcon.setAttribute("style", "width:2rem;");

  homeHeroLogo.classList.add("home-hero-logo");
  homeHeroLogoThe.classList.add("home-hero-logo-the");
  homeHeroLogoBobaCube.classList.add("home-hero-logo-bobacube");
  homeHero.classList.add("home-hero");
  homeContainer.classList.add("home-container");
  homeText.classList.add("home-text");

  homeHeroLogo.appendChild(homeHeroLogoThe);
  homeHeroLogo.appendChild(homeHeroLogoBobaCube);
  homeHeroLogo.appendChild(bobaIcon);
  homeHero.appendChild(homeHeroLogo);
  homeHero.appendChild(homeHeroText);
  homeContainer.appendChild(homeHero);
  homeContainer.appendChild(homeText);
  content.appendChild(homeContainer);
}
