'use client'

import React, {useEffect, useState} from 'react';
import Order from "@/components/order/Order";
import Image from "next/image";
import {useTheme} from "next-themes";

const ChillHouse = () => {
    const { theme } = useTheme();
    useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <section className={`w-full overflow-x-hidden`}>
                <div className={`flex flex-col`}>
                    <div className={`p-servicesTitlePadding`}>
                        <div className={`flex justify-between`}>
                            <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading max-lg:hidden`}>Продажи,
                                Маркетинг, HR <br/> и операционное управление <br/> в сети кальянных <span
                                    className={`whitespace-nowrap`}>&quot;Чилл Хаус&quot;</span></h2>
                            <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading lg:hidden`}>Продажи,
                                Маркетинг, HR и операционное управление в сети кальянных <span className={`whitespace-nowrap`}>&quot;Чилл Хаус&quot;</span></h2>
                            <Image
                                className={`w-[150px] h-[150px] 2xl:hidden max-2xl:mr-[35px] max-lg:mr-[5px] max-sm:mb-0 max-sm:hidden ${theme == 'dark' ? 'invert' : ''}`}
                                src={`/ChillHouseLogoMin.png`}
                                alt={`лого заказчика`}
                                width={180} height={180}/>
                        </div>

                        <ul className={`flex p-casesFilterPadding pl-0 flex-wrap gap-2 gap-y-3`}>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Отдел продаж
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Создание контента
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Обучение
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    SMM
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Дизайн
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
                                className={`w-[250px] 2xl:absolute 2xl:top-0 2xl:w-customerImageWidth pr-[20px] max-2xl:hidden max-sm:mb-0 max-sm:block max-sm:w-3/4 h-auto CustomerImage max-sm:pr-0 ${theme == 'dark' ? 'invert' : ''}`}
                                src={`/ChillHouseLogo.png`}
                                alt={`лого заказчика`}
                                width={250} height={250}/>

                            <div
                                className={`flex flex-col gap-[10px] justify-start text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    <span className={`text-mainColor font-bold mb-[20px]`}> Чилл Хаус </span> – это сеть
                                    из 4-ех кальянных, отличающихся по своей атмосфере и интерьеру. Философия всей сети
                                    не ограничивается только кальянами, в первую очередь – это про качественный отдых
                                    каждого гостя!
                                </p>
                                <p>
                                    К нам клиент обратился с несколькими задачами: <br/>
                                    1. Необходимо прописать, научить и внедрить качественную проработку каждого гостя
                                    сети заведений – входящие звонки, прием заказа, презентация сети и звонки «сервиса»
                                    с приглашением в новое заведение сети.<br/>
                                    2. Подключить и настроить работу с iiko – в рамках формирование общей базы гостей,
                                    RFM-анализа и рассылок, подключить iiko Wallet. <br/>
                                    3. Закрыть вопрос с подбором персонала для всей сети заведений – научить набирать
                                    персонал управляющих, закрыть все вакансии на предприятиях. <br/>
                                    4. Сделать так, чтобы задачи собственника, переданные управляющим, контролировались
                                    и выполнялись.
                                </p>
                            </div>
                        </div>
                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex mt-[100px] max-lg:mt-[30px] overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/6] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/ChillHousePicture.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>
                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Подробнее о задаче</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Помимо озвученных задач, встал вопрос с оформлением презентации всей сети заведений,
                                    которую можно размещать на всевозможных площадках и отправлять гостям в
                                    мессенджерах.
                                </p>
                                <p>
                                    Также в ходе &quot;полевой&quot; работы встал вопрос с качественным обучением и
                                    вводом в должность новых сотрудников сети заведений – не было единого плана обучения
                                    и итогового среза знаний, а также должностных инструкций и прописанных регламентов.
                                </p>
                            </div>
                        </div>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>План работы</h2>

                            <div className={`w-full flex gap-[20px] items-start justify-center flex-col`}>
                                <ul className={`flex w-full flex-col gap-[5px]`}>
                                    <li className={`flex gap-[20px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    1
                                                </p>
                                            </div>

                                            <div
                                                className={`relative flex-1 border-t-[0px] min-h-[40px] w-[2px]`}>
                                                <div className={`customBorder-y`}></div>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[18px] max-md:text-[18px] max-sm:text-[14px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Разработка руководства по подбору персонала во всей сети заведений. Передача
                                            инструментов закрепленному менеджеру и управляющим. Итог задачи – закрытие
                                            всех вакансий силами ответственных за задачу сотрудников предприятия, а
                                            также ежедневная отчетность собственнику по воронке подбора кандидатов
                                            (сколько обзвонено, сколько назначено собеседований, сколько вышло на
                                            стажировку, сколько вышло на работу).
                                        </p>
                                    </li>
                                    <li className={`flex gap-[20px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    2
                                                </p>
                                            </div>

                                            <div
                                                className={`relative flex-1 border-t-[0px] min-h-[40px] w-[2px]`}>
                                                <div className={`customBorder-y`}></div>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[18px] max-md:text-[18px] max-sm:text-[14px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Разработка скриптов приема входящих звонков, презентации сети заведений
                                            гостям, регламент передачи броней на другие предприятия в случае
                                            невозможности посадки. Для контроля качества подключить запись звонков во
                                            всей сети заведений и создать форму отчетности для управляющих.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[20px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    3
                                                </p>
                                            </div>

                                            <div
                                                className={`relative flex-1 border-t-[0px] min-h-[40px] w-[2px]`}>
                                                <div className={`customBorder-y`}></div>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[18px] max-md:text-[18px] max-sm:text-[14px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Для вновь принятых сотрудников, разработка – анкеты, плана обучения,
                                            итогового среза знаний, пакета документов для передачи в бухгалтерию для
                                            оформления кандидатов по трудовому договору.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[20px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    4
                                                </p>
                                            </div>

                                            <div
                                                className={`relative flex-1 border-t-[0px] min-h-[40px] w-[2px]`}>
                                                <div className={`customBorder-y`}></div>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[18px] max-md:text-[18px] max-sm:text-[14px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Разработать презентацию всей сети заведений, меню, тейбл-тенты с актуальными
                                            акциями заведений на столах.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[20px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    5
                                                </p>
                                            </div>

                                            <div
                                                className={`relative flex-1 border-t-[0px] min-h-[40px] w-[2px]`}>
                                                <div className={`customBorder-y`}></div>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[18px] max-md:text-[18px] max-sm:text-[14px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Проработать все справочники и внести информацию о сети заведений на всех
                                            информационных площадках (т.к. контекстная реклама кальянной индустрии
                                            запрещена).
                                        </p>

                                    </li>
                                    <li className={`flex gap-[20px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    6
                                                </p>
                                            </div>

                                            <div
                                                className={`relative flex-1 border-t-[0px] min-h-[40px] w-[2px]`}>
                                                <div className={`customBorder-y`}></div>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[18px] max-md:text-[18px] max-sm:text-[14px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Разработать формы отчетности для управляющих, внедрить еженедельные планерки
                                            в формате Цель - Задача - Дедлайн - Итог.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[20px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    7
                                                </p>
                                            </div>

                                            <div
                                                className={`relative flex-1 border-t-[0px] min-h-[40px] w-[2px]`}>
                                                <div className={`customBorder-y`}></div>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[18px] max-md:text-[18px] max-sm:text-[14px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Подключить iiko wallet, RFM-анализ, рассылки с push-уведомлениями гостям о
                                            новых предложениях, обучить работе с программой управленческий состав
                                            компании.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[20px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    8
                                                </p>
                                            </div>

                                            <div
                                                className={`relative flex-1 border-t-[0px] min-h-[40px] w-[2px]`}>
                                                <div className={`customBorder-y`}></div>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[18px] max-md:text-[18px] max-sm:text-[14px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Для звонков сервиса – разработать скрипт, должностную инструкцию менеджера,
                                            регламент работы с социальными сетями и форму отчетности собственнику.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[20px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    9
                                                </p>
                                            </div>

                                            <div
                                                className={`relative flex-1 border-t-[0px] min-h-[40px] w-[2px]`}>
                                                <div className={`customBorder-y`}></div>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[18px] max-md:text-[18px] max-sm:text-[14px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Создать форму отчетности для контроля сервиса в заведениях для
                                            ответственного менеджера.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[20px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    10
                                                </p>
                                            </div>

                                            <div
                                                className={`relative flex-1 border-t-[0px] min-h-[40px] w-[2px]`}>
                                                <div className={`customBorder-y`}></div>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[18px] max-md:text-[18px] max-sm:text-[14px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Провести срез знаний у действующих сотрудников сети и выявить зоны роста, а
                                            также запланировать график обучения по всем предприятиям.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[20px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    11
                                                </p>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[18px] max-md:text-[18px] max-sm:text-[14px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Создать на одном из предприятий компьютерный клуб «под ключ» - подключение
                                            программного обеспечения LANGAME и RentalGames, оснащение компьютерами и
                                            периферией, столами, освещением и лицензионным софтом. Проработать вопросы с
                                            электрикой, сантехникой, ремонтом помещения, камерами, сервером и
                                            провайдерами услуг сети.
                                        </p>

                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className='case-gallery-vertical mt-[45px] max-lg:mt-[20px] max-xl:hidden'>
                            <Image className={`w-full h-auto`}
                                   src={`/ChillHousePicture1.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                            <Image className={`w-full h-auto`}
                                   src={`/ChillHousePicture2.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                            <Image className={`w-full h-auto`}
                                   src={`/ChillHousePicture3.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                            <Image className={`w-full h-auto`}
                                   src={`/ChillHousePicture4.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                            <Image className={`w-full h-auto`}
                                   src={`/ChillHousePicture5.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                            <Image className={`w-full h-auto`}
                                   src={`/ChillHousePicture6.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                        </div>

                        <div className={`w-[100vw] xl:hidden flex flex-wrap mt-[45px] max-lg:mt-[20px]`}>
                            <div
                                className={`max-xl:w-[50vw] max-sm:w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                                <Image
                                    className={`w-full object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                    src={`/ChillHousePicture1.jpg`} alt={`картинка`} width={1600}
                                    height={900}/>
                            </div>
                            <div
                                className={`max-xl:w-[50vw] max-sm:w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                                <Image
                                    className={`w-full object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                    src={`/ChillHousePicture2.jpg`} alt={`картинка`} width={1600}
                                    height={900}/>
                            </div>
                            <div
                                className={`max-xl:w-[50vw] max-sm:w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                                <Image
                                    className={`w-full object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                    src={`/ChillHousePicture3.jpg`} alt={`картинка`} width={1600}
                                    height={900}/>
                            </div>
                            <div
                                className={`max-xl:w-[50vw] max-sm:w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                                <Image
                                    className={`w-full object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                    src={`/ChillHousePicture4.jpg`} alt={`картинка`} width={1600}
                                    height={900}/>
                            </div>
                            <div
                                className={`max-xl:w-[50vw] max-sm:w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                                <Image
                                    className={`w-full object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                    src={`/ChillHousePicture5.jpg`} alt={`картинка`} width={1600}
                                    height={900}/>
                            </div>
                            <div
                                className={`max-xl:w-[50vw] max-sm:w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                                <Image
                                    className={`w-full object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                    src={`/ChillHousePicture6.jpg`} alt={`картинка`} width={1600}
                                    height={900}/>
                            </div>
                        </div>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Результаты</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <ul className={`flex flex-col gap-[5px] `}>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>По итогам работы в 10 месяцев были закрыты все
                                        поставленные задачи и открыт компьютерный клуб в одном из заведений сети.
                                        Закрыли все вакансии сети заведений – кальянные мастера, раннеры (сотрудники
                                        кухни), был найден эффективный управляющий для одного из заведений.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Интересно было увидеть, что наша работа по отделам
                                        продаж может быть также направлена на «тестирование ниши» - заказчик с нашей
                                        помощью проверил гипотезы по новым направлениям деятельности, а по
                                        неэффективному направлению просто перераспределил менеджеров на другие
                                        направления.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Все регламенты, скрипты и руководства были загружены на
                                        общий диск компании для эффективной работы сотрудников сети.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Все отчетные формы сформированы на диске для ежедневной,
                                        еженедельной отчетности перед собственником компании.</p></li>
                                </ul>
                            </div>
                        </div>

                        <ul className={`w-full relative flex items-end justify-start flex-wrap mx-[-30px] my-[45px] max-sm:mx-0 max-sm:block`}>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Новые гости <span className={`whitespace-nowrap`}>(в мес.)</span>
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>100
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading big-hidden`}>Гостей
                                    </div>
                                </div>
                            </li>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Подбор <span className={`whitespace-nowrap`}>(в мес.)</span>
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>5
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>стажеров
                                    </div>
                                </div>
                            </li>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Рост оборота
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>50
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>%
                                    </div>
                                </div>
                            </li>
                        </ul>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Общие выводы</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <ul className={`flex flex-col gap-[5px] `}>
                                    <li className={`pl-[25px] relative`}>
                                        <p className={`text-[16px] conclusion`}>01</p>
                                        <p className={`my-[20px]`}>Занесение сети заведений во все справочники дало
                                        отличный приток приезжих гостей, которые часто пользуются Zoon, DVHAB,
                                        Яндекс-Гугл картами, TripAdvisor итд, а не только привычный многим 2ГИС.</p>
                                    </li>
                                    <li className={`pl-[25px] relative`}>
                                        <p className={`text-[16px] conclusion`}>02</p>
                                        <p className={`my-[20px]`}>Правильное позиционирование заведений не только как
                                            кальянные, привело поток гостей, любящих настольные игры, фильмы, покер,
                                            игры на
                                            PS и т.д.</p>
                                    </li>
                                    <li className={`pl-[25px] relative`}>
                                        <p className={`text-[16px] conclusion`}>03</p>
                                        <p className={`my-[20px]`}>Было действительно интересно включиться в задачи
                                            «стройки» - правильная постановка задач и контроль дали отличные результаты
                                            быстрого открытия нового направления - компьютерного клуба.</p>
                                    </li>
                                    <li className={`pl-[25px] relative`}>
                                        <p className={`text-[16px] conclusion`}>04</p>
                                        <p className={`my-[20px]`}>Качественное обучение и контроль сотрудников компании
                                            увеличили лояльность гостей и, конечно же, выручку всей сети.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div
                            className={`w-full flex flex-col gap-[25px] mt-[45px] max-lg:gap-[20px]  max-md:justify-end max-lg:mt-[20px] items-start`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Отзыв клиента</h2>
                            <div className={`h-[1px] bg-foreground w-full`}></div>


                            <div
                                className={`w-full flex max-lg:gap-[20px] max-lg:mt-[10px] max-md:gap-0 max-md:flex-col`}>


                                <div
                                    className={`flex w-2/6 max-md:w-full flex-col justify-between pt-3 max-md:order-2 max-md:pt-2`}>
                                    <Image className={`rotate-180 max-md:hidden`} src={'/arrows.png'} alt={`arrows`}
                                           width={50}
                                           height={50}/>
                                    <div className={`w-full flex justify-start max-md:justify-end`}>
                                        <div className={`flex gap-[10px]`}>
                                            <Image className={`rounded-[50%] max-md:w-[60px] max-md:h-[60px]`}
                                                   src={`/VostokAvtoMashDirector.jpg`}
                                                   alt={`фото клиента`}
                                                   width={75} height={75}/>
                                            <div className={`flex flex-col justify-center`}>
                                                <p className={`mb-[5px] text-[14px]`}>Фирсов Светозар</p>
                                                <p className={`text-[12px] text-gray-500`}>Генеральный
                                                    директор &quot;ВостокАвтоМаш&quot;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className={`flex w-4/6 max-md:w-full`}>
                                    <p className={`w-full text-[22px] max-xl:text-[18px] max-sm:text-[16px] max-md:w-full mb-[25px] max-md:mb-0`}>Компания &quot;LV
                                        GROUP&quot; сама вышла на нас с помощью холодного обзвона, что сразу нас сильно
                                        подкупило.
                                        Благодаря команде &quot;LV GROUP&quot; мы стали группой компаний и расширились
                                        до 3-ех направлений и оборота в 500млн/год.
                                        Особенно полезным лично для себе могу выделить ввод ежедневной отчетности и
                                        единого формата ежедневных/еженедельных планерок отдела продаж.</p>
                                </div>


                            </div>

                            <div className={`h-[1px] bg-foreground w-full`}></div>
                        </div>

                    </div>
                </div>
            </section>
            <ul className={`px-[15px] flex p-casesFilterPadding flex-wrap gap-2 gap-y-3`}>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Отдел продаж
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Создание контента
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Обучение
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        SMM
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Дизайн
                    </button>
                </li>
            </ul>
            <Order/>
        </>
    );
};

export default ChillHouse;