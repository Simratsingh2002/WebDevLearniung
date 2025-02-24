let button=document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("dblclick",()=>{         //event happened on button ,which was double click then function executed
    document.querySelector(".box").innerHTML="<b>Yayy you were clicked</b> Enjoy your click!"
})
button.addEventListener("contextmenu", ()=>{      //context menu means right click
    alert("Dont hack us by Right click Please")
})
document.addEventListener("keydown", (e)=>{  //this would take paramter as what key entered , then it would give what key it was and details
    console.log(e, e.key, e.keyCode)
})