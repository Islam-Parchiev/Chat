"use client";
import React, { useState } from 'react';
import SignInForm from '@/components/SignInForm';
import Link from 'next/link';

const SignIn = () => {
    const [authSuccess, setAuthSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleAuthSuccess = () => {
        setAuthSuccess(true);
        setErrorMessage(null);
    };

    const handleAuthError = (message: string) => {
        setErrorMessage(message);
        setAuthSuccess(false);
    };

    return (
        <div>
            <h1>Авторизация</h1>
            {authSuccess ? (
                <p>Авторизация прошла успешно!</p>
            ) : (
                <>
                    {errorMessage && <div>{errorMessage}</div>}
                    <SignInForm onSuccess={handleAuthSuccess} onError={handleAuthError} />
                    <Link href="/SignUp">Reg</Link>
                </>
            )}
        </div>
    );
};

export default SignIn;