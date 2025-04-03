"use client";
import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';

interface Props {
    onSuccess: () => void;
    onError: (message: string) => void;
}

const SignUpForm: React.FC<Props> = ({ onSuccess, onError }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:4000/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                onSuccess();
            } else {
                onError(data.message || 'Ошибка регистрации');
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            onError(error.message || 'Произошла ошибка при регистрации');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Input
                    labelText="Имя"
                    type="text"
                    id="name"
                    value={name}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(e: any) => setName(e.target.value)} />
            </div>
            <div>

                <Input
                    labelText="Email:"
                    type="email"
                    id="email"
                    value={email}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(e: any) => setEmail(e.target.value)} />
            </div>
            <div>
                <Input
                    labelText="Пароль:"
                    type="password"
                    id="password"
                    value={password}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(e: any) => setPassword(e.target.value)} />
            </div>
            <Button type="submit" disabled={isLoading}>
                {isLoading ? "Регистрация..." : "Зарегистрироваться"}
            </Button>
        </form>
    );
};

export default SignUpForm;