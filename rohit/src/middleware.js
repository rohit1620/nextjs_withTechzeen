import { NextResponse } from "next/server";
 const isLoading=true;
export function middleware(request){
    if(!isLoading && request.nextUrl.pathname != '/contact'){
        return NextResponse.redirect(new URL('/contact',request.url))
        console.log("rohit kumar malav");
    }
  
    
}

// export const config ={
//     matcher:['/blog/:path*']
// }