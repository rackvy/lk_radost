import Link from "next/link";
import Image from "next/image";
import {cookies} from "next/headers";


async function getData(uuid: string) {
    const res = await fetch('https://backend-dolshik.shelikhov.me/api/user/get_user_name?id='+uuid);
    return res.json()
}

export const Header = async () => {
    const cookieStore = cookies();
    const guid = cookieStore.get('uuid')?.value;

    if(!guid) {
        return (
            <div></div>
        );
    }
    const data = getData(guid);
    const [user] = await Promise.all([data]);
    return (
        <header className="header">
            <div className="mx-auto w-full w-auto">
                <div className="header__top">
                    <button className="open-menu js-open-menu btn">
                        <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="19" height="2" rx="1" fill="white"/>
                            <rect y="5" width="19" height="2" rx="1" fill="white"/>
                            <rect y="10" width="19" height="2" rx="1" fill="white"/>
                        </svg>
                    </button>
                    <form action="/search/" className="header__top__sear">
                        <input type=" text" name="q" className="form-control"/>
                    </form>
                    <Link href="/personal/" className="link-personal">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M14.1363 7.27284C14.1363 8.23726 13.7531 9.16219 13.0712 9.84414C12.3892 10.5261 11.4643 10.9092 10.4999 10.9092C9.53547 10.9092 8.61054 10.5261 7.92859 9.84414C7.24664 9.16219 6.86353 8.23726 6.86353 7.27284C6.86353 6.30841 7.24664 5.38349 7.92859 4.70154C8.61054 4.01959 9.53547 3.63647 10.4999 3.63647C11.4643 3.63647 12.3892 4.01959 13.0712 4.70154C13.7531 5.38349 14.1363 6.30841 14.1363 7.27284ZM12.3181 7.27284C12.3181 7.75505 12.1265 8.21751 11.7855 8.55849C11.4446 8.89946 10.9821 9.09102 10.4999 9.09102C10.0177 9.09102 9.55522 8.89946 9.21424 8.55849C8.87327 8.21751 8.68171 7.75505 8.68171 7.27284C8.68171 6.79063 8.87327 6.32816 9.21424 5.98719C9.55522 5.64621 10.0177 5.45466 10.4999 5.45466C10.9821 5.45466 11.4446 5.64621 11.7855 5.98719C12.1265 6.32816 12.3181 6.79063 12.3181 7.27284Z"
                                  fill="#FFFFFF"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M10.5 0C4.97727 0 0.5 4.47727 0.5 10C0.5 15.5227 4.97727 20 10.5 20C16.0227 20 20.5 15.5227 20.5 10C20.5 4.47727 16.0227 0 10.5 0ZM2.31818 10C2.31818 11.9 2.96636 13.6491 4.05273 15.0382C4.81566 14.0363 5.79991 13.2243 6.92858 12.6657C8.05724 12.1072 9.29977 11.8171 10.5591 11.8182C11.8021 11.817 13.029 12.0996 14.1463 12.6443C15.2636 13.1891 16.2418 13.9817 17.0064 14.9618C17.794 13.9287 18.3244 12.7229 18.5535 11.4442C18.7827 10.1654 18.704 8.85049 18.3241 7.60817C17.9441 6.36585 17.2738 5.23186 16.3686 4.30003C15.4634 3.36821 14.3493 2.66533 13.1185 2.24955C11.8877 1.83378 10.5756 1.71707 9.29078 1.90907C8.00593 2.10107 6.78526 2.59627 5.72979 3.35369C4.67432 4.11111 3.81437 5.10897 3.22112 6.26472C2.62786 7.42047 2.31835 8.70088 2.31818 10ZM10.5 18.1818C8.62177 18.1846 6.80024 17.5385 5.34364 16.3527C5.92994 15.5134 6.71031 14.8281 7.61836 14.3552C8.52641 13.8822 9.53526 13.6356 10.5591 13.6364C11.5701 13.6356 12.5668 13.876 13.4663 14.3377C14.3658 14.7993 15.1422 15.469 15.7309 16.2909C14.263 17.5152 12.4114 18.1845 10.5 18.1818Z"
                                  fill="#FFFFFF"/>
                        </svg>
                    </Link>
                </div>
                <div className="header__name">
                    <div className="header__name__hello">Здравствуйте,</div>
                    <h2>{user.NAME}</h2>
                </div>
                <div className="header__stories_prw">
                    <div className="storeis_item">
                        <Image
                            src="https://dolshik.online/upload/resize_cache/iblock/162/mqv9675e8n04ee9oj07zpb5068344of6/760_400_2/09c3186c-be7c-4295-ade6-e357e26aa74a.jpeg"
                            alt=""
                            width={92}
                            height={92}
                        />
                        <span>Ход строительства январь 2024</span>
                    </div>
                    <div className="storeis_item">
                        <Image
                            src="https://dolshik.online/upload/resize_cache/iblock/84a/80_75_2/2-min.jpg"
                            alt=""
                            width={92}
                            height={92}
                        />
                        <span>Первый дом ВСЁ!</span>
                    </div>
                </div>

            </div>
        </header>
    );
}