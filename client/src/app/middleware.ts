import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// import type { NextRequest } from 'next/server'
// import { NextResponse } from 'next/server'
// // import {createRouteMatcher,clerkMiddleware} from '@clerk/nextjs/server'
// // import { redirect } from 'next/navigation';

// // const isProtectedRoute = createRouteMatcher('/profile');
// // export default clerkMiddleware(async (auth,req)=> {
// //     if(isProtectedRoute(req)) console.log('TestClerk',auth);
// // })
// // export const config = {
// //     matcher: ['/:path*', '/profile'],
// //   }
 
// export default async function handler(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/profile')) {
//     return NextResponse.rewrite(new URL('/SignIn', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/user')) {
//     return NextResponse.rewrite(new URL('/SignUp', request.url))
//   }
//   console.log('middddd')
// }
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// // import { getToken } from "next-auth/jwt"; // Если используете NextAuth.js

// // Массив маршрутов, которые требуют аутентификации
// const protectedRoutes = ["/chat"];  // Замените на ваши маршруты

// export async function middleware(req: NextRequest) {
//   console.log("midd")
//   const pathname = req.nextUrl.pathname;

//   // Проверяем, требуется ли аутентификация для текущего маршрута
//   const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

//   if (isProtectedRoute) {
//     const token = false // Проверяем наличие токена аутентификации

//     if (token===false) {
//       // Если токен отсутствует, перенаправляем на страницу входа
//       const url = new URL(`/SignIn`, req.url); // Добавляем callbackUrl для возврата после входа
//       return NextResponse.redirect(url);
//     }
//     //Если токен есть, позволяем пользователю пройти дальше
//     return NextResponse.next();
//   }
//   //Если маршрут не требует авторизации, позволяем пользователю пройти дальше
//   return NextResponse.next();
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/chat","/chat/:path*"], // Замените на ваши маршруты
// };


// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   console.log("test65");
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/chat',
// }

 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/chat')) {
    console.log("testMi");
    return NextResponse.rewrite(new URL('/', request.url))
  }
  console.log("testMi2");
  // if (request.nextUrl.pathname.startsWith('/chat')) {
  //   return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  // }
}
export const config = {
  matcher: '/chat/:path*', // Применяется к /chat и всем его подмаршрутам
  // matcher: ['/chat/:path*', '/some-other-route/:path*'], // Можно указать несколько маршрутов
};