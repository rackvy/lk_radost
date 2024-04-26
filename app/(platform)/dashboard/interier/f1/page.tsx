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
                <h1>Интерьер Лофт</h1>
            </div>
            <div className={style.detailInterierBodyBack}>
                <Link href="/dashboard">← Вернуть на главную</Link>
            </div>
            <div className={style.detailInterierGallery}>
                <Image
                    src="https://dolshik.online/upload/resize_cache/iblock/169/310_250_2/loft-gostinaya-photos-by-alina-lyutaya.webp?1703474904"
                    alt=""
                    width={300}
                    height={300}
                    unoptimized
                />
                <Image
                    src="https://dolshik.online/upload/resize_cache/iblock/5be/310_250_2/134_Tribeca_05.jpg"
                    alt=""
                    width={300}
                    height={300}
                    unoptimized
                />
                <Image
                    src="https://dolshik.online/upload/resize_cache/iblock/277/310_250_2/7.jpg"
                    alt=""
                    width={300}
                    height={300}
                    unoptimized
                />
                <Image
                    src="https://dolshik.online/upload/resize_cache/iblock/bb8/310_250_2/22.jpg"
                    alt=""
                    width={300}
                    height={300}
                    unoptimized
                />
                <Image
                    src="https://dolshik.online/upload/resize_cache/iblock/3e4/310_250_2/58.jpg"
                    alt=""
                    width={300}
                    height={300}
                    unoptimized
                />
                <Image
                    src="https://dolshik.online/upload/resize_cache/iblock/101/310_250_2/3.jpg"
                    alt=""
                    width={300}
                    height={300}
                    unoptimized
                />
            </div>
            <div className={style.detailInterierBodyPrice}>
                2 199 360  ₽
            </div>
            <Button className="btn-radost mb-2">Заказать</Button>
            <div className={style.detailInterierBodyInfo}>
                <p>Лофт&nbsp;&mdash; это стиль интерьера, вдохновленный промышленным наследием и&nbsp;характеризующийся открытым планированием, высокими потолками, грубыми отделочными материалами и&nbsp;оригинальными элементами декора. Дизайн лофт обычно включает в&nbsp;себя использование старых фабричных зданий или складов в&nbsp;качестве основы, оставляя видимыми элементы строительства, такие как кирпичные стены, трубы и&nbsp;балки. Этот стиль привлекает своей смелостью самовыражения, аутентичностью и&nbsp;особенным характером пространства. Лофтовый дизайн идеально подходит для тех, кто ценит необычность и&nbsp;свободу в&nbsp;оформлении.</p>
            </div>
        </div>
    );
}

export default DeailPage;