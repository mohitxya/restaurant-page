export default function loadHomePage() {
  const content = document.querySelector("#content");
  const header = document.querySelector("header");
  // In homepage.js or menu.js

  header.classList.remove("about-blur");

  // ✅ Reset content area
  content.innerHTML = "";
  content.classList.remove("overlay-mode");

  // ✅ Remove any existing .hero-text to avoid duplicates
  const existingHero = document.querySelector(".hero-text");
  if (existingHero) existingHero.remove();

  // ✅ Create hero section
  const hero = document.createElement("div");
  hero.classList.add("hero-text");

  const title = document.createElement("h1");
  title.textContent = "Big Bite Burgers";

  const subtitle = document.createElement("p");
  subtitle.textContent = "Satisfy Your Cravings. One Juicy Bite at a Time.";

  const button = document.createElement("button");
  button.classList.add("hero-cta");
  button.textContent = "Order Now";

  hero.appendChild(title);
  hero.appendChild(subtitle);
  hero.appendChild(button);
  header.appendChild(hero);

  // ✅ Create About section
  const heading = document.createElement("h2");
  heading.textContent = "About Us";

  const paragraph1 = document.createElement("p");
  paragraph1.textContent =
    "At Big Bite Burgers, we believe a burger isn't just food — it's an experience. Since our humble beginnings in 2015, we've been crafting gourmet burgers using only the freshest ingredients, juicy patties, and bold flavors that keep our customers coming back for more.";

  const paragraph2 = document.createElement("p");
  paragraph2.textContent =
    "Whether you're here for a quick lunch or a late-night bite, our team is passionate about delivering the perfect burger, every single time.";

  const paragraph3 = document.createElement("p");
  paragraph3.textContent = "Come hungry. Leave happy.";

  content.appendChild(heading);
  content.appendChild(paragraph1);
  content.appendChild(paragraph2);
  content.appendChild(paragraph3);
}
