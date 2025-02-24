console.log("Harry")

// let boxes = document.getElementsByClassName("box")    accessing elementS using class name 
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"   accessing element through Id

// document.querySelector(".box").style.backgroundColor = "green";   it will just access the first .box it will find , in query we havre to go by css properties not js properties   
console.log(document.querySelectorAll(".box"))   //this gives a list full of html nodes

document.querySelectorAll(".box").forEach(e =>{      //for loop applied to each element in list to make colour green
    e.style.backgroundColor = "green";
    e.matches("#redbox")       //this property helps to check if it matches the css property by css selector.
    e.closest(".container")     //which is the closest elemtn to this element which contains this csss
}) 
document.querySelectorAll(".body").contains(document.querySelector(".container"))    //contains property tells it a contins b inside it
