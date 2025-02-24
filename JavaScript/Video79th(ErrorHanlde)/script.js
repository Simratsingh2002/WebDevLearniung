let a =prompt("Enter first number");
let b=prompt("Enter your second nu,ber");
if (isNaN(a)||isNaN(b)) {     //it is checking if they can be treated as integhere?
    throw SyntaxError("Sorry this aint allowed")     //u can throw different types of error.
 }
 let sum= parseInt(a)+parseInt(b)    //converting to int type
 
 try {
    console.log("sum is "+sum*x)
 } catch (error) {
    console.log("error a gya babe")
 }
 ///WHY FINALLY KEYWORD IS USED.TO RUN THE CODE IN FUNCTION MAINLY , AS SUPPOSE TRY OR CATCH ARE RETURNING SOMETHING , AS SOMETHING IS RETURNED FUNCTION STOPS WORKING BELOW THAT , BUT U STILL WANT A CODE EXECUTED , THEN WE USE FINLLY KEYWORD.
 (() => {
    let a = prompt("Enter first number");
    let b = prompt("Enter your second number");
    let sum = parseInt(a) + parseInt(b); // converting to int type
  
    try {
      console.log("sum is " + sum*x);
    } catch (error) {
      console.log("error a gya babe");
    } finally {
      console.log("finally used");
    }
  })();
  