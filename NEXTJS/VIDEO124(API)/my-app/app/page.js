"use client";
const handleClick = async () => {
  //above line means in res store the response, and also send the data to the server in application/json format
  const res=await fetch('api',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:'Simrat'})})
  let a= await res.json()
  console.log(a);
};
export default function Home() {
  return (
    <div>
      <h1>Api in nextjs demo</h1>
      <button className="bg-amber-700" onClick={handleClick}>Click me</button>
    </div>
  );
}
