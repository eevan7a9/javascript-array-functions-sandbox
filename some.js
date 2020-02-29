const students = [
  {
    name: "ben",
    age: 21,
    course: "IT"
  },
  {
    name: "anna",
    age: 15,
    course: "nurse"
  },
  {
    name: "nami",
    age: 33,
    course: "teach"
  }
];

// will get a boolean to return if one of the student is age 15
const studentAge15 = students.some(student => {
  return student.age == 15;
});
// console.log(studentAge15); true

const checkStudentSimilarName = function(array, searchBy) {
  const result = array.some(
    item =>
      item.name.slice(0, searchBy.length) == searchBy.slice(0, searchBy.length)
  );
  return result;
};

const resultNami = checkStudentSimilarName(students, "nami");
// console.log(resultNami); true : student.nami exists
const resultBe = checkStudentSimilarName(students, "bes");
// console.log(resultBe); true : student.ben exists

const fruits = ["mango", "apple", "grapes", "orange"];
