import contactHeroImg from "../images/contact-bubbles.png";

export { fillContactHero };

const content = document.querySelector("#content");

function fillContactHero() {
  const contactContainer = document.createElement("div");
  const contactHero = document.createElement("div");
  const contactHeroText = document.createElement("div");
  const contactHeroLogo = document.createElement("div");
  const contactHeroLogoThe = document.createElement("div");
  const contactHeroLogoBobaCube = document.createElement("div");
  const contactLogo = document.createElement("img");

  contactHeroText.textContent = "delivers";
  contactHeroLogoThe.textContent = "the";
  contactHeroLogoBobaCube.textContent = "boba cube.";
  contactLogo.src = contactHeroImg;
  contactLogo.setAttribute("style", "width:2.5rem; height:auto;");

  contactHeroLogo.classList.add("contact-hero-logo");
  contactHeroLogoThe.classList.add("contact-hero-logo-the");
  contactHeroLogoBobaCube.classList.add("contact-hero-logo-bobacube");
  contactHero.classList.add("contact-hero");
  contactContainer.classList.add("contact-container");

  contactHeroLogo.appendChild(contactLogo);
  contactHeroLogo.appendChild(contactHeroLogoThe);
  contactHeroLogo.appendChild(contactHeroLogoBobaCube);
  contactHero.appendChild(contactHeroLogo);
  contactHero.appendChild(contactHeroText);
  contactContainer.appendChild(contactHero);
  content.appendChild(contactContainer);
}
