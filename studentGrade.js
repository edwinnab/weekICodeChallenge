/*
Challenge 1: Student Grade Generator (Toy Problem)
Write a function that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79,
 B - 60 to 79, 
 C -  59 to 49, 
 D - 40 to 49, 
 E - less 40.

https://www.geeksforgeeks.org/javascript-is-showing-reference-error-prompt-is-not-defined/

*/

const prompt=require("prompt-sync")({sigint:true}); 

const studentMarks = Number(prompt("Enter a value: "))

function checkStudentGrades(studentMarks) {
    //conditional statements
    if(studentMarks >= 79 && studentMarks <= 100) {
        return "A"
    } else if(studentMarks >= 60 && studentMarks < 79 ) {
        return "B"
    } else if(studentMarks >= 49 && studentMarks <= 59) {
        return "C"
    }else if(studentMarks >= 40 && studentMarks < 49) {
        return "D"
    } else if(studentMarks < 40) {
        return "E"
    } else {
        return "Invalid grade"
    }
} 

console.log(checkStudentGrades(studentMarks))


