import contactHeroImg from "../images/contact-bubbles.png";

export { fillContactHero, fillContactCard, fillEmailBtn };

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

function fillContactCard() {
  const contactContainer = document.querySelector(".contact-container");
  const contactCard = document.createElement("div");
  const contactCardTextContainer = document.createElement("div");
  const contactCardImgContainer = document.createElement("div");
  const contactCardTextFirst = document.createElement("div");
  const contactCardTextAddress = document.createElement("div");
  const contactCardTextSecond = document.createElement("div");
  const contactCardTextNumber = document.createElement("div");

  contactCardTextFirst.textContent =
    "Happy to welcome you anytime, except tuesdays!😋";
  contactCardTextAddress.textContent =
    "🧭 221B, Baker Street, London, United Kingdom";
  contactCardTextSecond.textContent =
    "We are too far away? Contact us for free deliveries!";
  contactCardTextNumber.textContent = "📞 +44 4242 828282";

  contactCard.classList.add("contact-card");
  contactCardTextContainer.classList.add("contact-card-text-container");
  contactCardImgContainer.classList.add("contact-card-img");
  contactCardTextAddress.classList.add("contact-card-address");
  contactCardTextNumber.classList.add("contact-card-number");

  contactCardTextContainer.appendChild(contactCardTextFirst);
  contactCardTextContainer.appendChild(contactCardTextAddress);
  contactCardTextContainer.appendChild(contactCardTextSecond);
  contactCardTextContainer.appendChild(contactCardTextNumber);
  contactCard.appendChild(contactCardImgContainer);
  contactCard.appendChild(contactCardTextContainer);
  contactContainer.appendChild(contactCard);
}

function fillEmailBtn() {
  const contactContainer = document.querySelector(".contact-container");
  const emailContainer = document.createElement("div");
  const emailText = document.createElement("div");
  const emailBtn = document.createElement("button");

  emailText.textContent =
    "Or - email us! We will respond to you like a bubble burst!";
  emailBtn.textContent = "🖂 Letters!";

  emailContainer.classList.add("contact-email-container");
  emailText.classList.add("contact-email-text");
  emailBtn.classList.add("contact-email-btn");

  emailContainer.appendChild(emailText);
  emailContainer.appendChild(emailBtn);
  contactContainer.appendChild(emailContainer);
}
