import logoBubbleTea from './images/bubble-tea-logo.png';
export { fillHero };

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

    content.appendChild(hero);
    heroImageContainer.appendChild(heroImage);
    hero.appendChild(heroImageContainer);
    hero.appendChild(heroText);
    heroText.appendChild(heroTextFirst);
    heroText.appendChild(heroTextSecond);
    hero.classList.toggle("hero");
    heroTextFirst.classList.toggle("hero-text-the");
    heroText.classList.toggle("hero-text");
}