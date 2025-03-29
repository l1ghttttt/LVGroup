'use client'
import {Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle} from "@/shared/ui/sheet"
import { Button } from "@/shared/ui/button"
import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {ThemeSwitcher} from "@/shared/ui/themeSwitcher";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/shared/ui/accordion";
import uslugi from "@/app/uslugi.json";

interface ServicesListProps {
    trigger: string;
    values: { title: string; href: string; description: string }[];
}

const ServicesList: ServicesListProps[] = uslugi

export default function BurgerHeader() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    const unstickyRoutes = ["/", "/cases"];
    const isUnSticky = unstickyRoutes.includes(pathname) || pathname.includes("/usluga/");

    const [lastScroll, setLastScroll] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            setIsHidden(currentScroll > lastScroll && currentScroll > 100);
            setLastScroll(currentScroll);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScroll]);

    if (!mounted) return null;

    return (
        <header className={`z-[50] header-clas justify-between absolute flex h-[100px] border-b-[1px] w-full pl-[15px] pr-[30px] gap-[25px] items-center 2xl:hidden max-sm:gap-[10px] max-sm:pr-[15px] max-sm:pl-[10px] top-0 ${isUnSticky ? "absolute" : "sticky duration-500 transform bg-background z-100"} ${isHidden && !isUnSticky ? "-translate-y-full" : "translate-y-0"}`}>
            <Link href={`/`}>
                {theme === 'dark' ? (
                    <img src="/LVGROUP_logo.svg" alt="логотип LVGroup" className="w-[150px] max-sm:w-[130px]"/>
                ) : (
                    <img src="/LVGROUP_logo-black.svg" alt="логотип LVGroup" className="w-[150px] max-sm:w-[130px]"/>
                )}
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <svg className="scale-[2]" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" x2="20" y1="12" y2="12"/>
                            <line x1="4" x2="20" y1="6" y2="6"/>
                            <line x1="4" x2="20" y1="18" y2="18"/>
                        </svg>
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader><SheetTitle></SheetTitle></SheetHeader>
                    <nav className="w-full flex flex-col gap-[16px]">
                        <Accordion type="single" collapsible className="w-full select-none">
                            <AccordionItem value="item-1" className={`border-none relative`}>
                                <div className={`bg-background absolute w-[30px] h-full z-[1000] top-0 right-0 translate-x-1`}></div>
                                <Link href="/">
                                    <AccordionTrigger onClick={() => setIsOpen(false)} className={` !relative !text-serviceTitleSize !leading-serviceTitleLeading !decoration-0 !no-underline !font-railway`}>Главная</AccordionTrigger>
                                </Link>
                            </AccordionItem>
                            <AccordionItem value="item-2" className={`border-none relative`}>
                                <div className={`bg-background absolute w-[30px] h-full z-[1000] top-0 right-0 translate-x-1`}></div>
                                <Link href="/cases">
                                    <AccordionTrigger onClick={() => setIsOpen(false)}
                                        className={` !relative !text-serviceTitleSize !leading-serviceTitleLeading !decoration-0 !no-underline !font-railway`}>Наши
                                        проекты</AccordionTrigger>
                                </Link>
                            </AccordionItem>
                            {ServicesList.map((component) => (
                                    <AccordionItem key={component.trigger} value={`item-${component.trigger}`} className={`border-none`}>
                                        <AccordionTrigger className={` !relative !text-serviceTitleSize !leading-serviceTitleLeading !decoration-0 !no-underline !font-railway`}>{component.trigger}</AccordionTrigger>
                                        <AccordionContent>
                                            <nav>
                                                <ul className={`duration-500 pl-[15px]`}  key={component.trigger}>
                                                    {component.values.map((subcomponent) => (
                                                        <li className={`py-[10px]`} key={subcomponent.title} onClick={() => setIsOpen(false)}>
                                                            <Link href={`${subcomponent.href}`} className={`text-serviceNameSize leading-serviceNameLeading`}>{subcomponent.title}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </nav>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                        </Accordion>
                    </nav>
                    <div className="absolute bottom-[20px] pt-[2.5] flex justify-between w-[calc(100%-25px)] pr-[20px] bg-background z-25">
                        <div className="flex items-center space-x-4">
                            <Link href="#order-section">
                                <button className="bg-mainColor px-[30px] py-[10px] hover:bg-darkMain rounded-[50px] font-semibold tracking-wider text-altColor duration-150">
                                    ЗАЯВКА
                                </button>
                            </Link>
                        </div>
                        <div>
                            <ThemeSwitcher/>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
}