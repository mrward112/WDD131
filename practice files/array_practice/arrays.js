//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`//the html string made from step
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML 


const grades = ['A', 'B', 'A'];

function convertGrade(grade) {
    let points = 0;
    if (grade === 'A') {
        points = 4;
    }
    else if (grade === 'B') {
        points = 3;
    } 

    return points;
}

const gradePoints = grades.map(convertGrade);
console.log("GPA points " + gradePoints);


const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

document.addEventListener("DOMContentLoaded", () => {
  const myList = document.getElementById("myList");
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  items.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    myList.appendChild(listItem);
  });
});