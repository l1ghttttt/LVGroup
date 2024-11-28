'use client'

import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";

const Welcome = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    //console.log(theme);
    if (!mounted) return null;
    return (
        <div className={`p-welcomeWrapper pb-welcomeWrapperBottom w-full `}>
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
                        <a href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Продажи</a>
                        <a href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Маркетинг</a>
                        <a href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Веб-разработка</a>
                        <a href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Создание контента</a>
                        <a href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Дизайн</a>
                        <a href="/" className={`text-welcomeLink font-medium font-railway hover:text-mainColor duration-300`}>Call-центр</a>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Welcome;