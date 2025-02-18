'use client';

import React, { useEffect, useState } from 'react';
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/shared/ui/navigation-menu";
import ListItem from '@/shared/ui/ListItem';
import Link from "next/link";
import { useTheme } from "next-themes";
import { ThemeSwitcher } from "@/shared/ui/themeSwitcher";
import { usePathname } from "next/navigation";

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
                href: "/SMM",
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
                href: "/website-creation",
                description: "Полный цикл разработки",
            },
            {
                title: "Техническая поддержка",
                href: "/tech-support",
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



const Header: React.FC = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname(); // Используем usePathname вместо useRouter

    const stickyRoutes = ["/lamark-center", "/ldpr", "/tooth-fairy", "/dr-mobile", "/vostokavtomash", "/bunker", "/website-creation", "/tech-support", "/SMM"];
    const isSticky = stickyRoutes.includes(pathname);

    const [lastScroll, setLastScroll] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 100) {
                setIsHidden(true);
            } else if (currentScroll < lastScroll) {
                setIsHidden(false);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScroll]);

    if (!mounted) return null;

    return (
        <header className= {`z-[3] header-clas w-full h-[100px] ${isSticky ? 'border-b-0' : 'border-b-[1px]'}  flex items-center pl-[15px] pr-[30px] gap-[25px] max-2xl:hidden top-0 ${isSticky ? "sticky duration-500 transform bg-background z-100" : "absolute"} ${isHidden && isSticky  ? "-translate-y-full" : "translate-y-0"}`}>
            <Link href={`/`}>
                {theme === 'dark' ? (
                    <img src="/LVGROUP_logo.svg" alt="логотип LVGroup" className="w-[150px]" />
                ) : (
                    <img src="/LVGROUP_logo-black.svg" alt="логотип LVGroup" className="w-[150px]" />
                )}
            </Link>
            <nav className="flex items-center gap-3">
                <NavigationMenu>
                    <NavigationMenuList className="flex-wrap">


                        <NavigationMenuItem>
                            <Link href="/cases" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={`text-headerColor !text-headerSize leading-[27px] ` + navigationMenuTriggerStyle()}>
                                    Проекты
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>


                        {components.map((component) => (
                            <NavigationMenuItem key={component.trigger}>
                                <NavigationMenuTrigger
                                    className={`!text-headerSize  text-headerColor `}>{component.trigger}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] ">
                                        {component.values.map((subcomponent) => (
                                            <ListItem
                                                key={subcomponent.title}
                                                title={subcomponent.title}
                                                href={subcomponent.href}
                                            >
                                                {subcomponent.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}


                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={`text-headerColor !text-headerSize leading-[27px]` + navigationMenuTriggerStyle()}>
                                    Контакты
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>


                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <div className={`ml-auto`}>
                <ThemeSwitcher/>
            </div>
            <button
                className={`bg-mainColor px-[30px] py-[10px] hover:bg-darkMain rounded-[50px] font-semibold tracking-wider text-altColor duration-150 `}>
                ЗАЯВКА
            </button>
        </header>
    );
};

export default Header;