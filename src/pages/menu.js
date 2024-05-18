export { fillMenuCards };

const content = document.querySelector("#content");

function fillMenuCards() {
  const menuContainer = document.createElement("div");
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

  card1.textContent = "Vanilla Velvet";
  price1.textContent = "$3.00";
  card2.textContent = "Strawberry Serenade";
  price2.textContent = "$3.50";
  card3.textContent = "Tropical Swish";
  originalPrice1.textContent = "$3.50";
  discountedPrice1.textContent = "$2.10";
  card4.textContent = "Chocolate Chai";
  price4.textContent = "$3.50";

  card1.classList.add("menu-card");
  price1.classList.add("menu-price");
  card2.classList.add("menu-card");
  price2.classList.add("menu-price");
  originalPrice1.classList.add("original-price");
  card3.classList.add("menu-card");
  price3.classList.add("menu-price-3");
  card4.classList.add("menu-card");
  price4.classList.add("menu-price");
  menuContainer.classList.add("menu-container");

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
  content.appendChild(menuContainer);
}
