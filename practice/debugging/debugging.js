const PI = 3.14;
let radius = 3;
let area = 0;
function circleArea(radius) {
    const area = radius * PI;
    return area;
}
area = circleArea(3);
console.log(area);
area = circleArea(4);
console.log(area);