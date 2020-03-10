const array = [80, 80, 50]; 
let k = 0

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(array));

function calculateGrade(marks) {
  let isi = calculateAverage(marks)

    if (isi >= 90) return "A"
      else if (isi >= 80) return "B"
      else if (isi >= 70) return "C"
      else if (isi >= 60) return "D"
      else return " = F";
    }


function calculateAverage(array) {
  let sum = 0
    for (let i=0; i<array.length; i++){
      sum = (sum +array[i]) / array.length
      return sum}
    }      
/*
Instructions:
Create 2 functions, A and G.
A receives an array of integers as an argument,
calculates the average value of the array, and returns
a grade based on that average value/score.
G receives an integer and returns a grade based on that integer.
Hint:
Call G inside of A
Input: [80, 80, 50]
Output: C
Input: [90, 90, 85, 72]
Output: B
*/


//ketika ada sebuah function menjadi parameter, itu namanya callback function