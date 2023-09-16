//This is a practice from the Professional JS book I got and also from Eloquent JS, this is a practice lesson for me to write a Pythagorean converter. 

//define two variables to store user input:


let variable1 = prompt("Please enter your first set of coordinates: ");
let variable2 = prompt("Now enter your second set of coordinates: "); 


//time to define the math and logic between the two variables 

let calculateResult = Math.sqrt((variable1**2) + (variable2**2));
let finalResult = calculateResult.toFixed(4);

//Output the result to the use. 
alert("Your answer is: " + finalResult);

