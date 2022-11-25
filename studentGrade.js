/*
Challenge 1: Student Grade Generator (Toy Problem)
Write a function that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79,
 B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

*/

const studentMarks = 56

function checkStudentGrades(studentMarks) {
    //conditional statements
    if(studentMarks > 79) {
        return "A"
    } else if(studentMarks >= 60 && studentMarks <=79 ) {
        return "B"
    } else if(studentMarks <= 59 && studentMarks <= 49) {
        return "C"
    }else {
        return "enter a valid grade"
    }
} 

console.log(checkStudentGrades(studentMarks))


