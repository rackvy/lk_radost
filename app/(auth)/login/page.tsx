"use client";

import React, { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import style from './styles.module.css';
import Image from "next/image";


export default function AuthPage() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();


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
            if(data.error){
                setError(data.error);
                console.error(data.error);
            }
            if(data.hash){
                Cookies.set('uuid', data.hash);
                router.push('/dashboard');
            }
        } catch (error) {
            // Capture the error message to display to the user
            if(error instanceof Error){
                setError(error.message);
            }
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className={style.loginPage}>
            <div>
                <div className={style.loginPageLogo}>
                    <Image
                        src="https://backend-dolshik.shelikhov.me/uploads/radostnnnnn.png"
                        alt="Логотип ЖСК Радость"
                        width={169}
                        height={112}
                        priority={false}
                        unoptimized
                    />

                </div>

                {error && <div style={{ color: 'red' }}>{error}</div>}
                <form onSubmit={onSubmit}>
                    <label className={style.loginPageLabel}>
                        Введите мобильный телефон
                        <input type="text" name="PHONE" placeholder="+7 (___) ___ ____" className={style.loginPageInput}/>
                    </label>
                    <label className={style.loginPageLabel}>
                        Пароль
                        <input type="password" name="PASSWORD" className={style.loginPageInput}/>
                    </label>
                    <button type="submit" disabled={isLoading} className={style.loginPageButton}>
                        {isLoading ? 'Авторизация...' : 'Авторизоваться'}
                    </button>
                </form>
            </div>
        </div>
    )
}