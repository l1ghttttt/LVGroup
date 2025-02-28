'use client'

import Image from "next/image";
import {PiArrowBendDownLeftBold} from "react-icons/pi";
import React, {useEffect, useState} from "react";
import {useTheme} from "next-themes";

const Queue = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
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
                            <div className={`customBorder ${theme == 'dark' ? 'invert' : ''}`}></div>
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
                            <div className={`customBorder ${theme == 'dark' ? 'invert' : ''}`}></div>
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
                            <div className={`customBorder ${theme == 'dark' ? 'invert' : ''}`}></div>
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
                                <PiArrowBendDownLeftBold
                                    className={`text-[#F2590D] -translate-x-[40%] -translate-y-[10%] max-xl:-translate-y-[30%] w-[75px] h-[75px]`}/>
                            </div>
                        </div>

                        <div
                            className={`flex-1 max-md:border-t-[0px] w-[150px] rotate-90 max-xl:-translate-y-[30px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px] absolute -top-1/3`}>
                            <div className={`customBorder ${theme == 'dark' ? 'invert' : ''}`}></div>
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
                            <div className={`customBorder ${theme == 'dark' ? 'invert' : ''}`}></div>
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
                            <div className={`customBorder ${theme == 'dark' ? 'invert' : ''}`}></div>
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
                            <div className={`customBorder ${theme == 'dark' ? 'invert' : ''}`}></div>
                        </div>
                    </div>

                    <p className={`font-normal text-[20px] max-2xl:text-[17px] max-lg:text-[16px] leading-[30px] pr-[10px]  flex -translate-x-[27%] flex-shrink-0 text-center flex-col items-start align-text-top font-railway mt-[15px]`}>
                        Набор/добор команды при необходимости, контроль внедрения инструментов в компании
                        заказчика
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Queue;
