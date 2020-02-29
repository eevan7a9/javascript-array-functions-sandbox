const students = [
  {
    name: "ben",
    course: "IT"
  },
  {
    name: "anna",
    course: "nurse"
  },
  {
    name: "nami",
    course: "teach"
  }
];

// will not return anything
// will loop through and directly modify the array
students.forEach(student => {
  student.food = "rice";
});
// console.log(students);
// [
//   { name: "ben", course: "IT", food: "rice" },
//   { name: "anna", course: "nurse", food: "rice" },
//   { name: "nami", course: "teach", food: "rice" }
// ];

const fruits = ["mango", "apple", "grapes", "orange"];

fruits.forEach(fruit => console.log(fruit));
// mango
// apple
// grapes
// orange
