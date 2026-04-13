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
void
bigInt
*/
let rollNo:number = 10;
let price:number = 10.5;
let isAdult:boolean =true;

let undefindTest;
let nullTest=null;
let bigIntTest:BigInt=10n;



function getError():never{
    throw new Error("Something went wrong");
}

function print():void{
    console.log("Hello World");
}

function sum(number1:number,number2:number):number
{
    return number1+number2;
}

const result :number= sum(10,20);

const nevertest:string = getError();
const voidTest =print();
let capableToDoAnything:any = 10;

capableToDoAnything={name:"Kumar",age:35};

// console.log(capableToDoAnything.toUpperCase());

let youdont:unknown = 10;

youdont={name:"Kumar",age:35};

console.log(typeof(youdont)=="string"?youdont.toUpperCase():"");

console.log(nullTest);
console.log(undefindTest);
let myName1= "Deepak";
myName1='Kumar';
let mySymbol = Symbol('id');

console.log(mySymbol);
getError();
print();

//Custom
/**
 * Array
 * Enum
 * Object
 * Union Literal
 * type inference
 * tuple
 */

type User={
    name:string,
    age:number
}

let names:string[]=["Deepak","Kumar"];
let users:User[]=[{name:"Deepak",age:10}];
type Status = "Intiated"|"Inprogess"|"Error"|"Success"
let testLiteralUnion:Status="Error";
let testLiteralUnion2:Status="Inprogess";
console.log(testLiteralUnion);

enum apiStatus{
    Intiated,
    Inprogess,
    Error,
    Success
}

const myInfo:[string,number]=["Deepak",10];

console.log("My Info",myInfo);




console.log(apiStatus.Inprogess);




let myFavouriteColor : apiStatus=apiStatus.Error;