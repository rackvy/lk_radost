'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
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
import style from '../styles.module.css';





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
            //navBar.classList.add('hideNavBar');
        }
        const main = document.querySelector('main.main') as HTMLElement;
        if (main) {
            //main.classList.add('mainInChatRoom');
        }
    }, []);

    return (
        <div className={style.detailInterierBody} id="js-detailInterier">
            <div className={style.detailInterierBodyTitle}>
                <h1>Интерьер Whitebox</h1>
            </div>
            <div className={style.detailInterierBodyBack}>
                <Link href="/dashboard">← Вернуть на главную</Link>
            </div>
            <div className={style.detailInterierGallery}>
                <Image
                    src="https://dolshik.online/lk-radost/images/w1.jpg"
                    alt=""
                    width={300}
                    height={300}
                    unoptimized
                />
                <Image
                    src="https://dolshik.online/lk-radost/images/w2.jpg"
                    alt=""
                    width={300}
                    height={300}
                    unoptimized
                />
                <Image
                    src="https://dolshik.online/lk-radost/images/w3.jpg"
                    alt=""
                    width={300}
                    height={300}
                    unoptimized
                />
                <Image
                    src="https://dolshik.online/lk-radost/images/w4.jpg"
                    alt=""
                    width={300}
                    height={300}
                    unoptimized
                />
            </div>
            <div className={style.detailInterierBodyPrice}>
                1 000 000  ₽
            </div>
            <Button className="btn-radost mb-2">Заказать</Button>
            <div className={style.detailInterierBodyInfo}>
                <p>&laquo;Whitebox&raquo;&nbsp;&mdash; это техника ремонта помещений, при которой все работы выполняются отделкой или реновацией помещения до&nbsp;чистовой отделки. Whitebox предполагает полную разборку и&nbsp;реконструкцию помещений, позволяя создать своеобразную &laquo;чистую доску&raquo; для реализации самых смелых идей по&nbsp;изменению интерьера.</p>
                <p>Процесс реализации whitebox включает в&nbsp;себя следующие этапы:</p>
                <ul><li>Строительные работы: возможная перепланировка помещения, установка новых перегородок, обработка стен, потолков, пола.</li></ul>
                <ul><li>Коммуникации: проведение новых инженерных коммуникаций&nbsp;&mdash; электричества, водоснабжения, отопления, вентиляции, кондиционирования, а&nbsp;также установка новых систем безопасности и&nbsp;&laquo;умный дом&raquo;.</li></ul>
                <ul><li>Чистовая отделка: окончательное оформление и&nbsp;отделка помещения&nbsp;&mdash; шпатлевка, покраска, облицовка плиткой, укладка напольных покрытий и т. д.</li></ul>
                <p>Whitebox позволяет создать идеальное пространство для воплощения дизайнерских концепций, обеспечивает возможность полной реализации задуманных дизайнерских решений и&nbsp;функциональных требований.</p>
                <p>Будучи комплексным подходом к&nbsp;ремонту, whitebox становится отличным вариантом для тех, кто хочет создать уникальное, функциональное и&nbsp;современное пространство без ограничений во&nbsp;внутреннем оформлении.</p>
            </div>
        </div>
    );
}

export default DeailPage;