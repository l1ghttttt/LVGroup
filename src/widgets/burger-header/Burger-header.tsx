'use client'
import { Sheet, SheetTrigger, SheetContent } from "@/shared/ui/sheet"
import { Button } from "@/shared/ui/button"
import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {ThemeSwitcher} from "@/shared/ui/themeSwitcher";

interface NavbarComponent {
    trigger: string;
    values: { title: string; href: string; description: string }[];
}

const components: NavbarComponent[] = [
    {
        trigger: "Продажи",
        values: [
            {
                title: "Аудит отдела продаж",
                href: "/",
                description: "Оценка эффективности",
            },
            {
                title: "Создание/развитие отделов продаж",
                href: "/",
                description: "Достижение новых высот",
            },
            {
                title: "Разработка регламентов и стандартов",
                href: "/",
                description: "Стандартизация процессов",
            },
            {
                title: "Корпоративные тренинги и «полевое» обучение",
                href: "/",
                description: "Развитие вашей команды",
            },
        ],
    },
    {
        trigger: "Маркетинг",
        values: [
            {
                title: "Контекстная реклама",
                href: "/",
                description: "Горячие клиенты",
            },
            {
                title: "SMM",
                href: "/",
                description: "Продвижение в соц. сетях",
            },
            {
                title: "SEO",
                href: "/",
                description: "Оптимизация сайта",
            },
            {
                title: "Маркетинговые исследования",
                href: "/",
                description: "Оценка рынка сбыта",
            },
        ],
    },
    {
        trigger: "Веб-разработка",
        values: [
            {
                title: "Создание сайтов",
                href: "/",
                description: "Полный цикл разработки",
            },
            {
                title: "Техническая поддержка",
                href: "/",
                description: "Оперативные решения задач",
            },
        ],
    },
    {
        trigger: "Создание контента",
        values: [
            {
                title: "Видеосъемка",
                href: "/",
                description: "Reels, Shorts, реклама на TV",
            },
            {
                title: "Фотосессии",
                href: "/",
                description: "Трендовый контент",
            },
        ],
    },
    {
        trigger: "Дизайн",
        values: [
            {
                title: "Разработка фирменного стиля",
                href: "/",
                description: "От идеи до визуализации",
            },
            {
                title: "Дизайн-поддержка",
                href: "/",
                description: "Красивый визуал",
            },
            {
                title: "Создание коммерческого предложения",
                href: "/",
                description: "Marketing Kit",
            },
        ],
    },
    {
        trigger: "Call-центр",
        values: [
            {
                title: "Создание и развитие call-центра",
                href: "/",
                description: "Достижение новых высот",
            },
            {
                title: "Удаленный  call-центр",
                href: "/",
                description: "Выполнение срочных задач",
            },
            {
                title: "Разработка регламентов и стандартов",
                href: "/",
                description: "Стандартизация процессов",
            },
        ],
    },
];

export default function BurgerHeader() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <header className="header-clas flex h-[100px] border-b-[1px] w-full pl-[15px] pr-[30px] gap-[25px] items-center 2xl:hidden max-sm:gap-[10px] max-sm:pr-[15px] max-sm:pl-[10px]">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <svg
                                className={`h-6 w-6`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="4" x2="20" y1="12" y2="12"/>
                                <line x1="4" x2="20" y1="6" y2="6"/>
                                <line x1="4" x2="20" y1="18" y2="18"/>
                            </svg>
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className={`w-full flex flex-col gap-[16px] `}>
                            <h3 className={`text-[26px] text-headerColor`}>Главная</h3>
                            {components.map((component) => (
                                <h3 key={component.trigger} className={`text-[26px] text-headerColor`}>{component.trigger}</h3>
                            ))}
                        </nav>
                        <div className={`absolute bottom-[5%] left-[5%]`}>
                            <ThemeSwitcher/>
                        </div>

                    </SheetContent>
                </Sheet>

                {theme === 'dark' ? (
                    <img src="/LVGROUP_logo.svg" alt="логотип LVGroup" className="w-[150px] max-sm:w-[130px]"/>
                ) : (
                    <img src="/LVGROUP_logo-black.svg" alt="логотип LVGroup" className="w-[150px] max-sm:w-[130px]"/>
                )}

                <div className="ml-auto flex items-center space-x-4">
                    <button
                        className={`bg-mainColor px-[30px] py-[10px] hover:bg-darkMain rounded-[50px] font-semibold tracking-wider text-altColor duration-150 `}>
                        ЗАЯВКА
                    </button>
                </div>
        </header>
    )
}