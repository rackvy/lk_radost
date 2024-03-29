import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="navbar" id="js-navbar">
            <Link href="#" className="navbat-item">
                <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.76039 0.000186133C7.43873 0.000186133 7.11196 0.0215744 6.78009 0.0588794C5.01349 0.258337 3.47155 0.933808 2.38403 1.90225C1.29139 2.87118 0.637856 4.1684 0.80124 5.54123C0.944201 6.76484 1.71007 7.78948 2.79759 8.49579C2.93034 8.1874 3.09883 7.90388 3.26732 7.67508C2.36871 7.0981 1.81729 6.31718 1.71517 5.43678C1.59774 4.4569 2.05726 3.46806 2.9814 2.64437C3.91065 1.82018 5.29431 1.19892 6.89241 1.01886C8.49052 0.838306 9.98651 1.13476 11.0842 1.73015C12.1769 2.32603 12.8559 3.18803 12.9734 4.16343C13.0857 5.12341 12.6568 6.09335 11.7786 6.89913C11.2356 6.56864 10.6113 6.38653 9.97119 6.37189H9.85886C9.59847 6.37686 9.34318 6.40671 9.07768 6.46142C7.16302 6.89416 5.97338 8.7246 6.41247 10.5749C6.68308 11.7189 7.51532 12.5944 8.5671 12.9873L10.5941 21.5526L12.9938 23L14.5 20.6771L13.3001 19.9559L14.0558 18.792L12.8559 18.0658L13.6065 16.9068L12.4066 16.1806L13.1623 15.0167L12.473 12.1119C13.244 11.3111 13.5963 10.1671 13.3257 9.01806C13.1878 8.4361 12.907 7.92378 12.519 7.50596C13.484 6.5609 14.0405 5.34227 13.8873 4.06395C13.7239 2.69361 12.7845 1.57496 11.4927 0.875114C10.446 0.30559 9.15427 -0.00876708 7.76039 0.000186133ZM6.72903 6.73997C5.40664 6.79468 4.18125 7.5756 3.64515 8.839C3.18052 9.92831 3.3388 11.1121 3.96171 12.0323L0.5 20.1399L1.58753 22.6767L4.20168 21.6371L3.65536 20.3687L4.96244 19.8515L4.42122 18.5831L5.7283 18.0658L5.18198 16.7974L6.48906 16.2751L7.65317 13.5494C6.60649 12.9774 5.80489 11.9975 5.51386 10.7739C5.16156 9.26676 5.67214 7.75964 6.72903 6.73997ZM9.69037 7.0981C10.1448 7.09312 10.5737 7.27219 10.8851 7.56565C10.6043 7.73974 10.2929 7.89394 9.96608 8.03321C9.88439 8.00336 9.79759 7.99342 9.70569 7.99342C9.67505 7.99342 9.64953 7.99342 9.624 7.99839C9.26659 8.03818 9.00109 8.30181 8.95514 8.63009C8.94493 8.67983 8.94493 8.72957 8.94493 8.77434C8.95004 8.78926 8.95004 8.80915 8.95004 8.82408C9.00109 9.24189 9.37381 9.53038 9.8027 9.48064C10.1499 9.44085 10.4154 9.18718 10.4664 8.86884C10.783 8.72957 11.0791 8.57538 11.36 8.40129C11.3702 8.45103 11.3804 8.50077 11.3855 8.55051C11.4927 9.44583 10.8239 10.2665 9.90481 10.371C8.99088 10.4754 8.14333 9.82385 8.04121 8.92853C7.93399 8.03321 8.60284 7.2125 9.52188 7.10804C9.57805 7.10307 9.63421 7.0981 9.69037 7.0981Z"
                        fill="#7A7A7A"/>
                </svg>
                Квартиры
            </Link>
            <Link href="#" className="navbat-item">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.55916 2.98853L0.776855 3.63818L2.32304 10.2601L17.9039 6.62199L16.3578 0.000104265L13.5755 0.649761L14.3485 3.9607C14.3827 4.10705 14.3569 4.2611 14.2767 4.38896C14.1965 4.51681 14.0685 4.608 13.9209 4.64246C13.7733 4.67692 13.6182 4.65183 13.4897 4.57271C13.3612 4.49359 13.2698 4.36692 13.2356 4.22056L12.4625 0.909624L10.7931 1.29942L11.9528 6.26583C11.987 6.41218 11.9611 6.56623 11.8809 6.69408C11.8007 6.82194 11.6728 6.91312 11.5252 6.94758C11.3776 6.98204 11.2225 6.95696 11.094 6.87784C10.9654 6.79871 10.874 6.67205 10.8399 6.52569L9.68023 1.55928L4.67208 2.72866L5.18747 4.93596C5.22165 5.08231 5.19579 5.23636 5.1156 5.36421C5.03541 5.49207 4.90745 5.58325 4.75986 5.61771C4.61228 5.65217 4.45717 5.62708 4.32865 5.54796C4.20013 5.46884 4.10873 5.34217 4.07455 5.19582L3.55916 2.98853ZM2.83843 12.4674L2.58074 11.3637L18.1616 7.72563L18.4193 8.82928C18.556 9.41469 18.4526 10.0309 18.1318 10.5423C17.8111 11.0537 17.2992 11.4185 16.7089 11.5563L13.3701 12.3359L14.1432 15.6468C14.2799 16.2322 14.1765 16.8484 13.8557 17.3598C13.5349 17.8713 13.0231 18.236 12.4328 18.3738C11.8424 18.5117 11.222 18.4113 10.7079 18.0948C10.1938 17.7784 9.82822 17.2717 9.69153 16.6863L8.91843 13.3753L5.57967 14.1549C4.98934 14.2928 4.36889 14.1924 3.85481 13.8759C3.34072 13.5594 2.97512 13.0528 2.83843 12.4674Z"
                        fill="#7A7A7A"/>
                </svg>

                Ремонты
            </Link>
            <Link href="#" className="navbat-item">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M18.5 13.3628V9.76279C18.5 7.21759 18.5 5.94409 17.7089 5.15389C16.9664 4.41049 15.7982 4.36549 13.55 4.36279V18.7628C15.7982 18.7601 16.9664 18.7151 17.7089 17.9717C18.5 17.1815 18.5 15.9071 18.5 13.3628ZM15.8 8.86369C16.0387 8.86369 16.2677 8.95851 16.4364 9.1273C16.6052 9.29608 16.7 9.525 16.7 9.76369C16.7 10.0024 16.6052 10.2313 16.4364 10.4001C16.2677 10.5689 16.0387 10.6637 15.8 10.6637C15.5614 10.6637 15.3324 10.5689 15.1637 10.4001C14.9949 10.2313 14.9 10.0024 14.9 9.76369C14.9 9.525 14.9949 9.29608 15.1637 9.1273C15.3324 8.95851 15.5614 8.86369 15.8 8.86369ZM15.8 12.4637C16.0387 12.4637 16.2677 12.5585 16.4364 12.7273C16.6052 12.8961 16.7 13.125 16.7 13.3637C16.7 13.6024 16.6052 13.8313 16.4364 14.0001C16.2677 14.1689 16.0387 14.2637 15.8 14.2637C15.5614 14.2637 15.3324 14.1689 15.1637 14.0001C14.9949 13.8313 14.9 13.6024 14.9 13.3637C14.9 13.125 14.9949 12.8961 15.1637 12.7273C15.3324 12.5585 15.5614 12.4637 15.8 12.4637Z"
                          fill="#7A7A7A"/>
                    <path
                        d="M12.713 2.10208L10.7735 4.36288H12.2V18.7629H5.9C3.3548 18.7629 2.0813 18.7629 1.2911 17.9718C0.5 17.1816 0.5 15.9081 0.5 13.3638V9.76378C0.5 7.21678 0.5 5.94418 1.2911 5.15398C2.0813 4.36288 3.3548 4.36288 5.9 4.36288H8.2256L6.287 2.10208C6.17732 1.96543 6.12507 1.79149 6.14129 1.61703C6.15752 1.44256 6.24096 1.28124 6.37396 1.16717C6.50696 1.0531 6.67911 0.995219 6.85401 1.00576C7.02892 1.01631 7.19286 1.09445 7.3112 1.22368L9.5 3.77608L11.687 1.22368C11.8035 1.08762 11.9692 1.00341 12.1478 0.98957C12.3264 0.975729 12.5031 1.03339 12.6392 1.14988C12.7753 1.26636 12.8595 1.43212 12.8733 1.61069C12.8871 1.78926 12.8295 1.96602 12.713 2.10208Z"
                        fill="#7A7A7A"/>
                </svg>

                Товары
            </Link>
            <Link href="#" className="navbat-item">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.5 0C15.842 0 20.5 4.41 20.5 9.5C20.5 14.504 15.947 18.442 10.5 18.442C9.33498 18.4426 8.17725 18.2583 7.07 17.896C6.606 18.346 6.447 18.499 5.462 19.449C4.752 19.985 4.084 20.167 3.487 19.829C2.885 19.489 2.704 18.827 2.827 17.955L3.227 15.636C1.49 14.002 0.5 11.842 0.5 9.5C0.5 4.41 5.157 0 10.5 0ZM10.5 1.4C5.914 1.4 1.9 5.2 1.9 9.5C1.9 11.545 2.812 13.428 4.42 14.83L4.44 14.847L4.737 15.105L4.67 15.495L4.532 16.299L4.495 16.513L4.21 18.171C4.19319 18.2826 4.18317 18.3952 4.18 18.508V18.603C4.18 18.608 4.179 18.61 4.178 18.611C4.185 18.601 4.321 18.558 4.554 18.388L6.724 16.282L7.138 16.438C8.21342 16.8393 9.35216 17.0442 10.5 17.043C15.216 17.043 19.1 13.683 19.1 9.5C19.1 5.201 15.086 1.4 10.5 1.4ZM5.727 7.813C5.92846 7.80564 6.12933 7.83896 6.31762 7.91098C6.50591 7.983 6.67776 8.09223 6.82288 8.23215C6.96801 8.37207 7.08344 8.53981 7.16228 8.72535C7.24113 8.91088 7.28176 9.11041 7.28176 9.312C7.28176 9.51359 7.24113 9.71312 7.16228 9.89865C7.08344 10.0842 6.96801 10.2519 6.82288 10.3918C6.67776 10.5318 6.50591 10.641 6.31762 10.713C6.12933 10.785 5.92846 10.8184 5.727 10.811C5.33892 10.7968 4.97146 10.6327 4.70191 10.3531C4.43237 10.0736 4.28176 9.70034 4.28176 9.312C4.28176 8.92366 4.43237 8.55045 4.70191 8.27088C4.97146 7.99131 5.33892 7.82718 5.727 7.813ZM10.725 7.813C10.9265 7.80564 11.1273 7.83896 11.3156 7.91098C11.5039 7.983 11.6758 8.09223 11.8209 8.23215C11.966 8.37207 12.0814 8.53981 12.1603 8.72535C12.2391 8.91088 12.2798 9.11041 12.2798 9.312C12.2798 9.51359 12.2391 9.71312 12.1603 9.89865C12.0814 10.0842 11.966 10.2519 11.8209 10.3918C11.6758 10.5318 11.5039 10.641 11.3156 10.713C11.1273 10.785 10.9265 10.8184 10.725 10.811C10.3369 10.7968 9.96946 10.6327 9.69991 10.3531C9.43037 10.0736 9.27976 9.70034 9.27976 9.312C9.27976 8.92366 9.43037 8.55045 9.69991 8.27088C9.96946 7.99131 10.3369 7.82718 10.725 7.813ZM15.722 7.813C15.9235 7.80564 16.1243 7.83896 16.3126 7.91098C16.5009 7.983 16.6728 8.09223 16.8179 8.23215C16.963 8.37207 17.0784 8.53981 17.1573 8.72535C17.2361 8.91088 17.2768 9.11041 17.2768 9.312C17.2768 9.51359 17.2361 9.71312 17.1573 9.89865C17.0784 10.0842 16.963 10.2519 16.8179 10.3918C16.6728 10.5318 16.5009 10.641 16.3126 10.713C16.1243 10.785 15.9235 10.8184 15.722 10.811C15.3339 10.7968 14.9665 10.6327 14.6969 10.3531C14.4274 10.0736 14.2768 9.70034 14.2768 9.312C14.2768 8.92366 14.4274 8.55045 14.6969 8.27088C14.9665 7.99131 15.3339 7.82718 15.722 7.813Z"
                        fill="#7A7A7A"/>
                </svg>

                Чаты
            </Link>
            <Link href="#" className="navbat-item">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M14.1363 7.27284C14.1363 8.23726 13.7531 9.16219 13.0712 9.84414C12.3892 10.5261 11.4643 10.9092 10.4999 10.9092C9.53547 10.9092 8.61054 10.5261 7.92859 9.84414C7.24664 9.16219 6.86353 8.23726 6.86353 7.27284C6.86353 6.30841 7.24664 5.38349 7.92859 4.70154C8.61054 4.01959 9.53547 3.63647 10.4999 3.63647C11.4643 3.63647 12.3892 4.01959 13.0712 4.70154C13.7531 5.38349 14.1363 6.30841 14.1363 7.27284ZM12.3181 7.27284C12.3181 7.75505 12.1265 8.21751 11.7855 8.55849C11.4446 8.89946 10.9821 9.09102 10.4999 9.09102C10.0177 9.09102 9.55522 8.89946 9.21424 8.55849C8.87327 8.21751 8.68171 7.75505 8.68171 7.27284C8.68171 6.79063 8.87327 6.32816 9.21424 5.98719C9.55522 5.64621 10.0177 5.45466 10.4999 5.45466C10.9821 5.45466 11.4446 5.64621 11.7855 5.98719C12.1265 6.32816 12.3181 6.79063 12.3181 7.27284Z"
                          fill="#7A7A7A"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M10.5 0C4.97727 0 0.5 4.47727 0.5 10C0.5 15.5227 4.97727 20 10.5 20C16.0227 20 20.5 15.5227 20.5 10C20.5 4.47727 16.0227 0 10.5 0ZM2.31818 10C2.31818 11.9 2.96636 13.6491 4.05273 15.0382C4.81566 14.0363 5.79991 13.2243 6.92858 12.6657C8.05724 12.1072 9.29977 11.8171 10.5591 11.8182C11.8021 11.817 13.029 12.0996 14.1463 12.6443C15.2636 13.1891 16.2418 13.9817 17.0064 14.9618C17.794 13.9287 18.3244 12.7229 18.5535 11.4442C18.7827 10.1654 18.704 8.85049 18.3241 7.60817C17.9441 6.36585 17.2738 5.23186 16.3686 4.30003C15.4634 3.36821 14.3493 2.66533 13.1185 2.24955C11.8877 1.83378 10.5756 1.71707 9.29078 1.90907C8.00593 2.10107 6.78526 2.59627 5.72979 3.35369C4.67432 4.11111 3.81437 5.10897 3.22112 6.26472C2.62786 7.42047 2.31835 8.70088 2.31818 10ZM10.5 18.1818C8.62177 18.1846 6.80024 17.5385 5.34364 16.3527C5.92994 15.5134 6.71031 14.8281 7.61836 14.3552C8.52641 13.8822 9.53526 13.6356 10.5591 13.6364C11.5701 13.6356 12.5668 13.876 13.4663 14.3377C14.3658 14.7993 15.1422 15.469 15.7309 16.2909C14.263 17.5152 12.4114 18.1845 10.5 18.1818Z"
                          fill="#7A7A7A"/>
                </svg>
                Профиль
            </Link>
        </nav>
    );
}