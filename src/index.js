import "./style.css";
import createHomePage from "./home.js";
const content = document.querySelector("#content");
const menuButton = document.querySelector("#menu-btn");
const homeButton = document.querySelector("#home-btn");
const contactButton = document.querySelector("#contact-btn");

content.appendChild(createHomePage());

import createMenuPage from "./menu.js";
menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(createMenuPage());
});


homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(createHomePage());
});

import createContactPage from "./contact.js";
contactButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(createContactPage());
});