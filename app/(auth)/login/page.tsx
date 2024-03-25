"use client";

import React, { useState, FormEvent } from 'react';
import { setCookie } from "cookies-next";

export default function AuthPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError(null); // Clear previous errors when a new request starts

        //https://backend-dolshik.shelikhov.me/api/user/auth?PHONE='+phone.value+'&PASSWORD='+password.value
        try {
            const formData = new FormData(event.currentTarget);
            const response = await fetch('https://backend-dolshik.shelikhov.me/api/user/auth', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to submit the data. Please try again.');
            }

            // Handle response if necessary
            const data = await response.json();
            if(data.hash){
                setCookie('uuid', data.hash, { path: '/', maxAge: 60 * 6 * 24 });
                window.location.href = '/dashboard';
            }
        } catch (error) {
            // Capture the error message to display to the user
            setError(error.message);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form onSubmit={onSubmit}>
                <input type="text" name="PHONE" />
                <input type="password" name="PASSWORD" />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Авторизация...' : 'Авторизоваться'}
                </button>
            </form>
        </div>
    )
}