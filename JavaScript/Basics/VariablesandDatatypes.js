var name="Deepak";
var age=22;
var isStudent=true;
let price =10.5;
let total;
let city='New York';
let state=null;
let bigInt=9007199254740991n;
let symbol=Symbol('mySymbol');

console.log(name); // Output: Deepak
console.log(age);
console.log(isStudent);
console.log(price);
console.log(total);
console.log(city);
console.log(state);
console.log(bigInt);
console.log(symbol);

/*Primitive Data Types
number, string, boolean, undefined, null, bigint, symbol
*/




/**No Primitive Data Types (User Defined)
 * 
 * Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet
*/
let employee={
    name:"Deepak",
    age:22,
    position:"Software Engineer"
};
console.log(employee.name); // Output: Deepak\\\\
let numbers=[1,2,3,4,5];
console.log(numbers[0]); // Output: 1   
function greet(){
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!
let currentDate=new Date();
console.log(currentDate);
let regex=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
let email="deepak@gmail.com"
console.log(regex.test(email)); // Output: true
let map=new Map();
map.set("name","Deepak");
map.set("age",22);
console.log(map.get("name"));

let set=new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set.has(2)); // Output: true

let weakMap=new WeakMap();
let obj={};
weakMap.set(obj,"This is a weak map");
console.log(weakMap.get(obj)); // Output: This is a weak map
let weakSet=new WeakSet();
let obj1={};
weakSet.add(obj1);
console.log(weakSet.has(obj1)); // Output: true