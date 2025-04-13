// "use client";  converts to client 
import fs from "fs/promises";

export default function Home() {
  console.log("hello");  //if client side it gets printed in browser , otherwise default is server side
  const data = fs.readFile(".gitignore");
  data.then(e => console.log(e.toString()));  //.then accepts a function
  return (
    <div>hi</div>
  )
}
//NODEJS default is server side rendering
//in server side components ,server or machine converts code to html first then sends to browser just the html
//in client side components, browser gets the code and then converts it to html,Code is bundled into JavaScript and sent to the browser.Great for interactive UI, like buttons, forms, animations, etc.

//NODE.JS provides full stack support , if we wanna use client side or server side.
//such functionalities like file system, database, etc. are not available in client side,coz those have to be not exposed to the client
//in server component we can right our backend logic just abover return statement , as it return statemtn it all will be converted to html and sent to server