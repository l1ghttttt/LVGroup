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
                        <source src="/animated-background.mp4" type="video/mp4"/>
                    </video>

            </div>
            <div className={`flex w-full px-welcomePadding gap-[6px] max-xl:gap-[3px] relative max-sm:flex-col`}>
                <div className={`w-2/3 max-2xl:w-1/2 flex flex-col justify-between max-sm:w-full`}>
                    <h1 className={`text-mainZag max-xl:hidden font-semibold leading-[80px] max-lg:leading-[50px] max-xl:max-w-[750px]`}>Возьмём
                        маркетинг <br/> и
                        продажи <br/> на себя</h1>
                    <h1 className={`text-mainZag xl:hidden max-sm:hidden font-semibold leading-[80px] max-lg:leading-[50px] max-xl:max-w-[750px]`}>Возьмём
                        маркетинг и
                        продажи на себя</h1>
                    <h1 className={`text-[36px] mb-[35px]  sm:hidden font-semibold leading-[80px] max-lg:leading-[50px] max-xl:max-w-[750px]`}>Возьмём
                        маркетинг <br/> и
                        продажи на себя</h1>

                    <p className={`text-[18px] mb-[10px] xl:hidden text-welcomeColorDescr`}>Чтобы вы сфокусировались на
                        других важных
                        задачах
                        бизнеса.
                    </p>
                    <p className={`text-[18px] mb-[10px] xl:hidden text-welcomeColorDescr`}>
                        В нашей команде более 20 профильных специалистов.
                    </p>
                    <p className={`text-[18px] mb-[10px] xl:hidden text-welcomeColorDescr`}>Чтобы вы сфокусировались на
                        Наша цель - это результат
                    </p>
                </div>
                <nav
                    className={`w-1/2 max-2xl:w-1/2 max-sm:w-full p-welcomeLinkPadding pt-welcomeLinkPaddingTop max-sm:pl-0`}>
                    <ul className={`flex flex-col gap-[10px] max-lg:gap-[7px]`}>
                        <Link href="/"
                              className={`text-welcomeLink max-sm:text-[45px] font-medium font-railway hover:text-mainColor duration-300 max-md:hidden`}>Создание сайтов</Link>
                        <Link href="/" className={`text-welcomeLink max-sm:text-[45px] font-medium font-railway hover:text-mainColor duration-300 md:hidden`}>Cайты</Link>
                        <Link href="/" className={`text-welcomeLink max-sm:text-[45px] font-medium font-railway hover:text-mainColor duration-300 max-lg:hidden`}>Контекстная реклама</Link>
                        <Link href="/" className={`text-welcomeLink max-sm:text-[45px] font-medium font-railway hover:text-mainColor duration-300 lg:hidden`}>Реклама</Link>
                        <Link href="/" className={`text-welcomeLink max-sm:text-[45px] font-medium font-railway hover:text-mainColor duration-300 max-2xl:hidden`}>Создание/развитие <br/> отделов продаж</Link>
                        <Link href="/" className={`text-welcomeLink max-sm:text-[45px] font-medium font-railway hover:text-mainColor duration-300 2xl:hidden max-xl:hidden`}>Развитие отделов продаж</Link>
                        <Link href="/" className={`text-welcomeLink max-sm:text-[45px] font-medium font-railway hover:text-mainColor duration-300 xl:hidden max-md:hidden`}>Развитие продаж</Link>
                        <Link href="/" className={`text-welcomeLink max-sm:text-[45px] font-medium font-railway hover:text-mainColor duration-300 md:hidden`}>Продажи</Link>
                        <Link href="/" className={`text-welcomeLink max-sm:text-[45px] font-medium font-railway hover:text-mainColor duration-300`}>Видеосьемка</Link>
                        <Link href="/" className={`text-welcomeLink max-sm:text-[45px] font-medium font-railway hover:text-mainColor duration-300`}>SMM</Link>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Welcome;