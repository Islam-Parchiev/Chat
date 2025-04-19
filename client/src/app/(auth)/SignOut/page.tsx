"use client";
import React from 'react';


const SignOut = () => {
    const out = () => {
        localStorage.removeItem("jwt");
    }
    return (
        <div>
            <h1>SignOut</h1>
            <button onClick={() => out()}>Out</button>
        </div>
    );
};

export default SignOut;