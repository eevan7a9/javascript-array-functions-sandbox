const animals = ["frog", "snake", "pig", "rat", "bear", "wolf"];

const getFrog = animals.filter(animal => animal == "frog");
// console.log(getFrog); ["frog"]

const getByStrLength = animals.filter(animal => animal.length == 4);
console.log(getByStrLength);
