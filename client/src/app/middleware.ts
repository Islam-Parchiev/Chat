import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
// import {createRouteMatcher,clerkMiddleware} from '@clerk/nextjs/server'
// import { redirect } from 'next/navigation';

// const isProtectedRoute = createRouteMatcher('/profile');
// export default clerkMiddleware(async (auth,req)=> {
//     if(isProtectedRoute(req)) console.log('TestClerk',auth);
// })
// export const config = {
//     matcher: ['/:path*', '/profile'],
//   }
 
export default async function handler(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/profile')) {
    return NextResponse.rewrite(new URL('/SignIn', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/user')) {
    return NextResponse.rewrite(new URL('/SignUp', request.url))
  }
  console.log('middddd')
}