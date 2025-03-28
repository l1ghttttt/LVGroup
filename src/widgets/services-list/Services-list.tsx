'use client'

import React from 'react';
import Link from "next/link";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/ui/accordion"
import uslugi from "@/app/uslugi.json";

interface ServicesListProps {
    trigger: string;
    values: { title: string; href: string; description: string }[];
}

const ServicesList: ServicesListProps[] = uslugi

const ServicesListComponent = () => {
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

                    {ServicesList.map((component) => (
                        <li className={`w-1/3 pb-servicesPadding`} key={component.trigger}>
                            <h2 key={component.trigger} className={`block relative text-serviceTitleSize leading-serviceTitleLeading before:absolute before:content-[''] before:w-[85%] before:h-[1px] before:top-[-20px] before:left-[2px] before:bg-servicesLineBg`}>{component.trigger}</h2>
                            <nav>
                                <ul className={`duration-500 pt-servicePadding`} key={component.trigger}>
                                    {component.values.map((subcomponent) => (
                                        <li className={`py-[10px]`} key={subcomponent.title}>
                                            <Link href={`${subcomponent.href}`}
                                                  className={`text-serviceNameSize leading-serviceNameLeading text-mainColor hover:text-darkMain duration-300`}>{subcomponent.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </li>
                    ))}

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
                {ServicesList.map((component) => (
                    <AccordionItem value={`item-${component.trigger}`} key={component.trigger}>
                        <AccordionTrigger key={component.trigger} className={` !relative !text-serviceTitleSize !leading-serviceTitleLeading !decoration-0 !no-underline !font-railway`}>{component.trigger}</AccordionTrigger>
                        <AccordionContent>
                            <nav>
                                <ul className={`duration-500 pl-[15px]`} key={component.trigger}>
                                    {component.values.map((subcomponent) => (
                                        <li className={`py-[10px]`} key={subcomponent.title}>
                                            <Link href={`${subcomponent.href}`} className={`text-serviceNameSize leading-serviceNameLeading`}>{subcomponent.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </AccordionContent>
                    </AccordionItem>
                    ))}
            </Accordion>



        </section>
    );
};

export default ServicesListComponent;