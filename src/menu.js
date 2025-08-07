export default function loadMenuPage() {
  const content = document.querySelector("#content");
  // In homepage.js or menu.js
const header = document.querySelector("header");
header.classList.remove("about-blur");

  // ✅ Clear previous content and layout mode
  content.innerHTML = "";
  content.classList.add("overlay-mode");

  // ✅ Remove the hero-text if it exists
  const hero = document.querySelector(".hero-text");
  
  if (hero) hero.remove();

  // ✅ Create the menu grid container
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  // ✅ Create sample food cards
  for (let i = 1; i <= 8; i++) {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const itemName = document.createElement("h3");
    itemName.textContent = `Burger ${i}`;

    const itemDesc = document.createElement("p");
    itemDesc.textContent = "A delicious handcrafted burger with premium ingredients.";

    card.appendChild(itemName);
    card.appendChild(itemDesc);
    menuGrid.appendChild(card);
  }

  content.appendChild(menuGrid);
}
