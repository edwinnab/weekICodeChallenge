/*
Challenge 3: Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits.
Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. */

const prompt=require("prompt-sync")({sigint:true}); 

const salary = Number(prompt("Enter your gross salary: "))
const benefits = Number(prompt("Enter the total amount of benefits you get: "))
const grossSalary = salary + benefits

function calculateNetSalary(grossSalary) {
    //deduct NHIF
    const NHIF = (1.7 * grossSalary) /100
    //deduct NSSF
    const NSSF = (1.5 * grossSalary) /100
    //deduct payee
    const payee = (16 * grossSalary) / 100
    const totalDeductions = NHIF + NSSF + payee
    const netPay = grossSalary - totalDeductions
    return netPay
}

console.log(calculateNetSalary(grossSalary))