const numbers = [3, 4, 5, 22, 33, 1];
// returning new Array
const addByTens = numbers.map(num => num + 10);
// console.log(addByTens); [13, 14, 15, 32, 43, 11]

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
// returning new Array
const changeCourseToDev = students.map(student => {
  student.course = "Dev";
  return student;
});
// console.log(changeCourseToDev);
// [
//   { name: "ben", course: "Dev" },
//   { name: "anna", course: "Dev" },
//   { name: "nami", course: "Dev" }
// ];
const studentsName = students.map(student => student.name);
// console.log(studentsName); ["ben", "anna", "nami"];
