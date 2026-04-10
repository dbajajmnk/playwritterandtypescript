let myName:string="Deepak";
let rollNo:number=10;
let isAdult:boolean = true;

const student:{name:string,rollNo:number}={
    name:"Deepak",
    rollNo:10
}

const names:string[] =["Deeapk","kumar","asd"] ;


function greet(name:string)
{
    console.log(name);
}

greet("Deeapk");
// greet(10);





console.log(myName);
console.log(isAdult);
console.log(rollNo);
/*************************** Types  in Typescript********************************/

//Union 
type User={
    readonly name:string,
    rollNo?:number
}

interface Student{
    name:string,
    rollNo:number
}
let checkUserApplicableVote : number|boolean|string|User = 12
checkUserApplicableVote=true
checkUserApplicableVote="Deepak";
//Type Alias


type Person={
    name:string,
    age:number
}

type Emp={
    empId:string,
    empDepartment:string
}

type companyEmp= Person& Emp;
const Kumar:User={name:"Kumar",rollNo:20};


const Deepak:User={name:"Kumar",rollNo:20};
const Ram:Student={name:"Kumar",rollNo:20};

const Syham:companyEmp={name:"Deepak",age:10,empDepartment:"Testing",empId:"10"}

let apiResponse : unknown =10;

if(typeof(apiResponse)=="string")
console.log(apiResponse.toUpperCase())
apiResponse="Deepak";

/**
 * How to Create variables in typescript ?
 * How to use different primitive and non primitive dataypes
 * 
 */



