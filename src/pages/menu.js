import bobaImg from "../images/menu-bubbles.png";
export { fillMenuCards, fillMenuHero };

const content = document.querySelector("#content");

function fillMenuHero() {
  const menuContainer = document.createElement("div");
  const menuHero = document.createElement("div");
  const menuHeroText = document.createElement("div");
  const menuHeroLogo = document.createElement("div");
  const menuHeroLogoThe = document.createElement("div");
  const menuHeroLogoBobaCube = document.createElement("div");
  const bobaIcon = document.createElement("img");

  menuHeroText.textContent = "delights";
  menuHeroLogoThe.textContent = "the";
  menuHeroLogoBobaCube.textContent = "boba cube.";
  bobaIcon.src = bobaImg;
  bobaIcon.setAttribute("style", "width:2rem; height:auto;");

  menuHeroLogo.classList.add("menu-hero-logo");
  menuHeroLogoThe.classList.add("menu-hero-logo-the");
  menuHeroLogoBobaCube.classList.add("menu-hero-logo-bobacube");
  menuHero.classList.add("menu-hero");
  menuContainer.classList.add("menu-container");

  menuHeroLogo.appendChild(menuHeroLogoThe);
  menuHeroLogo.appendChild(menuHeroLogoBobaCube);
  menuHeroLogo.appendChild(bobaIcon);
  menuHero.appendChild(menuHeroLogo);
  menuHero.appendChild(menuHeroText);
  menuContainer.appendChild(menuHero);
  content.appendChild(menuContainer);
}

function fillMenuCards() {
  const menuContainer = document.querySelector(".menu-container");
  const card1 = document.createElement("div");
  const card2 = document.createElement("div");
  const card3 = document.createElement("div");
  const card4 = document.createElement("div");
  const price1 = document.createElement("div");
  const price2 = document.createElement("div");
  const price3 = document.createElement("div");
  const price4 = document.createElement("div");
  const originalPrice1 = document.createElement("div");
  const discountedPrice1 = document.createElement("div");
  const card5 = document.createElement("div");
  const card6 = document.createElement("div");
  const card7 = document.createElement("div");
  const card8 = document.createElement("div");
  const price5 = document.createElement("div");
  const price6 = document.createElement("div");
  const price7 = document.createElement("div");
  const price8 = document.createElement("div");
  const originalPrice2 = document.createElement("div");
  const discountedPrice2 = document.createElement("div");

  card1.textContent = "Vanilla Velvet";
  price1.textContent = "$3.00";
  card2.textContent = "Strawberry Serenade";
  price2.textContent = "$3.50";
  card3.textContent = "Tropical Swish";
  originalPrice1.textContent = "$3.50";
  discountedPrice1.textContent = "$2.10";
  card4.textContent = "Chocolate Chai";
  price4.textContent = "$3.50";
  card5.textContent = "Coconut Dream";
  price5.textContent = "$3.50";
  card6.textContent = "Blueberry Blast";
  originalPrice2.textContent = "$3.50";
  discountedPrice2.textContent = "$2.10";
  card7.textContent = "Peachy Keen";
  price7.textContent = "$3.99";
  card8.textContent = "Matcha Madness";
  price8.textContent = "$3.99";

  card1.classList.add("menu-card");
  price1.classList.add("menu-price");
  card2.classList.add("menu-card");
  price2.classList.add("menu-price");
  originalPrice1.classList.add("original-price");
  card3.classList.add("menu-card");
  price3.classList.add("menu-price-3");
  card4.classList.add("menu-card");
  price4.classList.add("menu-price");
  card5.classList.add("menu-card");
  price5.classList.add("menu-price");
  card6.classList.add("menu-card");
  price6.classList.add("menu-price-3");
  originalPrice2.classList.add("original-price");
  card7.classList.add("menu-card");
  price7.classList.add("menu-price");
  card8.classList.add("menu-card");
  price8.classList.add("menu-price");

  card1.appendChild(price1);
  menuContainer.appendChild(card1);
  card2.appendChild(price2);
  menuContainer.appendChild(card2);
  price3.appendChild(originalPrice1);
  price3.appendChild(discountedPrice1);
  card3.appendChild(price3);
  menuContainer.appendChild(card3);
  card4.appendChild(price4);
  menuContainer.appendChild(card4);
  card5.appendChild(price5);
  menuContainer.appendChild(card5);
  card6.appendChild(price6);
  price6.appendChild(originalPrice2);
  price6.appendChild(discountedPrice2);
  menuContainer.appendChild(card6);
  card7.appendChild(price7);
  menuContainer.appendChild(card7);
  card8.appendChild(price8);
  menuContainer.appendChild(card8);
}
