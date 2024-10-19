import { prisma } from "../db";

console.log("Hello, Workshop!");

/* Want to read more about JavaScript syntax? Check out https://www.w3schools.com/js/default.asp */

/* -------------------------------------------------------------------------- */
/*                                  VARIABLES                                 */
/* -------------------------------------------------------------------------- */

/* ----------------------------------- let ---------------------------------- */

// let x = "hello, world!";
// console.log(x);
// x = "X can be reassigned!";
// console.log(x);

/* ----------------------------------- var ---------------------------------- */

// var y = "hello, world 2!";
// console.log(y);
// y = "Y can be reassigned";
// console.log(y);

/* ---------------------------------- const --------------------------------- */

// const z = "hello, world 3!";
// console.log(z);
// z = "Z cannot be reassigned :("; // this will not work
// console.log(z);

/* -------------------------------------------------------------------------- */
/*                                  OPERATORS                                 */
/* -------------------------------------------------------------------------- */
/* Read more about the different equality operaors here 
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness */
/* -------------------------------- Equality -------------------------------- */

// @ts-ignore
// console.log(1 == "1"); //true

/* ----------------------------- Strict equality ---------------------------- */

// @ts-ignore
// console.log(1 === "1"); //false

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
/* Read more about functions in JavaScript at https://www.w3schools.com/js/js_function_definition.asp */
/* Read more about anonymous functions at https://www.javascripttutorial.net/javascript-anonymous-functions/ */

/* -------------------------- function declaration -------------------------- */

// function workshop1() {
//   console.log("This is a function");
// }

// workshop1();

/* ------------------- function defined with an expression ------------------ */

// const workshop2 = function () {
//   console.log("this is also a function");
// };

// workshop2();

// (function () {
//   console.log("This is an example of an anonymous function");
// })();

/* ------------------- arrow syntax for defining functions ------------------ */

// const workshop3 = () => {
//   console.log("this is also a function!!");
// };

// workshop3();

// (() => {
//   console.log("This is an example of an anonymous function with the arrow syntax");
// })();

/* -------------------------------------------------------------------------- */
/*                                ARRAY METHODS                               */
/* -------------------------------------------------------------------------- */
/* See the full list of array methods and read more about JavaScript Arrays here: 
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array */

/* ------------------------------ Map Function ------------------------------ */
/* See a more in depth overview of map here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */

// const arrayExample = [1, 2, 3, 4, 5, 6, 7];

// /* Equivalent with a for loop */
// const noMap: number[] = [];
// for (let i = 0; i < arrayExample.length; i++) {
//   noMap.push(arrayExample[i] + 1);
// }

// console.log(noMap);

// const withMap1 = arrayExample.map((x) => x + 1);

// console.log(withMap1);

// const mappingFunction = (x) => {
//   return x + 1;
// };

// const withMap2 = arrayExample.map(mappingFunction);

// console.log(withMap2);

/* ----------------------------- Filter Function ---------------------------- */
/* See a more in depth overview of filter here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */

/* Equivalent with a for loop */
// const noFilter: number[] = [];
// for (let i = 0; i < arrayExample.length; i++) {
//   if (arrayExample[i] % 2 === 0) {
//     noFilter.push(arrayExample[i]);
//   }
// }

// console.log(noFilter);

// const withFilter = arrayExample.filter((x) => x % 2 === 0);

// console.log(withFilter);

/* -------------------------------------------------------------------------- */
/*                                 TYPESCRIPT                                 */
/* -------------------------------------------------------------------------- */
/* Read more about TypeScript here https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html */
/* Read more about the TypeScript tsconfig compiler options here https://www.typescriptlang.org/tsconfig/ */

// let helloWorld = "hello, world!"; //type is inferred, IDE tools will show the type

// function returnAString(): string {
//   return "A String!!";
// }

// function returnAStringBroken(): string {
//   return 5; // the typescript compiler doesn't like that a number is being returned here when it expects a string
// }

/* Any means anything! */
// function returningAValue(value: any): any {
//   return value;
// }

// console.log(returningAValue("this is a string"));
// console.log(returningAValue(55));

// interface CustomObjectShape {
//   aValue: number;
//   anotherValue: string;
//   aThirdValue: boolean;
// }

// const object: CustomObjectShape = {
//   aValue: 1,
//   anotherValue: "A String!!",
//   aThirdValue: false,
// };

// console.log(object);

// const badObject: CustomObjectShape = {
//   aValue: 2,
//   notRealField: "this field doesn't exist!!"
// };

// type boolOrNum = boolean | number;

// function returnBoolOrNum(value: boolOrNum): boolOrNum {
//   return value;
// }

// console.log(returnBoolOrNum(true));
// console.log(returnBoolOrNum(55));
//console.log(returnBoolOrNum("Hello, World!")); // doesn't match the union type declared above

/* -------------------------------------------------------------------------- */
/*                          WORKING WITH THE DATABASE                         */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Async and Await ---------------------------- */
/* Learn more about async and await here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function */

// const asyncExample = async (): Promise<string> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello, Async!");
//       }, 2000); // 2 seconds
//     });
// }

// const awaitExample = async () => {
//   console.log("Before awaiting asyncExample()")
//   const awaitedString = await asyncExample(); // the code "awaits" asyncExample and will not proceed until the Promise is resolved
//   console.log(awaitedString);
// }

// awaitExample();

// const brokenAsyncExample = () => {
//   const awaitedString = await asyncExample(); // await must be within an async function, synchronous functions can't mix with asynchronous stuff
//   console.log(awaitedString);
// }

/* ------------------------------ Database CRUD ----------------------------- */
/* For more information on the basic syntax of CRUD operations with Prisma check here 
   https://www.prisma.io/docs/orm/prisma-client/queries/crud */

// const findMany = async () => {
//   const courses = await prisma.course.findMany({
//     where: {
//       subjectCode: {
//         contains: "COMP",
//       },
//     },
//   });

//   courses.forEach((course) => {
//     console.log(course);
//   });
// };

// findMany();

// const createCourses = async () => {
//   const course = await prisma.course.create({
//     data: {
//       subjectCode: "HTUN",
//       courseCode: "1001",
//       title: "Hack the Tunnels",
//       shortTitle: "Hack the Tunnels",
//       description: "An introductory crash course on JavaScript and Typescript"
//     }
//   });

//   console.log(course)
// }

//create();

// const updateCourses = async () => {
//   await prisma.course.updateMany({
//     where: {
//       subjectCode: {
//         contains: "HTUN",
//       },
//     },
//     data: {
//       description: "A new description!"
//     }
//   })

//   const courses = await prisma.course.findMany({
//     where: {
//       subjectCode: {
//         contains: "HTUN",
//       },
//     },
//   });

//   courses.forEach((course) => {
//     console.log(course);
//   });
// }

//update()

// const deleteCourses = async () => {
//   await prisma.course.deleteMany({
//     where: {
//       subjectCode: {
//         contains: "HTUN",
//       },
//     },
//   })

//   const courses = await prisma.course.findMany({
//     where: {
//       subjectCode: {
//         contains: "HTUN",
//       },
//     },
//   });

//   // prints nothing, since the courses are no longer there
//   courses.forEach((course) => {
//     console.log(course);
//   });
// }

//deleteCourses();