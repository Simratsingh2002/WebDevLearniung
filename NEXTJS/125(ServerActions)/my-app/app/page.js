"use client";
//server actions can be used to handle form submissions , no need to create a separate api route for it.
import { submitAction } from "@/actions/form";
import { useRef } from "react";


export default function Home() {
  let ref=useRef();
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white'> 
      {/* action basically means form submit hoke data kaha jaaye , , basically post request is generateed */}
      {/* htmlFor is for of html in forms Purpose: it “links” the label to the input whose id matches */}
      {/* By passing the reference to your submitAction function, you’re telling Next.js: “Please treat this function as if it were a server route. When the user submits the form, serialize the form data and send it to that function.” */}
      <form ref={ref} action={(e)=>{submitAction(e); 
        ref.current.reset()}} >  
        <div >
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black mx-4" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-black mx-4" type="text" />
        </div>
        <div>

        <button className="border border-white px-3">Submit</button>
        </div>

      </form>
    </div>
    
  );
}
