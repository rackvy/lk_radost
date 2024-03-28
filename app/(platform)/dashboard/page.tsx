"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
//import {cookies} from "next/headers";
import { BadgeInfo } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import {redirect} from "next/navigation";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';


//CATALOG
async function getCatalog() {
    const res = await fetch('https://backend-dolshik.shelikhov.me/api/catalog/get-list');
    return res.json()
}
const CatalogItem = ({ data }: { data: any}) => {
    if(data === undefined) return (
        <div>Ошибка</div>
    );
    return (
        <div className="catalog_item">
            <div className="catalog_item__img">
                <Image
                    src={ data.picture }
                    alt=""
                    width={116}
                    height={116}
                />
            </div>
            <div className="catalog_item__category">
                { data.cat }
            </div>
            <div className="catalog_item__name">
                { data.name }
            </div>
            <div className="catalog_item__price">
                { data.price } ₽
            </div>
        </div>
    );
}
const CatalogTemplate = ({ data }: { data: any}) => {
    if(data === undefined) return (
        <div>Ошибка</div>
    );
    return (

        <div className="catalog_items">
            {data.map((item, index) => (
                <CatalogItem key={index} data={item}/>
            ))}
        </div>

    );
};


const ProfilePage: React.FC = () => {
    const router = useRouter();
    const [userInfo, setUserInfo] = useState(null);
    const [catalog, setCatalog] = useState(null);

    useEffect(() => {
        const token = Cookies.get('uuid');
        if (token === undefined) {
            router.push('/login');
        } else {
            fetchUserInfo(token);
            fetchCatalog();
        }
    }, []);

    const fetchUserInfo = async (token: string) => {
        try {
            const response = await fetch('https://backend-dolshik.shelikhov.me/api/user/get_user?id='+token, {
                method: 'GET',
            });

            if (response.ok) {
                const userData = await response.json();
                setUserInfo(userData);
            } else {
                console.error('Ошибка при получении информации о пользователе');
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };
    const fetchCatalog = async () => {
        try {
            const response = await fetch('https://backend-dolshik.shelikhov.me/api/catalog/get-list', {
                method: 'GET',
            });

            if (response.ok) {
                const catalogData = await response.json();
                setCatalog(catalogData);
            } else {
                console.error('Ошибка при получении информации о пользователе');
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    return (
        <div className="" data-id={userInfo ? userInfo.ID : ''}>
            {userInfo ? (
                <div className="deals">
                    {Object.keys(userInfo.DEAL).map((key) => (
                        <div className="deal-item" data-key={ userInfo.DEAL[key].TYPE === 'FLAT' ? userInfo.DEAL[key].TYPE : ''}>
                            <div className="deal-item__icon">
                                { userInfo.DEAL[key].TYPE == 'CATALOG' ?
                                    <svg width="50" height="48" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="48" rx="24" fill="#EDEDED"/>
                                        <path
                                            d="M26 15V10H16C15.7348 10 15.4804 10.1054 15.2929 10.2929C15.1054 10.4804 15 10.7348 15 11V22H35V11C35 10.7348 34.8946 10.4804 34.7071 10.2929C34.5196 10.1054 34.2652 10 34 10H32V17C32 17.2652 31.8946 17.5196 31.7071 17.7071C31.5196 17.8946 31.2652 18 31 18C30.7348 18 30.4804 17.8946 30.2929 17.7071C30.1054 17.5196 30 17.2652 30 17V10H28V15C28 15.2652 27.8946 15.5196 27.7071 15.7071C27.5196 15.8946 27.2652 16 27 16C26.7348 16 26.4804 15.8946 26.2929 15.7071C26.1054 15.5196 26 15.2652 26 15ZM35 24H15V26.75C15 27.1768 15.0841 27.5994 15.2474 27.9937C15.4107 28.388 15.6501 28.7463 15.9519 29.0481C16.2537 29.3499 16.612 29.5893 17.0063 29.7526C17.4006 29.9159 17.8232 30 18.25 30H22V35C22 35.7956 22.3161 36.5587 22.8787 37.1213C23.4413 37.6839 24.2044 38 25 38C25.7956 38 26.5587 37.6839 27.1213 37.1213C27.6839 36.5587 28 35.7956 28 35V30H31.75C32.1768 30 32.5994 29.9159 32.9937 29.7526C33.388 29.5893 33.7463 29.3499 34.0481 29.0481C34.3499 28.7463 34.5893 28.388 34.7526 27.9937C34.9159 27.5994 35 27.1768 35 26.75V24Z"
                                            fill="#B0B0B0"/>
                                    </svg>
                                    :
                                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" rx="25" fill="#EDEDED"/>
                                        <path
                                            d="M25.3348 10.0002C24.9212 10.0002 24.5011 10.0281 24.0744 10.0768C21.8031 10.337 19.8206 11.218 18.4223 12.4812C17.0175 13.745 16.1772 15.437 16.3873 17.2277C16.5711 18.8237 17.5558 20.1602 18.954 21.0815C19.1247 20.6792 19.3414 20.3094 19.558 20.011C18.4026 19.2584 17.6937 18.2398 17.5624 17.0914C17.4114 15.8133 18.0022 14.5236 19.1904 13.4492C20.3851 12.3741 22.1641 11.5638 24.2188 11.329C26.2735 11.0934 28.1969 11.4801 29.6083 12.2567C31.0131 13.034 31.8862 14.1583 32.0372 15.4306C32.1816 16.6827 31.6302 17.9478 30.5011 18.9989C29.8029 18.5678 29.0002 18.3303 28.1772 18.3112H28.0328C27.698 18.3176 27.3698 18.3566 27.0284 18.4279C24.5667 18.9924 23.0372 21.3799 23.6017 23.7934C23.9497 25.2856 25.0197 26.4274 26.372 26.94L28.9781 38.112L32.0635 40L34 36.9702L32.4573 36.0294L33.4289 34.5113L31.8862 33.5641L32.8512 32.0524L31.3085 31.1052L32.2801 29.587L31.3939 25.7981C32.3851 24.7536 32.8381 23.2614 32.4902 21.7627C32.3129 21.0036 31.9519 20.3354 31.453 19.7904C32.6937 18.5577 33.4092 16.9682 33.2123 15.3008C33.0022 13.5134 31.7943 12.0543 30.1335 11.1415C28.7877 10.3986 27.1269 9.98856 25.3348 10.0002ZM24.0088 18.7913C22.3085 18.8626 20.733 19.8812 20.0438 21.5291C19.4464 22.95 19.6499 24.4941 20.4508 25.6943L16 36.2695L17.3982 39.5783L20.7593 38.2223L20.0569 36.5679L21.7374 35.8932L21.0416 34.2388L22.7221 33.5641L22.0197 31.9097L23.7002 31.2284L25.1969 27.6731C23.8512 26.927 22.8206 25.6489 22.4464 24.0529C21.9934 22.0871 22.6499 20.1213 24.0088 18.7913ZM27.8162 19.2584C28.4004 19.2519 28.9519 19.4855 29.3523 19.8682C28.9912 20.0953 28.5908 20.2964 28.1707 20.4781C28.0656 20.4392 27.954 20.4262 27.8359 20.4262C27.7965 20.4262 27.7637 20.4262 27.7309 20.4327C27.2713 20.4846 26.93 20.8284 26.8709 21.2566C26.8578 21.3215 26.8578 21.3864 26.8578 21.4448C26.8643 21.4642 26.8643 21.4902 26.8643 21.5097C26.93 22.0546 27.4092 22.4309 27.9606 22.3661C28.407 22.3142 28.7484 21.9833 28.814 21.5681C29.221 21.3864 29.6018 21.1853 29.9628 20.9582C29.9759 21.0231 29.9891 21.088 29.9956 21.1528C30.1335 22.3206 29.2735 23.3911 28.0919 23.5274C26.9168 23.6636 25.8271 22.8137 25.6958 21.6459C25.558 20.4781 26.4179 19.4076 27.5996 19.2714C27.6718 19.2649 27.744 19.2584 27.8162 19.2584Z"
                                            fill="#B0B0B0"/>
                                    </svg>
                                }
                            </div>
                            <div className="deal-item__info">
                                <div className="deal-item__info__price">
                                    { userInfo.DEAL[key].ALLPRICE } ₽
                                </div>
                                <div className="deal-item__info__status">
                                    <button className="btn">{ userInfo.DEAL[key].STATUS }</button>
                                </div>
                                <div className="deal-item__info__desc">
                                    { userInfo.DEAL[key].TITLE }
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="deal-img" data-key="BANNER">
                        <Image
                            src="http://lk.shelikhov.me/img/banner.png"
                            alt=""
                            width={363}
                            height={133}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="deals">
                        <div className="deal-item">
                            <div className="deal-item__icon">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="50" height="50" rx="25" fill="#EDEDED"/>
                                    <path
                                        d="M25.3348 10.0002C24.9212 10.0002 24.5011 10.0281 24.0744 10.0768C21.8031 10.337 19.8206 11.218 18.4223 12.4812C17.0175 13.745 16.1772 15.437 16.3873 17.2277C16.5711 18.8237 17.5558 20.1602 18.954 21.0815C19.1247 20.6792 19.3414 20.3094 19.558 20.011C18.4026 19.2584 17.6937 18.2398 17.5624 17.0914C17.4114 15.8133 18.0022 14.5236 19.1904 13.4492C20.3851 12.3741 22.1641 11.5638 24.2188 11.329C26.2735 11.0934 28.1969 11.4801 29.6083 12.2567C31.0131 13.034 31.8862 14.1583 32.0372 15.4306C32.1816 16.6827 31.6302 17.9478 30.5011 18.9989C29.8029 18.5678 29.0002 18.3303 28.1772 18.3112H28.0328C27.698 18.3176 27.3698 18.3566 27.0284 18.4279C24.5667 18.9924 23.0372 21.3799 23.6017 23.7934C23.9497 25.2856 25.0197 26.4274 26.372 26.94L28.9781 38.112L32.0635 40L34 36.9702L32.4573 36.0294L33.4289 34.5113L31.8862 33.5641L32.8512 32.0524L31.3085 31.1052L32.2801 29.587L31.3939 25.7981C32.3851 24.7536 32.8381 23.2614 32.4902 21.7627C32.3129 21.0036 31.9519 20.3354 31.453 19.7904C32.6937 18.5577 33.4092 16.9682 33.2123 15.3008C33.0022 13.5134 31.7943 12.0543 30.1335 11.1415C28.7877 10.3986 27.1269 9.98856 25.3348 10.0002ZM24.0088 18.7913C22.3085 18.8626 20.733 19.8812 20.0438 21.5291C19.4464 22.95 19.6499 24.4941 20.4508 25.6943L16 36.2695L17.3982 39.5783L20.7593 38.2223L20.0569 36.5679L21.7374 35.8932L21.0416 34.2388L22.7221 33.5641L22.0197 31.9097L23.7002 31.2284L25.1969 27.6731C23.8512 26.927 22.8206 25.6489 22.4464 24.0529C21.9934 22.0871 22.6499 20.1213 24.0088 18.7913ZM27.8162 19.2584C28.4004 19.2519 28.9519 19.4855 29.3523 19.8682C28.9912 20.0953 28.5908 20.2964 28.1707 20.4781C28.0656 20.4392 27.954 20.4262 27.8359 20.4262C27.7965 20.4262 27.7637 20.4262 27.7309 20.4327C27.2713 20.4846 26.93 20.8284 26.8709 21.2566C26.8578 21.3215 26.8578 21.3864 26.8578 21.4448C26.8643 21.4642 26.8643 21.4902 26.8643 21.5097C26.93 22.0546 27.4092 22.4309 27.9606 22.3661C28.407 22.3142 28.7484 21.9833 28.814 21.5681C29.221 21.3864 29.6018 21.1853 29.9628 20.9582C29.9759 21.0231 29.9891 21.088 29.9956 21.1528C30.1335 22.3206 29.2735 23.3911 28.0919 23.5274C26.9168 23.6636 25.8271 22.8137 25.6958 21.6459C25.558 20.4781 26.4179 19.4076 27.5996 19.2714C27.6718 19.2649 27.744 19.2584 27.8162 19.2584Z"
                                        fill="#B0B0B0"
                                    />
                                </svg>
                            </div>
                            <div className="deal-item__info">
                                <div className="deal-item__info__desc">Пока нет активных сделок</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link
                            href="https://жск-радость.рф/flats"
                            targer="_blank"
                        >
                            Выбрать квартиру
                        </Link>
                    </div>
                </div>
            )}
            <div className="payments">
                <div className="payments__item">
                    <div className="payments__item__title">
                        Платежи
                    </div>
                    <div className="mb-2">
                        <div className="payments__item__date">
                            20 марта 2024
                        </div>
                        <div className="payments__item__info">
                            Паевый взнос
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="payments__item__date">
                            30 марта 2024
                        </div>
                        <div className="payments__item__info">
                            Ипотечный платеж
                        </div>
                    </div>
                </div>
                <div className="payments__item">
                    <div className="payments__item__title">
                        Платежи
                    </div>
                    <div className="mb-2">
                        <div className="payments__item__info">
                            Баланс
                        </div>
                        <div className="payments__item__price">
                            0 ₽
                        </div>
                    </div>
                    <div className="mb-2">
                        <div className="payments__item__info">
                            Бонусы
                        </div>
                        <div className="payments__item__price">
                            200 000 ₽
                        </div>
                    </div>
                </div>
            </div>
            <div className="interiers">
                <h2>Интерьеры для вашей квартиры</h2>
                <Alert>
                    <BadgeInfo className="h-4 w-4" />
                    <AlertTitle>Интерьеры не найдены</AlertTitle>
                </Alert>
            </div>
            <div className="catalog">
                <h2>Товары для вашей квартиры</h2>
                {
                    catalog ? (
                        <div className="catalog_items">
                            {Object.keys(catalog).map((key) => (
                                <div className="catalog_item">
                                    <div className="catalog_item__img">
                                        <Image
                                            src={ catalog[key].picture }
                                            alt=""
                                            width={116}
                                            height={116}
                                        />
                                    </div>
                                    <div className="catalog_item__category">
                                        { catalog[key].cat }
                                    </div>
                                    <div className="catalog_item__name">
                                        { catalog[key].name }
                                    </div>
                                    <div className="catalog_item__price">
                                        { catalog[key].price } ₽
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div></div>
                    )}
            </div>
        </div>
    );
};

export default ProfilePage;