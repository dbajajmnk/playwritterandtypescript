console.log("Hello ");
//console.log() prints a message to the browser console.
//This happens first because JavaScript reads the code from top to bottom.

setTimeout(() => {
    //setTimeout() is a built-in JavaScript function.
    // Its job is: wait for some time then run a function later
    // Inside setTimeout, you are passing an arrow function:
    // () => {   -> This means: “After the given delay, run the code inside this block.”
    // So this line does not print anything immediately. It only tells JavaScript: “Please run 
    // this function later.”


    console.log("World")
    //This line is inside the setTimeout function block.It means when the timeout finishes, print:
    //this does not happen immediately. It waits until the timer is complete.

}, 1000);
// This closes the setTimeout() call. The 1000 means 1000 milliseconds.
// 1000 milliseconds = 1 second So JavaScript is being told: wait 1 second then run: 
// console.log("World")JavaScript does not stop here for 1 second.
// It simply schedules this work for later and moves on to the next line.

console.log("End"); //This happens before "World" because setTimeout runs later.