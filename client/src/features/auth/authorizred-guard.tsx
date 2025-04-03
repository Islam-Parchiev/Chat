"use client";

import { getCookie } from "cookies-next/client";

export default function AuthorizedGuard({
    children,
}: {
    children: React.ReactNode;
}) {
    const jwt = getCookie('jwt');
    return (
        <>
            {jwt ? children : "NotAuthed2"}
            {/* {isAuth&&children} */}
        </>
    )
}