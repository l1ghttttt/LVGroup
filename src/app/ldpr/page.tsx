'use client'

import React, {useEffect, useState} from 'react';
import Order from "@/widgets/order/Order";
import Image from "next/image";

const LDPR = () => {
    useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <section className="w-full">
                <div className="flex flex-col">
                    <div className={`p-servicesTitlePadding`}>
                        <div className={`flex justify-between`}>
                            <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading`}>Обзвон-информирование
                                граждан
                                <br/> для партии &quot;ЛДПР&quot;</h2>
                            <Image
                                className={`w-[150px] h-[150px] 2xl:hidden max-2xl:mr-[35px] max-lg:mr-[5px] max-sm:mb-0 max-sm:hidden`}
                                src={`/LDPR.jpg`}
                                alt={`лого заказчика`}
                                width={180} height={180}/>
                        </div>

                        <ul className={`flex p-casesFilterPadding px-[15px] flex-wrap gap-2 gap-y-3`}>
                            <li>
                                <button
                                    className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Удаленный Call-центр
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Удаленный Call-центр
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Call-центр
                                </button>
                            </li>
                        </ul>
                    </div>
                    <h4 className={`text-customerClientSize leading-customerClientLeading customer-spacing w-full px-CustomerSpacingPadding`}><span
                        className={`text-mainColor`}>Наш</span> клиент и <span
                        className={`text-mainColor`}>его</span> задача</h4>
                    <div
                        className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                        <div className={`w-full flex gap-[30px] items-center max-xl:flex-col`}>
                            <Image
                                className={`w-[250px] 2xl:absolute 2xl:top-0 2xl:w-customerImageWidth pr-[20px] max-2xl:hidden max-sm:mb-0 max-sm:block max-sm:w-3/4 h-auto CustomerImage max-sm:pr-0`}
                                src={`/LDPR.jpg`}
                                alt={`лого заказчика`}
                                width={250} height={250}/>

                            <aside
                                className={`absolute top-0 left-full w-stackWidth ml-stackMargin  max-xl:static max-xl:w-full max-xl:ml-0`}>
                                <p className={`text-[15px] leading-[15px] border-t-[1px] border-stack pt-[10px] mb-[9px]`}>Технологии
                                    в проекте</p>
                                <ul className={`flex flex-col max-xl:flex-row flex-wrap stack-grid`}>
                                    <li className={`grid stack-layout items-center h-fit py-[10px] px-0 text-[18px] leading-[21px]`}>
                                        <Image src={'/GoogleDocs.png'} alt={'stack icon'} width={`25`} height={`25`}
                                               className={`w-auto grayscale`}/>
                                        <p>GoogleDocs</p>
                                    </li>
                                </ul>
                            </aside>

                            <div
                                className={`flex flex-col gap-[10px] justify-start text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Политическая партия <span
                                    className={`text-mainColor font-bold mb-[20px]`}> ЛДПР </span> –
                                    Либерально-демократическая партия России. К нам обратилось Хабаровское региональное
                                    отделение партии
                                </p>
                                <p>
                                    К нам клиент обратился со следующей задачей: <br/>
                                    В кратчайшие сроки организовать удаленный обзвон базы потенциальных избирателей в
                                    размере 3-5 тысяч человек. От обзвонов «роботом» клиент отказался, т.к. было важно
                                    качественная проработка базы и «живое» общение.
                                </p>
                            </div>
                        </div>
                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Подробнее о задаче</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Кратчайшие сроки означали – 2 дня на обзвон и 2 дня для организации и брифинга
                                    сотрудников, которые должны были предоставляться с нашей стороны.
                                </p>
                                <p>
                                    Сценарий разговора у заказчика был уже готов и включал всего 2 вопроса, со своей
                                    стороны мы собрали всю первичную информацию о кандидатах и партии, предвосхищая
                                    возможные вопросы потенциальных избирателей.
                                </p>
                                <p>
                                    Для удобства взаимодействия с заказчиком и менеджерами call-центра была создана
                                    отчетная таблица в GoogleDocs – клиент сразу мог отслеживать работу в реальном
                                    времени и при необходимости оперативно подключаться.
                                </p>
                            </div>
                        </div>
                        <div className={`w-[80vw] max-sm:w-[90vw] flex mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px]`}>
                            <Image className={`w-full h-auto rounded-[50px] border-[13px] border-foreground`}
                                   src={`/LDPRPicture.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                        </div>
                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Результаты</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <ul className={`flex flex-col gap-[5px] `}>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Качественный обзвон получилось достичь за счет 2
                                        компонентов - сотрудники были с большим опытом продаж и обзвонов, а также были
                                        погружены в специфику. Это позволило оставить максимально лояльное впечатление о
                                        заказчике – call-центр мог ответить на вопросы о кандидатах партии, ее программе
                                        и целях, если вопросы были еще «глубже», то людей оперативно и корректно
                                        передавали заказчику.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Помимо переданных отчетов мы также предоставили
                                        заказчику несколько наших «эталонных» записей разговоров и свои коррективы
                                        скрипта для дальнейшего и еще более эффективного обзвона баз избирателей
                                        собственными силами партии.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Хотелось бы также отметить, что мы абсолютно нейтрально
                                        относимся к вопросам политики и работаем с любой партией, если конечно их
                                        действия не противоречат нашему законодательству :)</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Полностью
                                        решили все задачи клиента, которые были поставлены на старте проекта.</p></li>
                                </ul>
                            </div>
                        </div>
                        <ul className={`w-full relative flex items-start justify-start flex-wrap mx-[-30px] my-[45px] max-sm:mx-0 max-sm:block`}>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Продолжительность
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>2
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>дня
                                    </div>
                                </div>
                            </li>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Обзвон вели
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>4
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>эксперта
                                    </div>
                                </div>
                            </li>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Обработали
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>3105
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>людей
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <ul className={`flex p-casesFilterPadding pl-0 flex-wrap gap-2 gap-y-3`}>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Удаленный Call-центр
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Удаленный Call-центр
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Call-центр
                    </button>
                </li>
            </ul>
            <Order/>
        </>
    );
};

export default LDPR;