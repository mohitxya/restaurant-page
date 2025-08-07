export default function loadAboutPage() {
  const content = document.querySelector("#content");
  const hero = document.querySelector(".hero-text");
  const header = document.querySelector("header");

  if (hero) hero.remove();

  // Reset content
  content.innerHTML = "";
  content.className = ""; // remove previous mode classes
  content.classList.add("overlay-mode", "about-mode");

  // Add blur only to image, not nav
  header.classList.add("about-blur");

  // Add About content
  const heading = document.createElement("h2");
  heading.textContent = "The Legend of Baba Yagi Maharaj";

  const para1 = document.createElement("p");
  para1.textContent =
    "Long ago in the misty mountains of the Himalayas, a mystical sage named Baba Yagi Maharaj meditated on flavors unknown to humankind.";

  const para2 = document.createElement("p");
  para2.textContent =
    "During a cosmic thunderstorm, lightning struck a sacred potato, a cow blessed it with ghee, and a flying bun descended from the heavens. Baba Yagi fused them using his trident of taste.";

  const para3 = document.createElement("p");
  para3.textContent =
    "And thus, the first burger was born — divine, juicy, and filled with spiritual umami. Since then, the art has passed down through grilled generations.";

  content.appendChild(heading);
  content.appendChild(para1);
  content.appendChild(para2);
  content.appendChild(para3);
}
