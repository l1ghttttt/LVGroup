'use client'

import React, {useEffect, useState} from 'react';
import Order from "@/components/order/Order";
import Link from "next/link";

const CasesPage = () => {

    useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div className="cases-container mt-[50px] max-md:mt-[100px]">
                <section className={`w-full flex flex-col bg-background`}>
                    <h2 className={`relative p-casesNamePadding leading-none flex items-end justify-stretch sm:w-2/3 text-casesNameSize font-medium`}>Наши работы</h2>
                    <ul className={`flex p-casesFilterPadding flex-wrap gap-2 gap-y-3`}>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Продажи
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Маркетинг
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Веб-разработка
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Создание контента
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Дизайн
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Call-центр
                                </button>
                            </li>
                    </ul>

                    <ul className={`bg-background flex items-start flex-wrap justify-start relative ml-[-1px] mb-[-1px]`}>

                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/brat-buryat-context-ad">
                                <img className={`object-cover absolute left-0 top-0 w-full h-full`}
                                     src="/BratBuryatContextAdPreview.jpg"
                                     alt=""/>
                                <div className={`z-25 bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-caseTextSize text-white leading-caseTextLeading font-railway`}>
                                        291 заказ за один месяц с сайта кафе &quot;Брат Бурят&quot;
                                    </p>
                                </div>
                            </Link>
                        </li>

                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/khabarovsk-typography">
                                {typeof window !== "undefined" && (
                                    <video autoPlay muted loop playsInline id="myVideo"
                                           className="absolute top-0 left-0 w-full h-full object-cover">
                                        <source src="/KhabarovskTypography.mp4" type="video/mp4"/>
                                    </video>
                                )}
                                <div className={`z-25 bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-caseTextSize text-white leading-caseTextLeading font-railway`}>
                                        +600% оборота в Хабаровской <br/> Краевой Типографии
                                    </p>
                                </div>
                            </Link>
                        </li>

                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/top-top-admin">
                                <img className={`object-cover absolute left-0 top-0 w-full h-full`}
                                     src="/TopTopAdminCasePreview.jpg"
                                     alt=""/>
                                <div className={`z-25 bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-caseTextSize text-white leading-caseTextLeading font-railway`}>
                                        Разработка коммерческого предложения для &quot;Топ-Топ Админ&quot;
                                    </p>
                                </div>
                            </Link>
                        </li>

                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/lamark-center">
                                {typeof window !== "undefined" && (
                                    <video autoPlay muted loop playsInline id="myVideo"
                                           className="absolute top-0 left-0 w-full h-full object-cover">
                                        <source src="/1.mp4" type="video/mp4"/>
                                    </video>
                                )}
                                <div className={`z-25 bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-caseTextSize text-white leading-caseTextLeading font-railway`}>
                                        Редизайн и разработка сайта для <br/> автосервиса &quot;Ламарк-Центр&quot;
                                    </p>
                                </div>
                            </Link>
                        </li>

                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/dr-mobile">
                                <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/2.jpg"
                                     alt=""/>
                                <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                        Контекстная реклама для Dr.Mobile: <br/> 100 лидов в месяц
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/vostokavtomash">
                                <video autoPlay muted loop playsInline id="myVideo">
                                    <source src="/3.mp4" type="video/mp4"/>
                                </video>
                                <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                        +250% прибыли отдела продаж <br/> ГК &quot;ВостокАвтоМаш&quot;
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/tooth-fairy">
                                <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/4.jpg"
                                     alt=""/>
                                <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                        &quot;Зубная Фея&quot;: от 5000 лидов в <br/> отсчете и отсутствия
                                        клиентов <br/> до
                                        реальных показателей
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/ldpr">
                                <video autoPlay muted loop playsInline id="myVideo">
                                    <source src="/5.mp4" type="video/mp4"/>
                                </video>
                                <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                        Обзвон-информирование граждан <br/> для партии &quot;ЛДПР&quot;
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/bunker">
                                <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/6.jpg"
                                     alt=""/>
                                <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                        Фирменный стиль компьютерного <br/> клуба &quot;Бункер&quot;
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/chill-house">
                                <video autoPlay muted loop playsInline id="myVideo">
                                    <source src="/7.mp4" type="video/mp4"/>
                                </video>
                                <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                        Продажи, Маркетинг и HR в сети <br/> заведений &quot;Чиллхаус&quot;
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/brat-buryat">
                                <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/8.jpg"
                                     alt=""/>
                                <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                        SMM для кафе &quot;Брат Бурят&quot; <br/> с 200 до 12 000 подписчиков
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/case/chixxInk">
                                <video autoPlay muted loop playsInline id="myVideo" className={`pointer-events-none`}>
                                    <source src="/9.mp4" type="video/mp4"/>
                                </video>
                                <div className={`z-25 bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-caseTextSize leading-caseTextLeading font-railway`}>
                                        Контекстная и таргетированная <br/> реклама для &quot;ChixxInk&quot;
                                    </p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </section>
                <Order/>
            </div>
        </>
    );
};

export default CasesPage;