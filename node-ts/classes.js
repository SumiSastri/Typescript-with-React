"use strict";
// classes are special types of functions with the class key word
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
console.log(Person, "logs class Person we see it is a function");
var p1 = new Person;
console.log(typeof Person);
// functions are hoisted you can call the function before it is declared
employee();
function employee() { console.log("logs greeting to employee function Hi Sam before hoisted"); }
employee();
// classes can not be called before they are declared
// on compile it will throw the error Block-scoped variable 't1' used before its declaration.
//  uncomment this console log to demonstrate
// console.log(t1) 
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
var t1 = new Teacher;
console.log(t1, "logs class Teacher as a function");
// the class body can only contain methods not properties
// adding a method to a class follows prototypal inheritance of objects and will log as true
var Greet = /** @class */ (function () {
    function Greet() {
    }
    Greet.prototype.greetTeacher = function () { };
    return Greet;
}());
var g1 = new Greet;
console.log(g1.greetTeacher === Greet.prototype.greetTeacher);
// Greet.call()
// Greet.bind()
// Greet.apply()
