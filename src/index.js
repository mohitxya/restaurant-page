import "./styles.css";
import loadHomePage from "./homepage.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";


document.addEventListener("DOMContentLoaded", () => {
  loadHomePage(); // Default on load
});

document.getElementById("home-btn").addEventListener("click", () => {
  loadHomePage();
});

document.getElementById("menu-btn").addEventListener("click", () => {
  loadMenuPage();
});

document.getElementById("about-btn").addEventListener("click", () => {
  loadAboutPage();
});
