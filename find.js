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

// we will get student an object  named ben copied by reference
const studentBen = students.find(student => student.name == "ben");

// console.log(studentBen); { name: 'ben', course: 'IT' }
studentBen.course = "cook";
// console.log(students);
// [
//   { name: "ben", course: "cook" },
//   { name: "anna", course: "nurse" },
//   { name: "nami", course: "teach" }
// ]; ben's course inside the students array were changed

const fruits = ["mango", "apple", "grapes", "orange"];
// we will get fruit  mango copied by value
let mango = fruits.find(fruit => fruit == "mango");
// console.log(mango); mango
mango = "berry";
// console.log(mango); berry;
// console.log(fruits); ["mango", "apple", "grapes", "orange"];
// the value from the array ruits will not change
