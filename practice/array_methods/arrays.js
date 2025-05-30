const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();

const grades = ['A', 'B', 'A'];
function convertgradestogpa(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    }
    else if (grade === 'B') {
        points = 3;
    }
    return points;
}
const gpa = grades.map(convertgradestogpa);
console.log(gpa);
const pointsTotal = gpa.reduce(function (total, item) {
  return total + item;
});
const gradegpa = pointsTotal / gpa.length;
console.log(gradegpa);
const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const smallWords = fruit.filter(function (word) {
  return word.length < 6;
});
console.log(smallWords);
const numbersArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbersArray.indexOf(luckyNumber);
console.log(luckyIndex);