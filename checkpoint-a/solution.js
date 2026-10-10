
import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Return every order from the database.
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Return only orders from Cairo with status "paid".
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Cairo" && order.status === "paid"
  );
}

// 3. Add up the quantity of items across all orders.
export function summarize(orders) {
  return orders.reduce((total, order) => total + order.quantity, 0);
}

// 4. Describe an order, and never throw an error.
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.item} x${order.quantity} ordered by ${order.student}`;
  } catch {
    return `Missing order: ${id}`;
  }
}

// 5. Return JSON text containing only item and price, in that order.
export function toJsonLines(orders) {
  const simplifiedOrders = orders.map((order) => ({
    item: order.item,
    price: order.price,
  }));

  return JSON.stringify(simplifiedOrders);
}
