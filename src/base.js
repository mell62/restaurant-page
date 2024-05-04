import logoBubbleTea from './images/bubble-tea-logo.png';
export { fillHero, fillButtons };

const content = document.querySelector("#content");
const nav = document.querySelector("nav");

function fillHero(){
    const hero = document.createElement("div");
    const heroImageContainer = document.createElement("div");
    const heroImage = document.createElement("img");
    const heroText = document.createElement("div");
    const heroTextFirst = document.createElement("div");
    const heroTextSecond = document.createElement("div");

    heroImage.setAttribute("style", "width: 5.5rem;")
    heroImage.src = logoBubbleTea;
    heroTextFirst.textContent = "the";
    heroTextSecond.textContent = "boba cube.";

    content.insertBefore(hero, nav);
    heroImageContainer.appendChild(heroImage);
    hero.appendChild(heroImageContainer);
    hero.appendChild(heroText);
    heroText.appendChild(heroTextFirst);
    heroText.appendChild(heroTextSecond);
    hero.classList.toggle("hero");
    heroTextFirst.classList.toggle("hero-text-the");
    heroText.classList.toggle("hero-text");
}

function fillButtons(){
    const homeButton = document.createElement("button");
    const menuButton = document.createElement("button");
    const contactButton = document.createElement("button");

    homeButton.textContent = "Home";
    menuButton.textContent = "Menu";
    contactButton.textContent = "Contact";

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

}