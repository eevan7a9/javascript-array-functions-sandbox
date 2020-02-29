const students = [
  {
    name: "ben",
    age: 21,
    course: "IT",
    school: "UST"
  },
  {
    name: "anna",
    age: 15,
    course: "nurse",
    school: "UST"
  },
  {
    name: "nami",
    age: 33,
    course: "teach",
    school: "UST"
  }
];

const USF = students.every(student => student.school == "USF");
// console.log(USF); false

const UST = students.every(student => student.school == "UST");
// console.log(UST); true

const ageAbove14 = students.every(student => student.age > 14);
// console.log(ageAbove14); true

const ageBelow14 = students.every(student => student.age < 14);
// console.log(ageBelow14); false
