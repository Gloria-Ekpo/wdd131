// arrays.js
const steps = ["one", "two", "three"];

// Function to create HTML for each step
const listTemplate = (step) => {
  return `<li>${step}</li>`;
};

// Use map to convert the list of steps to an array of HTML strings
const stepsHtml = steps.map(listTemplate);

// Set the innerHTML of the <ul> with id 'myList' to the HTML strings
document.querySelector("#myList").innerHTML = stepsHtml.join("");


//Declare an array of letter grades
const grades = ['A', 'B', 'A'];

// Step 2: Function to convert a letter grade to GPA points
function gradeToGpa(grade) {
  switch (grade) {
    case 'A':
      return 4;
    case 'B':
      return 3;
    case 'C':
      return 2;
    case 'D':
      return 1;
    case 'F':
      return 0;
    default:
      return null; 
  }
}

//Using map to convert the array of grades to GPA points
const gpaPoints = grades.map(gradeToGpa);

const totalGpa = gpaPoints.reduce((sum, current) => sum + current, 0);

const averageGpa = totalGpa / gpaPoints.length;

console.log(averageGpa);

