import React from 'react';
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem, NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle
} from "@/shared/ui/navigation-menu";
import ListItem from '@/shared/ui/ListItem';
import Link from "next/link";

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



const Header = () => {
    return (
        <header className="header-clas w-full h-[85px] border-b-[1px] flex items-center pl-[15px] pr-[30px] gap-[30px]">
            <img src="/LVGROUP_logo.svg" alt="логотип LVGroup" className={`w-[170px]`}/>
            <nav className="flex items-center gap-3">
                <NavigationMenu>
                    <NavigationMenuList className="flex-wrap">


                        <NavigationMenuItem>
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className={`text-headerColor hover:text-white !text-[18px] ` + navigationMenuTriggerStyle()}>
                                    Проекты
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>


                        {components.map((component) => (
                            <NavigationMenuItem key={component.trigger}>
                                <NavigationMenuTrigger
                                    className={`text-[18px] text-headerColor`}>{component.trigger}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px]">
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
                                <NavigationMenuLink className={`text-headerColor hover:text-white !text-[18px] ` + navigationMenuTriggerStyle()}>
                                    Контакты
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>


                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <button className={`bg-amber-400 px-[40px] py-[10px] bg-mainColor rounded-[50px] font-semibold tracking-wider ml-auto text-altColor`}>
                ЗАЯВКА
            </button>
        </header>
    );
};

export default Header;

/*
<ul>
    <li><a className={`text-headerSize`}>Проекты</a></li>
</ul>
*/