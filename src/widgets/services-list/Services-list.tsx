import React from 'react';
import Link from "next/link";

const ServicesList = () => {
    return (
        <section className="w-full bg-background py-servicesPadding">
            <div className={`w-full flex gap-[3px]`}>
                <div
                    className={`w-2/3 text-servicesTitleSize leading-servicesTitleLeading pl-servicesTitlePadding pr-[15%]`}>
                    <span className={`text-mainColor font-railway`}>LV GROUP</span> - это сильная команда специалистов
                </div>
                <div className={`w-1/3 pt-3 text-servicesDescriptionSize leading-servicesDescriptionLeading pr-servicesTitlePadding`}>
                    <p className={`mb-[15px]`}>Наш опыт в сфере продаж и маркетинга привысил <span className={`text-mainColor`}>15 лет.</span></p>

                    Мы постоянно развиваемся и глубоко вникаем <span className={`text-mainColor`}>в каждый</span> проект наших заказчиков.
                </div>
            </div>

            <nav className={`flex pt-servicesPadding`}>
                <ul className={`flex flex-wrap services-list w-full`}>
                    <li className={`w-1/3 pb-servicesPadding`}>
                        <h2 className={`block relative text-serviceTitleSize leading-serviceTitleLeading before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:top-[-20px] before:left-[2px] before:bg-servicesLineBg`}>Продажи</h2>
                        <nav>
                            <ul className={`duration-500 pt-servicePadding`}>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Аудит
                                        отдела продаж</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Создание/развитие
                                        отделов продаж</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Разработка
                                        регламентов и стандартов</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Корпоративные
                                        тренинги и «полевое» обучение</Link>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className={`w-1/3 pb-servicesPadding`}>
                        <h2 className={`block relative text-serviceTitleSize leading-serviceTitleLeading before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:top-[-20px] before:left-[2px] before:bg-servicesLineBg`}>Маркетинг</h2>
                        <nav>
                            <ul className={`duration-500 pt-servicePadding`}>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Контекстная
                                        реклама</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>SMM</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>SEO</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Маркетинговые
                                        исследования</Link>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className={`w-1/3 pb-servicesPadding`}>
                        <h2 className={`block relative text-serviceTitleSize leading-serviceTitleLeading before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:top-[-20px] before:left-[2px] before:bg-servicesLineBg`}>Веб-разработка</h2>
                        <nav>
                            <ul className={`duration-500 pt-servicePadding`}>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Создание
                                        сайтов</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Техническая
                                        поддержка</Link>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className={`w-1/3 pb-servicesPadding`}>
                        <h2 className={`block relative text-serviceTitleSize leading-serviceTitleLeading before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:top-[-20px] before:left-[2px] before:bg-servicesLineBg`}>Создание контента</h2>
                        <nav>
                            <ul className={`duration-500 pt-servicePadding`}>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Видеосъемка</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Фотосессии</Link>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className={`w-1/3 pb-servicesPadding`}>
                        <h2 className={`block relative text-serviceTitleSize leading-serviceTitleLeading before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:top-[-20px] before:left-[2px] before:bg-servicesLineBg`}>Дизайн</h2>
                        <nav>
                            <ul className={`duration-500 pt-servicePadding`}>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Разработка фирменного стиля</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Дизайн-поддержка</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Создание коммерческого предложения</Link>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li className={`w-1/3 pb-servicesPadding`}>
                        <h2 className={`block relative text-serviceTitleSize leading-serviceTitleLeading before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:top-[-20px] before:left-[2px] before:bg-servicesLineBg`}>Call-центр</h2>
                        <nav>
                            <ul className={`duration-500 pt-servicePadding`}>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Создание и развитие call-центра</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Удаленный  call-центр</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>Разработка регламентов и стандартов</Link>
                                </li>
                            </ul>
                        </nav>
                    </li>

                </ul>
            </nav>

        </section>
    );
};

export default ServicesList;