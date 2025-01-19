import React from 'react';
import WelcomeCases from "@/widgets/welcome-cases/Welcome-cases";
import Link from "next/link";

const Cases = () => {
    return (
        <>
            <div className="cases-container mt-[50px] max-md:mt-[100px]">
                <WelcomeCases/>
                <ul className={`bg-background flex items-start flex-wrap justify-start relative ml-[-1px] mb-[-1px]`}>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
                            <video autoPlay muted loop playsInline id="myVideo"
                                   className="absolute top-0 left-0 w-full h-full object-cover">
                                <source src="/1.mp4" type="video/mp4"/>
                            </video>
                            <div className={`z-25 bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-caseTextSize text-white leading-caseTextLeading font-railway`}>
                                    Редизайн и разработка сайта для <br/> автосервиса &quot;Ламарк-Центр&quot;
                                </p>
                            </div>
                        </Link>
                    </li>

                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/2.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    Контекстная реклама для Dr.Mobile: <br/> 100 лидов в месяц
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
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
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/4.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    &quot;Зубная Фея&quot;: от 5000 лидов в <br/> отсчете и отсутствия клиентов <br/> до
                                    реальных показателей
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
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
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/6.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    Фирменный стиль компьютерного <br/> клуба &quot;Бункер&quot;
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
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
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/8.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    SMM для кафе &quot;Брат Бурят&quot; <br/> с 200 до 12 000 подписчиков
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <div className={`w-full h-full`}>
                            <video autoPlay muted loop playsInline id="myVideo" className={`pointer-events-none`}>
                                <source src="/9.mp4" type="video/mp4"/>
                            </video>
                            <div
                                className={`bg-background p-caseContentPadding w-full h-full flex flex-col justify-between`}>
                                <p className={`max-2xl:hidden -translate-y-[0.8rem] relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold transform-[translate3d(0, 0, 0)]`}>
                                    Посмотреть все <br/> наши проекты
                                </p>
                                <p className={`max-xl:hidden 2xl:hidden -translate-y-[0.8rem] relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold transform-[translate3d(0, 0, 0)]`}>
                                    Посмотреть все наши проекты
                                </p>
                                <p className={`xl:hidden relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold transform-[translate3d(0, 0, 0)]`}>
                                    Посмотреть все наши проекты
                                </p>
                                <div>
                                    <button
                                        className={`relative z-50 font-semibold select-none text-background bg-mainColor hover:bg-darkMain cursor-pointer duration-300 tracking-widest h-[50px] flex items-center justify-center rounded-full px-[30px] font-railway text-[20px]`}>
                                        <p className={`mb-2px`}>Смотреть</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className={`bg-background flex items-start flex-wrap justify-start relative ml-[-1px] mb-[-1px]`}>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
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
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/2.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    Контекстная реклама для Dr.Mobile: <br/> 100 лидов в месяц
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
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
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/4.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    &quot;Зубная Фея&quot;: от 5000 лидов в <br/> отсчете и отсутствия клиентов <br/> до
                                    реальных показателей
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
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
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/6.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    Фирменный стиль компьютерного <br/> клуба &quot;Бункер&quot;
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
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
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/8.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    SMM для кафе &quot;Брат Бурят&quot; <br/> с 200 до 12 000 подписчиков
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <div className={`w-full h-full`}>
                            <video autoPlay muted loop playsInline id="myVideo" className={`pointer-events-none`}>
                                <source src="/9.mp4" type="video/mp4"/>
                            </video>
                            <div
                                className={`bg-background p-caseContentPadding w-full h-full flex flex-col justify-between`}>
                                <p className={`max-2xl:hidden -translate-y-[0.8rem] relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold transform-[translate3d(0, 0, 0)]`}>
                                    Посмотреть все <br/> наши проекты
                                </p>
                                <p className={`max-xl:hidden 2xl:hidden -translate-y-[0.8rem] relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold transform-[translate3d(0, 0, 0)]`}>
                                    Посмотреть все наши проекты
                                </p>
                                <p className={`xl:hidden relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold transform-[translate3d(0, 0, 0)]`}>
                                    Посмотреть все наши проекты
                                </p>
                                <div>
                                    <button
                                        className={`relative z-50 font-semibold select-none text-background bg-mainColor hover:bg-darkMain cursor-pointer duration-300 tracking-widest h-[50px] flex items-center justify-center rounded-full px-[30px] font-railway text-[20px]`}>
                                        <p className={`mb-2px`}>Смотреть</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul className={`bg-background flex items-start flex-wrap justify-start relative ml-[-1px] mb-[-1px]`}>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
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
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/2.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    Контекстная реклама для Dr.Mobile: <br/> 100 лидов в месяц
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
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
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/4.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    &quot;Зубная Фея&quot;: от 5000 лидов в <br/> отсчете и отсутствия клиентов <br/> до
                                    реальных показателей
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
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
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/6.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    Фирменный стиль компьютерного <br/> клуба &quot;Бункер&quot;
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <Link href="/">
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
                        <Link href="/">
                            <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/8.jpg" alt=""/>
                            <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                    SMM для кафе &quot;Брат Бурят&quot; <br/> с 200 до 12 000 подписчиков
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                        <div className={`w-full h-full`}>
                            <video autoPlay muted loop playsInline id="myVideo" className={`pointer-events-none`}>
                                <source src="/9.mp4" type="video/mp4"/>
                            </video>
                            <div
                                className={`bg-background p-caseContentPadding w-full h-full flex flex-col justify-between`}>
                                <p className={`max-2xl:hidden -translate-y-[0.8rem] relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold transform-[translate3d(0, 0, 0)]`}>
                                    Посмотреть все <br/> наши проекты
                                </p>
                                <p className={`max-xl:hidden 2xl:hidden -translate-y-[0.8rem] relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold transform-[translate3d(0, 0, 0)]`}>
                                    Посмотреть все наши проекты
                                </p>
                                <p className={`xl:hidden relative z-25 text-seeAllSize leading-seeAllLeading text-white font-railway font-semibold transform-[translate3d(0, 0, 0)]`}>
                                    Посмотреть все наши проекты
                                </p>
                                <div>
                                    <button
                                        className={`relative z-50 font-semibold select-none text-background bg-mainColor hover:bg-darkMain cursor-pointer duration-300 tracking-widest h-[50px] flex items-center justify-center rounded-full px-[30px] font-railway text-[20px]`}>
                                        <p className={`mb-2px`}>Смотреть</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Cases;