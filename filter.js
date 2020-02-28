const animals = ["frog", "snake", "pig", "rat", "bear", "wolf"];
// returning new Array
const getFrog = animals.filter(animal => animal == "frog");
// console.log(getFrog); ["frog"]
// returning new Array
const getByStrLength = animals.filter(animal => animal.length == 4);
// console.log(getByStrLength); ["frog", "bear", "wolf"];
