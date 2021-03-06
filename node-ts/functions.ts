//  functions are objects with logic all functions are therefore methods of the global object
let user = "George Baker"
function greet(person:string){
    return `Hello  ${person} `
}
console.log(greet(user))

// returning void
let user1 = "Ma Baker"
function greeter (name:string): void{
    console.log ('Hello  + " " + name') 
}
console.log(greet(user1))

// Union types -  null and void are good subtypes to use as optional params with the union type notated with the pipe symbol
// Default types -  if you do not want undefined to appear in the log, use a default type of empty string as in the middleName

// Function declaration Udemy Karthik
function studentName(firstName: string, middleName: string ="", lastName?: string | undefined | null ): void{
    console.log (`Hi my name is ${firstName} ${middleName} ${lastName}`)
}
studentName("Ram")
console.log(studentName)

studentName ("Ram", "Narayan")
console.log(studentName)

studentName("Ram", "R", "Narayan")
console.log(studentName)

studentName("Ram", "Narayan", "R")
console.log(studentName)

// Function Expression - Anonymous functions are called during runtime with ts they are strictly typed in compile time
let getTeacherTimeTable = function (subject:string, classNumber: number) {
    return `${subject} Teacher for the ${classNumber} Standard` 
}
console.log (getTeacherTimeTable('Maths', 7))

// Arrow or lambda functions, simplify syntax - implicit return

let getTeacherNameAndTimeTable = (name: string, subject:string, classNumber: number) =>
 `${name} is the ${subject} Teacher for the ${classNumber} Standard` 
console.log(getTeacherNameAndTimeTable('Radikha Bakshi', 'Maths', 7))

let getTeacherNames = (firstName:string, lastName: string) =>`${firstName} ${lastName}` 
console.log (getTeacherNames('Arthur', 'Chamraj'))

let addTwo = (num1:number, num2: number) : number => num1 + num2
console.log(addTwo(4,6))

// single param still needs the parenthesis but mixed type return with method possible 
// '244' returned as string - it does not spell out the number
let addNum = (num:number): string => (10 + num).toString()
console.log(addNum(234))

let returnNumber = (): number => 10
console.log(returnNumber())

// returning void
let returnVoid = (): void => 
console.log(`logs nothing`)

// type guard functions
function addTwoNumbers(num1:string|number, num2: string|number): string|number {
    if (typeof num1 === "string"){
        console.log("The first function parameter is a string ")
        return num1 + num2
    }
    if (typeof num1 === "number" && typeof num2 === "number"){
        console.log("Both parameters of the function are numbers")
        return num1 + num2
    }
     return num1.toString() + num2.toString()
 }
 console.log(addTwoNumbers(5,4))
 console.log(addTwoNumbers("four", "four"))
 