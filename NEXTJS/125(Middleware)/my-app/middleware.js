import { NextResponse } from "next/server";
//if u want access of request object before hand , before it reaches endpoint u can use middleware.


//yaha pr first parameter h /home iska mtlb vaha
export function middleware(request) {
  return NextResponse.redirect(new URL("/home", request.url)) // Redirect to /home , redirect is one of  a function of NextResponse
}   //redirect function is used to redirect the user to a different URL, rewrite is used to give user content of different URL without changing the URL in the address bar.

//matching paths below , means agar koi bhi path jo /about se start hota hai usko ye upr vala middleware apply hoga.
export const config = {
    matcher: '/about/:path*',
}        