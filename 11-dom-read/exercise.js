
/**
 * The text of the page's main heading.
 *
 * @returns {string}
 */
export function pageHeading() {
  return document.querySelector("h1").textContent;
}

/**
 * How many product cards are on the page.
 *
 * @returns {number}
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * The name in every card, in the order they appear.
 *
 * @returns {string[]}
 */
export function productNames() {
  return Array.from(document.querySelectorAll(".card h3")).map(
    (heading) => heading.textContent
  );
}

/**
 * The price text shown on the card with that name.
 *
 * @param {string} name
 * @returns {string|null}
 */
export function priceOf(name) {
  const cards = document.querySelectorAll(".card");

  const card = Array.from(cards).find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent;
}

/**
 * Returns the names of products marked as sold out.
 *
 * @returns {string[]}
 */
export function soldOutNames() {
  return Array.from(document.querySelectorAll(".card.sold-out")).map(
    (card) => card.querySelector("h3").textContent
  );
}
