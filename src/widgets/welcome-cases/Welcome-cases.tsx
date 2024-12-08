'use client'

import React from 'react';
import Link from "next/link";

const WelcomeCases = () => {
    return (
        <div className={`w-full h-[900px] flex flex-col bg-background`}>
            <h2 className={`p-casesNamePadding leading-none flex items-end justify-stretch w-2/3 text-casesNameSize font-medium`}>Наши проекты</h2>
            <ul className={`flex p-casesFilterPadding flex-wrap gap-2 gap-y-3`}>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Продажи
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Маркетинг
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Веб-разработка
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Создание контента
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Дизайн
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Call-центр
                    </button>
                </li>
            </ul>
            <ul className={`bg-background flex items-start flex-wrap justify-start relative ml-[-1px] mb-[-1px]`}>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="">
                        <video autoPlay muted loop id="myVideo">
                            <source src="/1.mp4" type="video/mp4"/>
                        </video>
                        <div className={`bg-amber-100 w-full h-full`}>

                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="">
                        <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/2.jpg" alt=""/>
                        <div className={`bg-amber-100 w-full h-full`}>

                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="">
                        <video autoPlay muted loop id="myVideo">
                            <source src="/3.mp4" type="video/mp4"/>
                        </video>
                        <div className={`bg-amber-100 w-full h-full`}>

                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="">
                        <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/4.jpg" alt=""/>
                        <div className={`bg-amber-100 w-full h-full`}>

                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="">
                        <video autoPlay muted loop id="myVideo">
                            <source src="/5.mp4" type="video/mp4"/>
                        </video>
                        <div className={`bg-amber-100 w-full h-full`}>

                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="">
                        <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/6.jpg" alt=""/>
                        <div className={`bg-amber-100 w-full h-full`}>

                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="">
                        <video autoPlay muted loop id="myVideo">
                            <source src="/7.mp4" type="video/mp4"/>
                        </video>
                        <div className={`bg-amber-100 w-full h-full`}>

                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="">
                        <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/8.jpg" alt=""/>
                        <div className={`bg-amber-100 w-full h-full`}>

                        </div>
                    </Link>
                </li>
                <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                    <Link href="">
                        <div className={`bg-amber-100 w-full h-full`}>

                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default WelcomeCases;