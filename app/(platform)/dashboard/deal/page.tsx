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
import './style-hack.css';





const DeailPage: React.FC = () => {
    //const { dealId } = useParams();
    const [isInputFocused, setIsInputFocused] = useState(false);

    const handleInputFocus = () => {
        setIsInputFocused(true);
        // Скрыть навигацию при фокусе на инпуте
        const navbar = document.getElementById('js-navbar');
        if (navbar) {
            navbar.style.display = 'none'; // Или можно добавить класс для скрытия
        }
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
        // Показать навигацию после потери фокуса
        const navbar = document.getElementById('js-navbar');
        if (navbar) {
            navbar.style.display = 'flex'; // Или убрать класс, добавленный для скрытия
        }
    };

    return (
        <div className={style.charRoomBody}>
            <div className={style.charRoomBodyTitle}>
                <h1>Сделка ОД 1/1234</h1>
                <span className={style.charRoomBodyStatus}>Подписание договора</span>
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