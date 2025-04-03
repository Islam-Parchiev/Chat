"use client";

import { instance } from "@/api/instance";
import { useState } from "react";

export default function Profile() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [profile, setProfile] = useState<any>(null);
    const getProfile = async () => {
        const data = await instance.get("auth/profile");
        console.log(data.data);
    }
    return <button onClick={() => getProfile()}>getPRof</button>
}
