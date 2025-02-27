'use client'

import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import Link from "next/link";
import {OrderForm} from "@/components/Form/Order-form";
import Image from "next/image";

const CreateSalesment = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <main className={`w-full flex flex-col items-center`}>
            <section className={`relative object-cover w-full`}>

                <div className="video-background">
                    <video autoPlay muted loop playsInline id="myVideo" className={theme == 'dark' ? '' : 'invert'}>
                        <source src="/CreateSalesment.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div
                    className={`w-full px-WebsiteCreatingWelcomePaddingX flex max-xl:block pb-WebsiteCreatingWelcomePaddingBottom pt-WebsiteCreatingWelcomePaddingTop overflow-hidden`}>
                    <h1 className={`xl:WebsiteCreatingWelcomeHeadingWidth`}>
                        <div className={`leading-[1.1] text-WebsiteCreatingWelcomeHeadingSize font-railway`}>
                            Создание/развитие отделов продаж
                        </div>
                    </h1>
                    <div
                        className={`xl:w-WebsiteCreatingWelcomeDescrWidth p-WebsiteCreatingWelcomeDescrPadding ml-WebsiteCreatingWelcomeDescrMargin`}>
                        {/*<p className={`text-welcomeDescr  max-md:hidden`}>Чтобы вы сфокусировались на других важных
                        задачах
                        бизнеса.<br/>В нашей команде более 20 профильных специалистов. <br/> Наша цель - это результат
                    </p>*/}
                        <div
                            className={`w-full max-w-[900px] text-WebsiteCreatingWelcomeDescrSize leading-[1.25] mt-WebsiteCreatingWelcomeDescrMarginTop`}>
                            LV Group – это не просто хорошие бизнес-тренеры, HR-ы или &quot;продажники&quot; - работая с нами, вы получаете все необходимые услуги в одном месте от нашей команды.
                        </div>
                    </div>
                </div>
            </section>
            <div className={`bg-background flex flex-col items-center`}>


                <div
                    className={`w-[80vw] translate-x-[6vw] max-xl:w-[90vw] flex gap-[30px] mt-[45px] max-xl:my-[80px] items-start justify-center flex-col max-lg:hidden`}>
                    <ul className={`flex gap-[19px] w-full`}>
                        <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>


                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-end align-text-bottom font-railway mb-[15px]`}>
                                Встреча и планирование реализации проекта
                            </p>

                            <div
                                className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                <div
                                    className={`w-[150px] h-[150px] max-xl:w-[125px] max-xl:h-[125px] p-[4px] max-sm:p-[3px]`}>
                                    <Image src={'/salesment-step1.svg'} alt={'icon'} width={256} height={256}
                                           className={`z-10 w-full h-full`}/>
                                </div>

                                <div
                                    className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>
                            </div>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-end`}>

                            </p>

                        </li>
                        <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-end align-text-bottom font-railway mb-[15px]`}>
                                Проведение вводного аудита
                            </p>

                            <div
                                className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                <div
                                    className={`w-[150px] h-[150px] max-xl:w-[125px] max-xl:h-[125px] p-[4px] max-sm:p-[3px]`}>
                                    <Image src={'/salesment-step2.svg'} alt={'icon'} width={256} height={256}
                                           className={`z-10 w-full h-full`}/>
                                </div>

                                <div
                                    className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>

                            </div>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-start w-[125%]`}>

                            </p>
                        </li>
                        <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-end align-text-bottom font-railway mb-[15px]`}>
                                Создание и согласование плана по реализации проекта
                            </p>

                            <div
                                className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                <div
                                    className={`w-[150px] h-[150px] max-xl:w-[125px] max-xl:h-[125px] p-[4px] max-sm:p-[3px]`}>
                                    <Image src={'/salesment-step3.svg'} alt={'icon'} width={256} height={256}
                                           className={`z-10 w-full h-full`}/>
                                </div>

                                <div
                                    className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>
                            </div>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-end`}>

                            </p>
                        </li>
                        <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-end align-text-bottom font-railway mb-[15px]`}>
                            Разработка/доработка всех регламентов и документов отдела продаж
                            </p>

                            <div
                                className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                <div
                                    className={`w-[150px] h-[150px] max-xl:w-[125px] max-xl:h-[125px] p-[4px] max-sm:p-[3px]`}>
                                    <Image src={'/salesment-step4.svg'} alt={'icon'} width={256} height={256}
                                           className={`z-10 w-full h-full`}/>
                                </div>
                            </div>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-start w-[125%]`}>

                            </p>

                        </li>
                    </ul>
                    <ul className={`flex gap-[19px] w-full flex-row-reverse`}>


                        <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-end`}>

                            </p>

                            <div
                                className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px] relative`}>

                                <div
                                    className={`w-[150px] h-[150px] max-xl:w-[125px] max-xl:h-[125px] p-[4px] max-sm:p-[3px]`}>
                                    <div className={`w-[150px] h-[150px]  flex justify-center items-center`}>
                                        <div className={`border-solid border-[5px] border-[#F2590D] rounded-full w-[75px] h-[75px]`}>

                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`flex-1 max-md:border-t-[0px] w-[150px] rotate-90 max-xl:-translate-y-[30px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px] absolute -top-1/3`}>
                                    <div className={`customBorder`}></div>
                                </div>

                            </div>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] text-transparent leading-[30px] pr-[10px]  flex -translate-x-[27%] flex-shrink-0 text-center flex-col items-start align-text-top font-railway mt-[15px]`}>
                                Дальнейшая помощь заказчику в новых проектах
                            </p>
                        </li>


                        <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-end`}>

                            </p>

                            <div
                                className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                <div
                                    className={`w-[150px] h-[150px] max-xl:w-[125px] max-xl:h-[125px] p-[4px] max-sm:p-[3px]`}>
                                    <Image src={'/salesment-step5.svg'} alt={'icon'} width={256} height={256}
                                           className={`z-10 w-full h-full`}/>
                                </div>

                                <div
                                    className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>

                            </div>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px]  flex -translate-x-[27%] flex-shrink-0 text-center flex-col items-start align-text-top font-railway mt-[15px]`}>
                                Дальнейшая помощь заказчику в новых проектах
                            </p>
                        </li>
                        <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-start w-[125%]`}>

                            </p>

                            <div
                                className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                <div
                                    className={`w-[150px] h-[150px] max-xl:w-[125px] max-xl:h-[125px] p-[4px] max-sm:p-[3px]`}>
                                    <Image src={'/salesment-step6.svg'} alt={'icon'} width={256} height={256}
                                           className={`z-10 w-full h-full`}/>
                                </div>

                                <div
                                    className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>

                            </div>


                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px]  flex -translate-x-[27%] flex-shrink-0 text-center flex-col items-start align-text-top font-railway mt-[15px]`}>
                                Выполнение поставленного денежного плана, как итог успешной реализации проекта
                            </p>

                        </li>
                        <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex -translate-x-[27%] flex-shrink-0 text-center items-end`}>

                            </p>

                            <div
                                className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                <div
                                    className={`w-[150px] h-[150px] max-xl:w-[125px] max-xl:h-[125px] p-[4px] max-sm:p-[3px]`}>
                                    <Image src={'/salesment-step7.svg'} alt={'icon'} width={256} height={256}
                                           className={`z-10 w-full h-full`}/>
                                </div>

                                <div
                                    className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>
                            </div>

                            <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px]  flex -translate-x-[27%] flex-shrink-0 text-center flex-col items-start align-text-top font-railway mt-[15px]`}>
                                Набор/добор команды при необходимости, контроль внедрения инструментов в компании
                                заказчика
                            </p>
                        </li>
                    </ul>
                </div>

                <div
                    className={`w-[90vw] flex gap-[20px] mt-[20px] items-start justify-center flex-col lg:hidden`}>
                    <ul className={`flex w-full flex-col gap-[9px]`}>
                        <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                            <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                <div
                                    className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                    <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                        1
                                    </p>
                                </div>

                                <div
                                    className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>

                            </div>

                            <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                69 048 показов
                            </p>

                        </li>
                        <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                            <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                <div
                                    className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                    <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                        2
                                    </p>
                                </div>

                                <div
                                    className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>

                            </div>

                            <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                1 277 кликов
                            </p>

                        </li>
                        <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                            <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                <div
                                    className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                    <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                        3
                                    </p>
                                </div>

                                <div
                                    className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>

                            </div>

                            <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                1.85% CTR
                            </p>

                        </li>
                        <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                            <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                <div
                                    className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                    <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                        4
                                    </p>
                                </div>

                                <div
                                    className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>

                            </div>

                            <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                60.515 руб. расход
                            </p>

                        </li>
                        <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                            <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                <div
                                    className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                    <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                        5
                                    </p>
                                </div>

                                <div
                                    className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>

                            </div>

                            <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                47.4 руб. цена клика
                            </p>

                        </li>
                        <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                            <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                <div
                                    className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                    <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                        6
                                    </p>
                                </div>

                                <div
                                    className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                    <div className={`customBorder`}></div>
                                </div>

                            </div>

                            <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                488.1 руб. цена цели
                            </p>

                        </li>
                        <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                            <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                <div
                                    className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                    <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                        7
                                    </p>
                                </div>

                            </div>

                            <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                18 заявок, 35 колбэков , 71 звонок
                            </p>

                        </li>
                    </ul>
                </div>


                <section className={`w-full flex flex-col bg-background`}>
                    <h2 className={`p-casesNamePadding leading-none flex items-end justify-stretch sm:w-2/3 text-casesNameSize font-medium`}>Наши
                        проекты</h2>
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
                            <Link href="/lamark-center">
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
                            <Link href="/dr-mobile">
                                <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/2.jpg"
                                     alt=""/>
                                <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                        Контекстная реклама для Dr.Mobile: <br/> 100 лидов в месяц
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/vostokavtomash">
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
                            <Link href="/tooth-fairy">
                                <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/4.jpg"
                                     alt=""/>
                                <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-black text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                        &quot;Зубная Фея&quot;: от 5000 лидов в <br/> отсчете и отсутствия
                                        клиентов <br/> до
                                        реальных показателей
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/ldpr">
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
                            <Link href="/bunker">
                                <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/6.jpg"
                                     alt=""/>
                                <div className={`bg-background w-full h-full p-caseContentPadding`}>
                                    <p className={`relative z-25 text-white text-caseTextSize leading-caseTextLeading font-railway transform-[translate3d(0, 0, 0)]`}>
                                        Фирменный стиль компьютерного <br/> клуба &quot;Бункер&quot;
                                    </p>
                                </div>
                            </Link>
                        </li>
                        <li className={`w-caseWidth h-caseHeight ml-[1px] mb-[1px] relative shrink-0 overflow-hidden outline outline-1 outline-[#252525] duration-300`}>
                            <Link href="/public">
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
                            <Link href="/public">
                                <img className={`object-cover absolute left-0 top-0 w-full h-full`} src="/8.jpg"
                                     alt=""/>
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
                </section>
                <section
                    className={`px-WebsiteCreatingWelcomePaddingX w-full flex flex-col items-center relative mb-[100px]`}>
                    <div className={`flex flex-col w-OrderedListWidth mt-[150px] max-w-[1200px]`}>
                        <h2 className={`mb-OrderedListHeadingMargin font-normal text-customerTitleSize leading-customerTitleLeading`}>Что
                            вы получаете, работая с нами</h2>
                    </div>
                    <div className={`w-full flex justify-center`}>
                        <ul className={`flex flex-wrap w-[90%] max-xl:w-[75%] max-md:w-full justify-between gap-y-[40px] max-xl:gap-y-[75px]`}>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <Image src={"/SalesmentIcon1.svg"} alt={"Features icon"} width={100} height={100} className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] ${theme == 'dark' ? '' : 'invert'}`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Покажем, как действовать</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Мы дадим и поможем внедрить проверенные на практике инструменты продаж.</p>
                                </div>
                            </li>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <Image src={"/SalesmentIcon2.svg"} alt={"Features icon"} width={100} height={100} className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] ${theme == 'dark' ? '' : 'invert'}`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Поможем выполнить поставленный результат</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Проведем аудит, устраним &quot;зоны роста&quot;, обучим персонал, а также дадим гарантии.</p>
                                </div>
                            </li>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <Image src={"/SalesmentIcon3.svg"} alt={"Features icon"} width={100} height={100} className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] ${theme == 'dark' ? '' : 'invert'}`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Мы знаем, как определить ваших конкурентов</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0 max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Не важно какая сфера бизнеса - все разработанные инструменты дадут результат и сделают вас №1 в своей нише.</p>
                                </div>
                            </li>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <Image src={"/SalesmentIcon4.svg"} alt={"Features icon"} width={100} height={100} className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] ${theme == 'dark' ? '' : 'invert'}`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Дальнейшее сопровождение</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Оперативно подключимся к решению новых задач и открытию новых направлений бизнеса.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={`w-full z-25 flex items-stretch max-xl:flex-col`}>
                    <div className={`w-1/2 flex items-stretch justify-stretch shrink-[0.5] relative max-xl:w-full`}>
                        <div className="order-video-background absolute top-0 left-0 w-full h-full">
                            <video autoPlay muted loop playsInline id="myOrderVideo"
                                   className={theme === 'dark' ? '' : 'invert'}>
                                <source src="/order-bg.mp4" type="video/mp4"/>
                            </video>
                        </div>
                        <div
                            className={`flex flex-col items-stretch justify-start relative w-full py-formSpaceYPadding px-formSpaceXPadding`}>
                            <h3 className={`text-orderTitleSize leading-orderTitleLeading font-medium relative`}>
                                Нужна встреча, чтобы
                                <br/>
                                принять решение?
                            </h3>
                            <nav className={`flex`}>
                                <ul className={`flex flex-wrap mt-[47px] max-w-[700px] max-sm:flex-col`}>
                                    <li className={`mr-[40px] mb-[50px] max-2xl:mr-[30px] max-2xl:mb-[30px] max-sm:mr-[20px] max-sm:mb-[20px] max-sm:w-auto`}>
                                        <Link href="/public"
                                              className={`touch-manipulation text-orderDescrSize leading-orderDescrLeading flex`}>
                                            +7 (4212) 93-03-01
                                        </Link>
                                    </li>
                                    {/*<li className={`mr-[40px] mb-[50px] max-2xl:mr-[30px] max-2xl:mb-[30px] max-sm:mr-[20px] max-sm:mb-[20px] max-sm:w-auto`}>
                                <Link href="/"
                                      className={`touch-manipulation text-orderDescrSize leading-orderDescrLeading flex`}>
                                    lvgroup@gmail.com
                                </Link>
                            </li>*/}
                                    <li className={`mr-[40px] mb-[50px] max-2xl:mr-[30px] max-2xl:mb-[30px] max-sm:mr-[20px] max-sm:mb-[20px] max-sm:w-auto`}>
                                        <Link target={`_blank`} href="https://t.me/tvoi_dvigatel"
                                              className={`touch-manipulation text-orderDescrSize leading-orderDescrLeading flex`}>
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white mr-orderIconMargin"
                                                 aria-hidden="true" fill="currentColor"
                                                 xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33"
                                                 height="27"
                                                 viewBox="0 0 50 50">
                                                <path fill="currentColor"
                                                      d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                                            </svg>
                                            telegram
                                        </Link>
                                    </li>
                                    {/*<li className={`mr-[40px] mb-[50px] max-2xl:mr-[30px] max-2xl:mb-[30px] max-sm:mr-[20px] max-sm:mb-[20px] max-sm:w-auto`}>
                                            <Link href="/"
                                                  className={`touch-manipulation text-orderDescrSize leading-orderDescrLeading flex`}>
                                                <svg
                                                    className="w-6 h-6 text-gray-800 dark:text-white mr-orderIconMargin"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="33"
                                                    height="27"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        d="M15.907 11.998 10.332 9.23a.9.9 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974 3.355-.82Z"/>
                                                    <path
                                                        d="m11.463 4.054 5.579 3.323A4.02 4.02 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65 3.108 3.108 0 0 1-1.55.951c-.022.007-.045.005-.07.01-.062.03-.126.057-.191.08l-2.72.667-1.992 2.48c-.18.227-.41.409-.67.534.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154 10.027 10.027 0 0 0-3.375-2.989 10.107 10.107 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z"/>
                                                    <path
                                                        d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761 3.733 3.733 0 0 1 1.238-1.34 3.915 3.915 0 0 1 3.433-.245c.176.03.347.084.508.161l5.753 2.856c.082.05.161.105.236.165a2.128 2.128 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a9.96 9.96 0 0 0-2.5 3.496 9.895 9.895 0 0 0 .283 8.368 9.973 9.973 0 0 0 2.73 3.322 17.161 17.161 0 0 1-.424-2.729Z"/>
                                                    <path
                                                        d="m19.102 16.163-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.083 4.083 0 0 1-2 .53 3.946 3.946 0 0 1-1.983-.535 3.788 3.788 0 0 1-1.36-1.361 3.752 3.752 0 0 1-.51-1.85 1.812 1.812 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07-.056.02-.11.043-.162.07a1.796 1.796 0 0 0-.787 1.516v6.377a10.67 10.67 0 0 0 1.113 4.27 10.11 10.11 0 0 0 8.505-.53 10.022 10.022 0 0 0 3.282-2.858 9.936 9.936 0 0 0 1.75-3.97 19.615 19.615 0 0 1-2.845 2.216Z"/>
                                                </svg>
                                                Скачать бриф
                                            </Link>
                                       </li>*/}
                                </ul>
                            </nav>
                            <nav className={`flex mt-auto w-full text-[18px] leading-[28px] max-xl:pt-[200px]`}>
                                <ul className={`flex`}>
                                    <li className={`mr-[72px] max-xl:mr-[36px] max-sm:mr-0`}>
                                        <p className={`text-[20px] relative leading-[35px] mb-[20px] max-sm:font-medium max-sm:leading-[29px] max-sm:mb-[15px]`}>
                                            Наши руководители готовы лично помочь и обсудить детали.

                                        </p>
                                        <p className={`text-[20px] relative leading-[35px] mb-[20px] max-sm:font-medium max-sm:leading-[29px] max-sm:mb-[15px]`}>
                                            Позвоните, чтобы договориться о встрече или заполните форму,
                                            и мы вам обязательно перезвоним.
                                        </p>

                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className={`w-1/2 bg-altBg max-xl:w-full shrink-[0.5] z-25 `}>
                        <OrderForm/>
                    </div>
                </section>
            </div>

        </main>
    );
};

export default CreateSalesment;