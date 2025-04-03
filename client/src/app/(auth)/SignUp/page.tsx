"use client";
import React, { useState } from 'react';
import SignUpForm from '@/components/SignUpForm';
import Link from 'next/link';

const SignUp = () => {
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleRegistrationSuccess = () => {
        setRegistrationSuccess(true);
        setErrorMessage(null);
    };

    const handleRegistrationError = (message: string) => {
        setErrorMessage(message);
        setRegistrationSuccess(false);
    };

    return (
        <div>
            <h1>Регистрация</h1>
            {registrationSuccess ? (
                <p>Регистрация прошла успешно! Теперь вы можете войти.</p>
            ) : (
                <>
                    {errorMessage && <div>{errorMessage}</div>}
                    <SignUpForm onSuccess={handleRegistrationSuccess} onError={handleRegistrationError} />
                    <Link href="/SignIn">Auth</Link>
                </>
            )}
        </div>
    );
};

export default SignUp;