//route.js file tells us that we will be handling the API requests in here

import { NextResponse } from 'next/server'; 


//Post request pr ye chlega
//In post request we will be sending data to the server and the server will respond back too
export async function POST(request) {
    let data = await request.json();   //this is the data we got from the client request 
    console.log(data);

 return NextResponse.json({       //this is the response we are sending back to the client
   message: 'Hello from the API', data: 'yes'
 });
}