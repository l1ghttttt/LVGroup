'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";

const WelcomeCases = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className={`w-full flex flex-col bg-background`}>
            <h2 className={`p-casesNamePadding leading-none flex items-end justify-stretch w-2/3 text-casesNameSize font-medium`}>Наши проекты</h2>
            <ul className={`flex p-casesFilterPadding flex-wrap gap-2 gap-y-3`}>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Продажи
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Маркетинг
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Веб-разработка
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Создание контента
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Дизайн
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Call-центр
                    </button>
                </li>
            </ul>
            <ul className={`bg-background flex items-start flex-wrap justify-start relative ml-[-1px] mb-[-1px]`}>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="/">
                        {typeof window !== "undefined" && (
                            <video autoPlay muted loop id="myVideo"
                                   className="absolute top-0 left-0 w-full h-full object-cover">
                                <source src="/1.mp4" type="video/mp4"/>
                            </video>
                        )}
                        <div className={`z-25 bg-background w-full h-full p-caseContentPadding`}>
                            <p className={`mb-[12px] relative z-25 text-white font-railway font-semibold flex items-baseline justify-start text-[15px]`}>
                                Кейс
                            </p>
                            <p className={`relative z-25 text-caseTextSize text-white leading-caseTextLeading font-railway`}>
                                Редизайн и разработка сайта для автосервиса &quot;Ламарк-Центр&quot;
                            </p>
                        </div>
                    </Link>
                </li>

                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="/">
                        <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/2.jpg" alt=""/>
                        <div className={`bg-background w-full h-full p-caseContentPadding`}>
                            <p className={`mb-[12px] relative z-25 text-black font-railway font-semibold transform-[translate3d(0, 0, 0)] flex items-baseline justify-start text-[15px]`}>Кейс</p>
                            <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                Контекстная реклама для Dr.Mobile: 100 лидов в месяц
                            </p>
                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="/">
                        <video autoPlay muted loop id="myVideo">
                            <source src="/3.mp4" type="video/mp4"/>
                        </video>
                        <div className={`bg-background w-full h-full p-caseContentPadding`}>
                            <p className={`mb-[12px] relative z-25 text-white font-railway font-semibold transform-[translate3d(0, 0, 0)] flex items-baseline justify-start text-[15px]`}>Кейс</p>
                            <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                +250% прибыли отдела продаж ГК &quot;ВостокАвтоМаш&quot;
                            </p>
                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="/">
                        <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/4.jpg" alt=""/>
                        <div className={`bg-background w-full h-full p-caseContentPadding`}>
                            <p className={`mb-[12px] relative z-25 text-black font-railway font-semibold transform-[translate3d(0, 0, 0)] flex items-baseline justify-start text-[15px]`}>Кейс</p>
                            <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                &quot;Зубная Фея&quot;: от 5000 лидов в отсчете и отсутствия клиентов до реальных показателей
                            </p>
                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="/">
                        <video autoPlay muted loop id="myVideo">
                            <source src="/5.mp4" type="video/mp4"/>
                        </video>
                        <div className={`bg-background w-full h-full p-caseContentPadding`}>
                            <p className={`mb-[12px] relative z-25 text-white  font-railway font-semibold transform-[translate3d(0, 0, 0)] flex items-baseline justify-start text-[15px]`}>Кейс</p>
                            <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                Обзвон-информирование граждан для партии &quot;ЛДПР&quot;
                            </p>
                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="/">
                        <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/6.jpg" alt=""/>
                        <div className={`bg-background w-full h-full p-caseContentPadding`}>
                            <p className={`mb-[12px] relative z-25 text-white  font-railway font-semibold transform-[translate3d(0, 0, 0)] flex items-baseline justify-start text-[15px]`}>Кейс</p>
                            <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                Фирменный стиль компьютерного клуба &quot;Бункер&quot;
                            </p>
                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="/">
                        <video autoPlay muted loop id="myVideo">
                            <source src="/7.mp4" type="video/mp4"/>
                        </video>
                        <div className={`bg-background w-full h-full p-caseContentPadding`}>
                            <p className={`mb-[12px] relative z-25 text-white  font-railway font-semibold transform-[translate3d(0, 0, 0)] flex items-baseline justify-start text-[15px]`}>Кейс</p>
                            <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                Продажи, Маркетинг и HR в сети заведений &quot;Чиллхаус&quot;
                            </p>
                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="/">
                        <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/8.jpg" alt=""/>
                        <div className={`bg-background w-full h-full p-caseContentPadding`}>
                            <p className={`mb-[12px] relative z-25 text-black font-railway font-semibold transform-[translate3d(0, 0, 0)] flex items-baseline justify-start text-[15px]`}>Кейс</p>
                            <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                SMM для кафе &quot;Брат Бурят&quot; с 200 до 12 000 подписчиков
                            </p>
                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <div className={`w-full h-full`}>
                        <video autoPlay muted loop id="myVideo" className={`pointer-events-none`}>
                            <source src="/9.mp4" type="video/mp4"/>
                        </video>
                        <div
                            className={`bg-background p-caseContentPadding w-full h-full flex flex-col justify-between`}>
                            <p className={`relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway transform-[translate3d(0, 0, 0)]`}>
                                Посмотреть все наши проекты
                            </p>
                            <div>
                                <button
                                    className={`relative z-50 font-500 select-none text-background bg-mainColor hover:bg-darkMain cursor-pointer duration-300 tracking-widest h-[50px] flex items-center justify-center rounded-full px-[30px] font-railway text-[20px]`}>
                                    <p className={`mb-2px`}>Смотреть</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default WelcomeCases;