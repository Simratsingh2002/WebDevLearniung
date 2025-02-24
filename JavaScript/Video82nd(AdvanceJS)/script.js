//IIFE
 (async function xyz() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(45);
      }, 100);
    });
  })().then(value => console.log(value));

  //Destructuring
  let[x,y,...rest]=[1,2,3,4,5,6,7]
  console.log(rest);

  const obj={a:1,b:2,c:3,d:4}
  const {a,b}=obj
  console.log(a,b)    //prints 1 2

  //SPREAD OPERATOR (...)
function sum(a,b,c) {
    return a+b+c
}  
const arr=[1,2,3]
console.log(sum(arr[0],arr[1],arr[2]));    //firstr ways
console.log(sum(...arr));                 //same things same output 6
const obj_Arr={...arr}      //{0:1,1;2,2:3}

//CONCEPT OF HOISTING.   If u are call a variable suppose in first line of code and it is defined from lines below that it still works if it has been formed using keyword var ,  not valid for let and const.  
// Suupose
// console.log(a)
// var a=1;
// It will still show a undefined on top coz a would justbbe defined , but value assigned is in line below