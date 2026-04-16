// //Assignment 1:
// type User = {
//   name: string;
//   age: number;
//   email?: string;
// };

// const user1: User  = {
//   name: "Kumar",
//   age: 30
// };

// const user2: User  = {
//   name: "Raju",
//   age: 28,
//   email: "kumarref24@gmail.com"
// };

// //Assignment 2:
// function formatValue(value: number | string): string {
//   return `Formatted Output: ${value}`;
// }

// console.log(formatValue(100));
// console.log(formatValue("Hello"));

// // Assignment 3
// type Product = {
//   id: number;
//   name: string;
//   price: number;
// };

// const product1: Product = {
//   id: 1,
//   name: "ApplePhone",
//   price: 1000
// };

// // Assignment 4
// type Admin = {
//   role: "admin";
// };

// type Customer = {
//   role: "customer";
// };

// type Person = {
//   name: string;
//   age: number;
// };

// type UserRole = Admin | Customer;
// type FullUser = Person & UserRole;

// const userA: FullUser = {
//   name: "Kumar",
//   age: 30,
//   role: "admin"
// };

// const userB: FullUser = {
//   name: "Raju",
//   age: 25,
//   role: "customer"
// };


function additionFunction(a:number, b:number):number
{
    return a + b;
}

let num1 = 5;
let num2 = 10;
let sum = additionFunction(num1, num2);
console.log("Sum of given numbers is :", sum);


