public class ConditionalLogic {
    public static void main(String [] args)
    {
       
        boolean isAdult = false;
        boolean hasVoterID = true;
        if(isAdult)
        {
            System.out.println("You are eligible to vote");
            if(hasVoterID)
            {
                System.out.println("You have a valid voter ID");
                
            }
            else
            {
                System.out.println("You do not have a valid voter ID");
            }
        }
        else
        {
            System.out.println("You are not eligible to vote");

        }

    int studentScore = 85;
    if(studentScore >= 90){
        System.out.println("Grade: A");
    }
    else if(studentScore >= 80){
        System.out.println("Grade: B");
    }
    else if(studentScore >= 70){
        System.out.println("Grade: C");
    }
    else if(studentScore >= 60){
        System.out.println("Grade: D");
    }
    else{
        System.out.println("Grade: F");
    }
    int isDayOfWeek = 3;

    switch (isDayOfWeek) {
        case 1:
            System.out.println("Monday");
            break;
        case 2:
            System.out.println("Tuesday");
            break;
        case 3:
            System.out.println("Wednesday");
            break;
        case 4:
            System.out.println("Thursday");
            break;
        case 5:
            System.out.println("Friday");
            break;
        case 6:
            System.out.println("Saturday");
            break;
        case 7:
            System.out.println("Sunday");
            break;
        default:
           System.out.println("Invalid day of the week");
            break;
    }
      // If 
      // if else
      // nested if else 
      // else if ladder
      //Switch case

 boolean moneyInWallet = true;
 boolean isfamilyReady = false;
//Logical Operators
 //AND operator && 
 // true && true = true
 // true && false = false
// false && true = false
// false && false = false
 if(moneyInWallet && isfamilyReady){
    System.out.println("You can go to the movies");     
 }
 else{
    System.out.println("Watch Movies at Home");
 }

 //OR operator ||
 // true || true = true 
 // true || false = true
// false || true = true
// false || false = false
 if(moneyInWallet || isfamilyReady){    
    System.out.println("You can go to the movies");
 }
 else{
    System.out.println("Watch Movies at Home");
 }
//NOT operator !
// !true = false
// !false = true    
    if(!moneyInWallet){
        System.out.println("You cannot go to the movies");
    }
    else{
        System.out.println("You can go to the movies");     
        }

//Relational Operators
// > greater than
// < less than
//>= greater than or equal to
//<= less than or equal to      
//==    equal to
//!=    not equal to

//Examples:
//Find the largest of three numbers
int num1 = 10;
int num2 = 20;
//Greater than
if(num1 > num2){
    System.out.println("num1 is greater than num2");    
}
else{
    System.out.println("num2 is greater than num1");
}
//Greater than or equal to
if(num1 >=num2){
    System.out.println("num1 is greater than or equal to num2");    
}
else{
    System.out.println("num2 is greater than or equal to num1");
}
//Less than
if(num1 < num2){
    System.out.println("num1 is less than or equal to num2");    
}
else{
    System.out.println("num2 is less than or equal to num1");
}
//Less than or equal to
if(num1 <= num2){
    System.out.println("num1 is less than or equal to num2");    
}
else{
    System.out.println("num2 is less than or equal to num1");
}
//Equal to
if(num1 == num2){
    System.out.println("num1 is equal to num2");    
}
else{
    System.out.println("num2 is not equal to num1");
}

if(num1 != num2){
    System.out.println("num1 is not equal to num2");    
}
else{
    System.out.println("num2 is equal to num1");
}
//Practice Exercise 1 age eligibility condition
int age1= 20;
int age2= 30;

if(age1==age2){
    System.out.println("allowed");
}
else {

    System.out.println("reject");

}   


    
//Practice Exercise 2 Nested login validation

boolean uservalid = true;
boolean passwordvalid= true;

if(uservalid) {

    System.out.println("Login successful");
    if(passwordvalid) {
    
    System.out.println("Password successful");
    }

else {
    System.out.println("Login failed");
}     

}

// Practice Exercise 3: Switch for roles

String role = "Admin";

    switch (role) {
        case "Admin":
            System.out.println("Admin access");
            break;
        case "User":
            System.out.println("User access");
            break;
        case "Guest":
            System.out.println("Guest access");
            break;
  
        default:
           System.out.println("access denied");
            break;

    }


// Practice Exercise 4: Validate response conditions

int statuscode = 20;

if(statuscode == 20){

System.out.println("Response successful");
}
else {
System.out.println("Response failed");
}

//Mini Assignmen

//login condition
boolean successful = true;

if (successful) {
    System.out.println("login passed");
}
else {
    System.out.println("loginfailed");
}

//retry condition
int retries = 2;

if (retries <= 2) {
    System.out.println("retry allowed");
}
else {
    System.out.println("retry limit reached");
}
}
}