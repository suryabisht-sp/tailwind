import { NextResponse } from "next/server";

// export function middleware(request) {
//   // new request too many redirection. now if login then dont
//   // if (request.nextUrl.pathname != "./login") {
//   //   return NextResponse.redirect(new URL("./login", request.url))
//   // }
//   // if accessing particular page then redirection
//   return NextResponse.redirect(new URL("./login", request.url))
// }

export function middleware(request) {
  
  //  {
  //       return NextResponse.redirect(new URL("/login", request.url))
  //   } 
}

export const config = {
  // matcher:["/subscription/:path*", "/userprofile", "/usersetting"]
}