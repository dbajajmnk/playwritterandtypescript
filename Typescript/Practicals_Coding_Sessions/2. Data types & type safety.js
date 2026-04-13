//Primitive
/*
number
boolean
never
any
unknown
null
string
symbol
*/
var rollNo = 10;
var price = 10.5;
var isAdult = true;
var undefindTest;
var nullTest = null;
function getError() {
    throw new Error("Something went wrong");
}
var capableToDoAnything = 10;
capableToDoAnything = { name: "Kumar", age: 35 };
// console.log(capableToDoAnything.toUpperCase());
var youdont = 10;
youdont = { name: "Kumar", age: 35 };
console.log(typeof (youdont) == "string" ? youdont.toUpperCase() : "");
console.log(nullTest);
console.log(undefindTest);
var myName1 = "Deepak";
myName1 = 'Kumar';
var mySymbol = Symbol('id');
console.log(mySymbol);
getError();
//Custom
