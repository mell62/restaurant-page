export { fillHome };

const content = document.querySelector("#content");

function fillHome() {
  const homeContainer = document.createElement("div");
  const homeHero = document.createElement("div");
  const homeHeroLogo = document.createElement("div");
  const homeHeroLogoThe = document.createElement("div");
  const homeHeroLogoBobaCube = document.createElement("div");
  const homeText = document.createElement("div");

  homeHero.textContent = "Welcome to";
  homeHeroLogoThe.textContent = "the";
  homeHeroLogoBobaCube.textContent = "boba cube.";
  homeText.textContent =
    " Indulge in the perfect blend of flavors and fun at our cafe. Sip, relax, and let the good times bubble up!";

  homeHeroLogo.classList.add("home-hero-logo");
  homeHeroLogoThe.classList.add("home-hero-logo-the");
  homeHero.classList.add("home-hero");
  homeContainer.classList.add("home-container");
  homeText.classList.add("home-text");

  homeHeroLogo.appendChild(homeHeroLogoThe);
  homeHeroLogo.appendChild(homeHeroLogoBobaCube);
  homeHero.appendChild(homeHeroLogo);
  homeContainer.appendChild(homeHero);
  homeContainer.appendChild(homeText);
  content.appendChild(homeContainer);
}
