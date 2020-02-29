const items = [
  {
    name: "mango",
    price: 300
  },
  {
    name: "pizza",
    price: 100
  },
  {
    name: "melon",
    price: 300
  },
  {
    name: "potato",
    price: 1000
  }
];

const totalItemsPrice = items.reduce((prevTotal, item) => {
  return prevTotal + item.price;
}, 0); // initial value 0
// console.log(totalItemsPrice); 1700;

const combinedName = items.reduce((prevName, item) => {
  return prevName + item.name;
}, ""); // initial value " "
// console.log(combinedName); mangopizzamelonpotato
