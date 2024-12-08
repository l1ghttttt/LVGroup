'use client'

import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import Link from "next/link";

const Welcome = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    //console.log(theme);
    if (!mounted) return null;
    return (
        <section className={`p-welcomeWrapper pb-welcomeWrapperBottom w-full `}>
            <div className="video-background">

                    <video autoPlay muted loop id="myVideo" className={theme == 'dark' ? '' : 'invert'}>
                        <source src="/header-big.mp4" type="video/mp4"/>
                    </video>

            </div>
            <div className={`flex w-full px-welcomePadding gap-[6px] max-xl:gap-[3px] relative`}>
                <div className={`w-2/3 flex flex-col justify-between`}>
                    <h1 className={`text-mainZag font-semibold leading-[80px]`}>Возьмём маркетинг <br/> и
                        продажи <br/> на себя</h1>
                    <p className={`text-welcomeDescr text-welcomeColorDescr`}>Чтобы вы сфокусировались на других важных
                        задачах
                        бизнеса.<br/>В нашей команде более 20 профильных специалистов. <br/> Наша цель - это результат
                    </p>
                </div>
                <nav className={`w-2/5 max-sm:w-full p-welcomeLinkPadding pt-welcomeLinkPaddingTop`}>
                    <ul className={`flex flex-col gap-[10px]`}>
                        <Link href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Продажи</Link>
                        <Link href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Маркетинг</Link>
                        <Link href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Веб-разработка</Link>
                        <Link href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Создание контента</Link>
                        <Link href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Дизайн</Link>
                        <Link href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Call-центр</Link>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Welcome;