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
import uslugi from "../../app/uslugi.json"
import Image from "next/image";

interface ServicesListProps {
    trigger: string;
    values: { title: string; href: string; description: string }[];
}
const ServicesList: ServicesListProps[] = uslugi

const Header: React.FC = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname(); // Используем usePathname вместо useRouter

    const unstickyRoutes = ["/", "/cases", "/contacts"];
    const isUnSticky = unstickyRoutes.includes(pathname) || pathname.includes("/usluga/");

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
        <header className= {`z-[50] header-clas w-full h-[100px] ${isUnSticky ? 'border-b-[1px]' : 'border-b-0'}  flex items-center pl-[15px] pr-[30px] gap-[25px] max-2xl:hidden top-0 ${isUnSticky ? "absolute" : "sticky duration-500 transform bg-background z-100"} ${isHidden && !isUnSticky  ? "-translate-y-full" : "translate-y-0"}`}>
            <Link href={`/`}>
                {theme === 'dark' ? (
                    <Image src="/LVGROUP_logo.svg" width={360} height={150}  alt="логотип LVGroup" className="w-[150px]" />
                ) : (
                    <Image src="/LVGROUP_logo-black.svg" width={360} height={150} alt="логотип LVGroup" className="w-[150px]" />
                )}
            </Link>
            <nav className="flex items-center gap-3">
                <NavigationMenu>
                    <NavigationMenuList className="flex-wrap">


                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/cases" className={`text-headerColor !text-headerSize leading-[27px] ` + navigationMenuTriggerStyle()}>
                                    Проекты
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>



                        {ServicesList.map((component) => (
                            <NavigationMenuItem key={component.trigger}>
                                <NavigationMenuTrigger
                                    className={`!text-headerSize  text-headerColor `}>{component.trigger}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[500px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px] ">
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
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/contacts"
                                    className={
                                        `text-headerColor !text-headerSize leading-[27px] ` +
                                        navigationMenuTriggerStyle()
                                    }
                                >
                                    Контакты
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>



                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <div className={`ml-auto`}>
                <ThemeSwitcher/>
            </div>
            <Link href={`#order-section`}>
                <button
                    className={`bg-mainColor px-[30px] py-[10px] hover:bg-darkMain rounded-[50px] font-semibold tracking-wider text-altColor duration-150 `}>
                    ЗАЯВКА
                </button>
            </Link>

        </header>
    );
};

export default Header;