"use client";

import { useEffect, useState } from "react";

// import { Input } from "@/components/ui/input";
// import { CardList } from "@/components/CardList";
// import { Chat } from "@/components/Chat";

// import { getCookie } from "cookies-next/client";
async function checkAuth(): Promise<boolean> {
  try {
    // const cookieStore = getCookie();
    // const token = await getCookie('jwt');
    const token = localStorage.getItem("jwt");

    if (token) {
      console.log('testsql ', token);
      const response = await fetch(`http://localhost:4000/auth/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        method: 'GET',
        cache: 'no-store'  // disable caching
      });

      if (response.ok) {
        // const data = await response.json(); // Assuming the API returns a JSON response
        console.log("app 18 Authenticated");
        return true;
      } else {
        console.log("app 18 Error:", response.status, response.statusText);
        return false;
      }
    } else {
      console.log("No token found");
      return false;
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return false;
  }
}
export default function Home() {
  const [authed, setAuthed] = useState<boolean>(false);
  useEffect(() => {
    checkAuth().then(data => setAuthed(data))
  }, [])
  return (
    <div className="flex gap-5">
      {authed ? "Авторизован" : "Not authed"}
      Home
    </div>
  );
}
