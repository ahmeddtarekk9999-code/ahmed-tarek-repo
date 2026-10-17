
import { items } from "./items.js";

export function renderItems(list) {
  const element = document.querySelector("#list");

  element.replaceChildren();

  list.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("article-card");
    card.textContent = `${item.name} - ${item.price} EGP`;

    element.append(card);
  });
}

export function matching() {
  return items.filter((item) => item.category === "bags");
}

export function start() {
  renderItems(items);

  document.querySelector("#shortlist").addEventListener("click", () => {
    renderItems(matching());
  });
}
