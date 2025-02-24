function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

function sum(a, b, c = 3) {         //here c is the default value
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}


result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

// another way for using function
const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);


//THREE TYPE OF FUNTIONS:
function greet() {
    console.log("Hello!");
  }
  greet();


  const greet = () => {
    console.log("Hello!");
  };
  greet();
    

(function() {
    console.log("Hello from IIFE!");
  })();

  
(() => {
    console.log("Hello from Arrow IIFE!");
})();
  