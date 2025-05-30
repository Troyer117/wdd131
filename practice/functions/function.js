function getGrades(inputSelector) {
  const input = document.querySelector(inputSelector).value;
  return input
    .split(',')
    .map(grade => grade.trim().toUpperCase())
    .filter(grade => grade);
}

function lookupGrade(grade) {
  if (grade === "A") return 4.0;
  else if (grade === "B") return 3.0;
  else if (grade === "C") return 2.0;
  else if (grade === "D") return 1.0;
  else if (grade === "F") return 0.0;
  else return null;
}

function calculateGpa(grades) {
  const gpaPoints = grades.map(lookupGrade);

  if (gpaPoints.includes(null)) {
    return "Invalid grade detected.";
  }

  const total = gpaPoints.reduce((sum, point) => sum + point, 0);
  const gpa = total / gpaPoints.length;
  return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  document.querySelector(selector).textContent = `GPA: ${gpa}`;
}

function clickHandler() {
  const grades = getGrades("#grades");
  const gpa = calculateGpa(grades);
  outputGpa(gpa, "#output");
}

document
  .querySelector("#submitButton")
  .addEventListener("click", clickHandler);