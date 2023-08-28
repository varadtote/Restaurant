import { createMenuContent } from "./Menu";
import { createContactContent } from "./Contact";

export function createNavigation() {
  let appDiv = document.getElementById("app");
  appDiv.innerHTML = "";
  let nav = document.createElement("nav");

  let logoLink = document.createElement("a");
  logoLink.setAttribute("class", "logo");
  logoLink.textContent = "Burger Point";

  let ul = document.createElement("ul");

  let HomeLink = document.createElement("a");
  HomeLink.setAttribute("class", "menu");
  HomeLink.textContent = "Home";
  HomeLink.addEventListener("click", createHomeContent);

  let menuLink = document.createElement("a");
  menuLink.setAttribute("class", "menu");
  menuLink.textContent = "Menu";
  menuLink.addEventListener("click", createMenuContent);

  let contactLink = document.createElement("a");
  contactLink.setAttribute("class", "contact");
  contactLink.textContent = "Contact";
  contactLink.addEventListener("click", createContactContent);

  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");

  li1.appendChild(menuLink);
  li2.appendChild(contactLink);
  li3.appendChild(HomeLink);

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  nav.appendChild(logoLink);
  nav.appendChild(ul);

  appDiv.appendChild(nav);
}

import heroImage from "../assets/hero_image.png";

export function createMainContent() {
  let main = document.createElement("div");
  main.classList.add("main");
  main.innerHTML = "";

  let leftDiv = document.createElement("div");
  leftDiv.className = "left";

  let h1 = document.createElement("h1");
  h1.setAttribute("class", "hero-text");
  h1.textContent = "Awesome Burgers";

  let p = document.createElement("p");
  p.setAttribute("class", "hero-subtext");
  p.textContent = "Best Variety and taste in town";

  leftDiv.appendChild(h1);
  leftDiv.appendChild(p);

  let rightDiv = document.createElement("div");
  rightDiv.className = "right";

  let img = document.createElement("img");
  img.src = heroImage;
  img.alt = "";

  rightDiv.appendChild(img);

  main.appendChild(leftDiv);
  main.appendChild(rightDiv);

  let appDiv = document.getElementById("app");
  appDiv.appendChild(main);
}

export function createHomeContent() {
  let main = document.querySelector(".main");
  // main.classList.add('main')
  // main.innerHTML = "this is main content";
  main.innerHTML = "";

  let leftDiv = document.createElement("div");
  leftDiv.className = "left";

  let h1 = document.createElement("h1");
  h1.textContent = "Awesome Burgers";

  let p = document.createElement("p");
  p.textContent = "Best Variety and taste in town";

  leftDiv.appendChild(h1);
  leftDiv.appendChild(p);

  let rightDiv = document.createElement("div");
  rightDiv.className = "right";

  let img = document.createElement("img");
  img.src = heroImage;
  img.alt = "";

  rightDiv.appendChild(img);

  main.appendChild(leftDiv);
  main.appendChild(rightDiv);

  let appDiv = document.getElementById("app");
  appDiv.appendChild(main);
}
