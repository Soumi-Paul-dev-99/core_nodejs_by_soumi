// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();
// emitter.on("order-pizza", (size, topping) => {
//   console.log(`order received ! backing a ${size} pizza with ${topping}`);
// });
// emitter.on("order-pizza", (size) => {
//   if (size === "large") {
//     console.log("Serving complementary drink");
//   }
// });
// console.log("do you before occors in the system");
// emitter.emit("order-pizza", "large", "marsoom");

/// custom events

const PizzaShop = require("./pizzaShop");
const DrinkMechine = require("./drink-machine");

const pizzaShop = new PizzaShop();
const drinkMechine = new DrinkMechine();

pizzaShop.on("order", (size, topping) => {
  console.log(`order received ! backing a ${size} pizza with ${topping}`);
  drinkMechine.serveDrink(size);
});

pizzaShop.order("large", "mashroom");
pizzaShop.displayOrderNumber();
