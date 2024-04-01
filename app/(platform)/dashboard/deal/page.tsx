'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
//import {cookies} from "next/headers";
import { SendHorizontal } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button"
import {redirect} from "next/navigation";
import Cookies from 'js-cookie';
import { useRouter, useParams } from 'next/navigation'
import { UserInfo, Catalog } from '@/app/types';
import style from './styles.module.css';





const DeailPage: React.FC = () => {
    //const { dealId } = useParams();
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused(true);
        // Скрыть навигацию при фокусе на инпуте
        const navbar = document.getElementById('js-navbar');
        const chatContainer = document.getElementById('js-chatRoomBody');
        if (navbar) {
            //navbar.style.display = 'none';
        }
        if (chatContainer) {
            //chatContainer.style.paddingBottom = '2px';
        }
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
        // Показать навигацию после потери фокуса
        const navbar = document.getElementById('js-navbar');
        const chatContainer = document.getElementById('js-chatRoomBody');
        if (navbar) {
            //navbar.style.display = 'flex'; // Или убрать класс, добавленный для скрытия
        }
        if (chatContainer) {
           //chatContainer.style.paddingBottom = '96px';
        }

    };

    useEffect(() => {
        const headerName = document.querySelector('.header__name') as HTMLElement;
        if (headerName) {
            headerName.style.display = 'none';
        }
        const headerStoriesPrw = document.querySelector('.header__stories_prw') as HTMLElement;
        if (headerStoriesPrw) {
            headerStoriesPrw.style.display = 'none';
        }
        const navBar = document.querySelector('#js-navbar') as HTMLElement;
        if (navBar) {
            navBar.classList.add('hideNavBar');
        }
        const main = document.querySelector('main.main') as HTMLElement;
        if (main) {
            main.classList.add('mainInChatRoom');
        }
    }, []);

    return (
        <div className={style.chatRoomBody} id="js-chatRoomBody">
            <div className={style.chatRoomBodyTitle}>
                <h1>Сделка ОД 1/1234</h1>
                <span className={style.chatRoomBodyStatus}>Подписание договора</span>
            </div>
            <div className={style.chatRoomMasseges}>
                <div className={style.messageInfo}>
                    <div className={style.messageDateTime}>
                        <span>08.03.2024</span>
                        <span>15:45</span>
                    </div>
                    <div className={style.messageInfoTitle}>Изменение статуса сделки</div>
                    <div className={style.messageInfoText}>Бронирование квартиры №123</div>
                </div>
                <div className={style.messageInfo}>
                    <div className={style.messageDateTime}>
                        <span>08.03.2024</span>
                        <span>16:00</span>
                    </div>
                    <div className={style.messageInfoTitle}>Изменение статуса сделки</div>
                    <div className={style.messageInfoText}>Подтверждение брони</div>
                </div>
                <div className={style.messageInfo}>
                    <div className={style.messageDateTime}>
                        <span>15.03.2024</span>
                        <span>10:45</span>
                    </div>
                    <div className={style.messageInfoTitle}>Изменение статуса сделки</div>
                    <div className={style.messageInfoText}>Запросить документы</div>
                </div>
                <div className={style.messageAlert}>
                    <div className={style.messageDateTime}>
                        <span>15.03.2024</span>
                        <span>10:45</span>
                    </div>
                    <div className={style.messageAlertText}>Необходимо отправить скан Паспорта, ИНН и СНИЛС</div>
                    <Button>Прикрепить документы</Button>
                </div>
                <div className={style.messageInfo}>
                    <div className={style.messageDateTime}>
                        <span>25.03.2024</span>
                        <span>11:27</span>
                    </div>
                    <div className={style.messageInfoTitle}>Изменение статуса сделки</div>
                    <div className={style.messageInfoText}>Договор подписан</div>
                </div>
                <div className={style.messageInfo}>
                    <div className={style.messageDateTime}>
                        <span>28.03.2024</span>
                        <span>12:01</span>
                    </div>
                    <div className={style.messageInfoTitle}>Изменение статуса сделки</div>
                    <div className={style.messageInfoText}>Явиться на подписание договора</div>
                </div>
                <div className={style.messageAlert}>
                    <div className={style.messageDateTime}>
                        <span>28.03.2024</span>
                        <span>15:10</span>
                    </div>
                    <div className={style.messageAlertText}>Необходимо внести паевый платеж 5 250 ₽ до 12.03.2024</div>
                    <Button>Оплатить</Button>
                </div>
            </div>
            <div className={style.chatInput}>
                <input
                    type="text"
                    name="message"
                    className={style.inputMessage}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <Button>
                    <SendHorizontal className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}

export default DeailPage;