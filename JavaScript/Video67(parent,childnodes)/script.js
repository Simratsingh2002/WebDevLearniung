console.log("Hello world")
let x=document.body.childNodes   //this will give array of all childs(including text,comment and then element  too) of tag body in document 
let y=x[0]    //give access to first child, this would be empty text as in our script as container tag starts there is empty tag then there is box class, so box class would be [1]
x[1].style.color="red"    //this is how we can change colours
document.body.firstElementChild   //this would ignore empty text childs and will give first child which is a element.
document.body.lastElementChild
document.body.firstElementChild.childNodes 
document.body.firstElementChild.children  //this only gives elements
document.body.firstElementChild.parentElement   //gives parent element
document.body.firstElementChild.children[0].nextElementSibling    //gives access to sibling of a selected one her eit will be Box2

document.body.children[1].rows   //this is how we accesed the rows
