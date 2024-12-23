import React from 'react';
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/ui/accordion"

const ServicesList = () => {
    return (
        <section className="w-full bg-background py-servicesPadding">
            <div className={`w-full flex gap-[3px] max-lg:mb-[4vh] max-sm:px-[5%] max-sm:flex-col`}>
                <div
                    className={`w-2/3 max-lg:w-1/2 max-sm:w-full max-sm:p-0 max-sm:mb-[2vh] text-servicesTitleSize leading-servicesTitleLeading pl-servicesTitlePadding pr-[15%]`}>
                    <span className={`text-mainColor font-railway`}>LV GROUP</span> - это сильная команда специалистов
                </div>
                <div className={`w-1/3 max-lg:w-1/2 max-sm:w-full pt-3 text-servicesDescriptionSize leading-servicesDescriptionLeading pr-servicesTitlePadding`}>
                    <p className={`mb-[15px]`}>Наш опыт в сфере продаж и маркетинга привысил <span className={`text-mainColor`}>15 лет.</span></p>

                    Мы постоянно развиваемся и глубоко вникаем <span className={`text-mainColor`}>в каждый</span> проект наших заказчиков.
                </div>
            </div>

            <nav className={`flex pt-servicesPadding max-lg:hidden`}>
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


            <Accordion type="single" collapsible className="w-full px-[5%] lg:hidden mx-auto">
                <AccordionItem value="item-1">
            <AccordionTrigger className={` !relative !text-serviceTitleSize !leading-serviceTitleLeading !decoration-0 !no-underline !font-railway`}>Продажи</AccordionTrigger>
            <AccordionContent>
                <nav>
                    <ul className={`duration-500 pl-[15px]`}>
                        <li className={`py-[10px]`}>
                            <Link href="/"
                                  className={`text-serviceNameSize leading-serviceNameLeading`}>Аудит
                                отдела продаж</Link>
                        </li>
                        <li className={`py-[10px]`}>
                            <Link href="/"
                                  className={`text-serviceNameSize leading-serviceNameLeading`}>Создание/развитие
                                отделов продаж</Link>
                        </li>
                        <li className={`py-[10px]`}>
                            <Link href="/"
                                  className={`text-serviceNameSize leading-serviceNameLeading`}>Разработка
                                регламентов и стандартов</Link>
                        </li>
                        <li className={`py-[10px]`}>
                            <Link href="/"
                                  className={`text-serviceNameSize leading-serviceNameLeading`}>Корпоративные
                                тренинги и «полевое» обучение</Link>
                        </li>
                    </ul>
                </nav>
            </AccordionContent>
            </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className={` !relative !text-serviceTitleSize !leading-serviceTitleLeading !decoration-0 !no-underline !font-railway`}>Маркетинг</AccordionTrigger>
                    <AccordionContent>
                        <nav>
                            <ul className={`duration-500 pl-[15px]`}>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Контекстная
                                        реклама</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>SMM</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>SEO</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Маркетинговые исследования</Link>
                                </li>
                            </ul>
                        </nav>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className={` !relative !text-serviceTitleSize !leading-serviceTitleLeading !decoration-0 !no-underline !font-railway`}>Веб-разработка</AccordionTrigger>
                    <AccordionContent>
                        <nav>
                            <ul className={`duration-500 pl-[15px]`}>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Создание сайтов</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Техническая поддержка</Link>
                                </li>
                            </ul>
                        </nav>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className={` !relative !text-serviceTitleSize !leading-serviceTitleLeading !decoration-0 !no-underline !font-railway`}>Создание контента</AccordionTrigger>
                    <AccordionContent>
                        <nav>
                            <ul className={`duration-500 pl-[15px]`}>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Видеосъемка</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Фотосессии</Link>
                                </li>
                            </ul>
                        </nav>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className={` !relative !text-serviceTitleSize !leading-serviceTitleLeading !decoration-0 !no-underline !font-railway`}>Дизайн</AccordionTrigger>
                    <AccordionContent>
                        <nav>
                            <ul className={`duration-500 pl-[15px]`}>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Разработка фирменного стиля</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Дизайн-поддержка</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Создание коммерческого предложения</Link>
                                </li>
                            </ul>
                        </nav>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className={` !relative !text-serviceTitleSize !leading-serviceTitleLeading !decoration-0 !no-underline !font-railway`}>Call-центр</AccordionTrigger>
                    <AccordionContent>
                        <nav>
                            <ul className={`duration-500 pl-[15px]`}>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Создание и развитие call-центра</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Удаленный call-центр</Link>
                                </li>
                                <li className={`py-[10px]`}>
                                    <Link href="/"
                                          className={`text-serviceNameSize leading-serviceNameLeading`}>Разработка регламентов и стандартов</Link>
                                </li>
                            </ul>
                        </nav>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>



        </section>
    );
};

export default ServicesList;