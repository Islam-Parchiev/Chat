import type { NextApiRequest } from 'next';

export default async function auth(req:NextApiRequest) {
     if(req.method==='POST') {
        const {email,password}=req.body;
        console.log("auth.ts 6",email,password);
     }   
}