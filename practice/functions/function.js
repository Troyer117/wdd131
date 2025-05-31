function getGrades(inputSelector) {
  const input = document.querySelector(inputSelector).value;
  const gradesArray = input.split(",");
  const cleanGrades = gradesArray
    .map((grade) => grade.trim().toUpperCase())
    .filter((grade) => grade);
  console.log("Cleaned Grades:", cleanGrades);
  return cleanGrades;
}
function lookupGrade(grade) {
  if (grade === "A") return 4;
  if (grade === "B") return 3;
  if (grade === "C") return 2;
  if (grade === "D") return 1;
  if (grade === "F") return 0;
  return 0;
}
function calculateGpa(grades) {
  const gradePoints = grades.map((grade) => lookupGrade(grade));
  const totalPoints = gradePoints.reduce((sum, point) => sum + point, 0);
  const gpa = totalPoints / gradePoints.length;
  return gpa.toFixed(2);
}
function outputGpa(gpa, selector) {
  const outputElement = document.querySelector(selector);
  outputElement.textContent = `${gpa}`;
}
function clickHandler() {
  const grades = getGrades("#grades");
  const gpa = calculateGpa(grades);
  outputGpa(gpa, "#output");
}
document.querySelector("#submitButton").addEventListener("click", clickHandler);