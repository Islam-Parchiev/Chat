"use client"
import { setCookie, getCookie } from 'cookies-next/client';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import React, { FormEvent, useState } from 'react';
interface Props {
    onSuccess: () => void;
    onError: (message: string) => void;
}
const SignInForm: React.FC<Props> = ({ onError, onSuccess }) => {
    const form = React.useRef<HTMLFormElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (form.current) {
            setIsLoading(true);
            const data = new FormData(form.current);
            const { email, password } = { password: data.get('password'), email: data.get('email') }
            console.log("signInFOrm 17", email, password);
            try {
                const response = await fetch('http://localhost:4000/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                })
                const data = await response.json();
                localStorage.setItem("jwt", data.token);
                setCookie("jwt", data.token);
                setCookie("authed", true);
                if (response.ok) {
                    onSuccess();
                    console.log('SignInForm 33', getCookie('jwt'));
                    console.log("Вот тут возвращается jwt token", data.token);
                } else {
                    onError(data.message || "Auth Error")
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (e: any) {
                onError(e.message || 'Произошла ошибка при auth');
            } finally {
                setIsLoading(false);
            }

        } else {
            return 'Error'
        }
        console.log(e);
    }
    return (
        <form ref={form} onSubmit={(e) => handleSubmit(e)}>
            <Input placeholder='E-mail' name='email' labelText="E-mail" />
            <Input placeholder='Password' name='password' labelText="Пароль" />
            <Button type="submit">{isLoading ? "Loading..." : "Send"}</Button>
        </form>
    );
};

export default SignInForm;