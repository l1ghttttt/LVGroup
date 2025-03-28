'use client'

import React, {useEffect, useState} from 'react';
import Order from "@/components/order/Order";
import Image from "next/image";

const ToothFairy = () => {
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
                            <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading`}>&quot;Зубная
                                Фея&quot;: от 5000 лидов в отчете <br/> и отсутствия клиентов
                                до <br/> реальных показателей</h2>
                            <Image
                                className={`w-[150px] h-[150px] 2xl:hidden max-2xl:mr-[35px] max-lg:mr-[5px] max-sm:mb-0 max-sm:hidden`}
                                src={`/ToothFairyLogo.jpg`}
                                alt={`лого заказчика`}
                                width={180} height={180}/>
                        </div>

                        <ul className={`flex p-casesFilterPadding pl-0 flex-wrap gap-2 gap-y-3`}>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Контекстная реклама
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Маркетинговые исследования
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Реклама
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
                                src={`/ToothFairyLogo.jpg`}
                                alt={`лого заказчика`}
                                width={250} height={250}/>

                            <div
                                className={`flex flex-col gap-[10px] justify-start text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    <span className={`text-mainColor font-bold mb-[20px]`}> Зубная Фея </span> – это
                                    семейная стоматология в г. Хабаровске для детей и взрослых, предлагающая клиентам
                                    профессиональные услуги лучших стоматологов города. Они проводят безболезненное и
                                    безопасное лечение с помощью современного оборудования по наиболее доступным ценам в
                                    регионе.
                                </p>
                                <p>
                                    К нам клиент обратился с задачей – обеспечить стабильный поток клиентов посредством
                                    контекстной рекламы с понятными, прозрачными и реальными отчетами по итогам каждого
                                    месяца работ.
                                </p>
                            </div>
                        </div>
                        <div className={`w-[100vw] max-2xl:w-[100vw] flex mt-[100px] max-lg:mt-[30px] overflow-hidden`}>
                            <Image className={`w-full aspect-[16/6] max-sm:aspect-[16/9] object-cover`}
                                   src={`/ToothFairyPicture1.jpg`} alt={`картинка`} width={1600}
                                   height={900}/>
                        </div>
                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Подробнее о задаче</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    У клиники уже был опыт ведения контекстной рекламы. Предыдущие специалисты
                                    предоставляли отчеты с 5000 конверсий/месяц, но по факту новых клиентов не было
                                    вообще.
                                </p>
                                <p>
                                    Настоящую причину мы узнать не сможем никогда, т.к. недобросовестный исполнитель
                                    отказался давать доступ в рекламный кабинет клиента, сославшись на секретность
                                    собственных наработок. Однако, мы можем предположить, что конверсии были настроены
                                    на промежуточные действия клиентов, например, переход между страницами сайта,
                                    нажатие кнопки «оставить заявку», а не итоговый экран после заполненной формы и тому
                                    подобное. Как следствие, рекламная компания качественно не обучалась, бюджет
                                    тратился впустую.
                                </p>
                                <p>
                                    Более того – на формах обратной связи были обязательными поля – ФИО, почта, телефон,
                                    время приема, комментарии и опционально выбор врача. Естественно конверсия по
                                    заполнению таких форм была нулевая.
                                </p>
                            </div>
                        </div>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Подготовка к рекламной
                                компании</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    На старте работ мы проанализировали сайт заказчика, привели его в соответствие по
                                    требованиям к мед. учреждениям, совместно проработали УТП для целевой аудитории.
                                </p>
                                <p>
                                    Подключили сервис для глубокого анализа работы контекстной рекламы, а также обратный
                                    звонок для увеличения конверсии входящего клиентского потока на сайте.
                                </p>
                                <p>
                                    Наша цель – стабильный поток качественных конверсий по стоимости лида в районе 1000
                                    рублей.
                                </p>
                            </div>
                        </div>


                        <div className={`w-[80vw] max-sm:w-[90vw] flex mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px]`}>
                            <Image className={`w-full h-auto rounded-[50px] border-[13px] border-foreground`}
                                   src={`/ToothFairyPicture.jpg`} alt={`картинка`} width={1600}
                                   height={900}/>
                        </div>
                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Результаты</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <ul className={`flex flex-col gap-[5px] `}>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Зубная фея на данный момент получает порядка 50-60
                                        качественных лидов в месяц, естественно такие заявки окупают затраты на
                                        контекстную рекламу, а также позволяют подключать дополнительные направления
                                        траффика – например, наружную рекламу и SMM.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Установили
                                        дополнительные сервисы для улучшения эффективности контекстной рекламы.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Помимо контекстной рекламы взяли в работу направление
                                        SMM и обязательно об этом расскажем в отдельном кейсе!</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Полностью
                                        решили все задачи клиента, которые были поставлены на старте проекта.</p></li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className={`w-[80vw] max-xl:w-[90vw] flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col max-lg:hidden`}>
                            <ul className={`flex gap-[19px] w-full max-md:flex-col max-md:gap-[9px]`}>
                                <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-end`}>

                                    </p>

                                    <div
                                        className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                        <div
                                            className={`w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                            <p className={`font-normal text-[32px] max-md:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>1</p>
                                        </div>

                                        <div
                                            className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                            <div className={`customBorder`}></div>
                                        </div>
                                    </div>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex flex-col items-start align-text-top`}>
                                        10 038 показов
                                    </p>
                                </li>
                                <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-end align-text-bottom`}>
                                        480 кликов
                                    </p>

                                    <div
                                        className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                        <div
                                            className={`w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                            <p className={`font-normal text-[32px] max-md:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>2</p>
                                        </div>

                                        <div
                                            className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                            <div className={`customBorder`}></div>
                                        </div>

                                    </div>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-start w-[125%]`}>

                                    </p>
                                </li>
                                <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-end`}>

                                    </p>

                                    <div
                                        className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                        <div
                                            className={`w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                            <p className={`font-normal text-[32px] max-md:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>3</p>
                                        </div>

                                        <div
                                            className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                            <div className={`customBorder`}></div>
                                        </div>
                                    </div>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-start w-[125%]`}>
                                        4.78% CTR
                                    </p>
                                </li>
                                <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-end`}>
                                        46.379 руб. <br/> расход
                                    </p>

                                    <div
                                        className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                        <div
                                            className={`w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                            <p className={`font-normal text-[32px] max-md:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>4</p>
                                        </div>

                                        <div
                                            className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                            <div className={`customBorder`}></div>
                                        </div>
                                    </div>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-start w-[125%]`}>

                                    </p>

                                </li>
                                <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-end`}>

                                    </p>

                                    <div
                                        className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                        <div
                                            className={`w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                            <p className={`font-normal text-[32px] max-md:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>5</p>
                                        </div>

                                        <div
                                            className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                            <div className={`customBorder`}></div>
                                        </div>
                                    </div>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-start w-[125%]`}>
                                        96.6 руб. <br/> цена клика
                                    </p>
                                </li>
                                <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-end`}>
                                        986.7 руб. <br/> цена цели
                                    </p>

                                    <div
                                        className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                        <div
                                            className={`w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                            <p className={`font-normal text-[32px] max-md:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>6</p>
                                        </div>

                                        <div
                                            className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                            <div className={`customBorder`}></div>
                                        </div>
                                    </div>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-start w-[125%]`}>
                                    </p>
                                </li>
                                <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-end`}>
                                    </p>

                                    <div
                                        className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                        <div
                                            className={`w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                            <p className={`font-normal text-[32px] max-md:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>7</p>
                                        </div>
                                    </div>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-start w-[125%]`}>
                                        1 заявка <br/>
                                        7 колбэков <br/>
                                        39 звонков
                                    </p>
                                </li>
                            </ul>
                        </div>

                        <div
                            className={`w-[80vw] max-xl:w-[90vw] flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col lg:hidden`}>
                            <ul className={`flex gap-[19px] w-full max-lg:flex-col max-lg:gap-[9px]`}>
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
                                        10 038 показов
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
                                        480 кликов
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
                                        4.78% CTR
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
                                        46.379 руб. расход
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
                                        96.6 руб. цена клика
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
                                        986.7 руб. цена цели
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
                                        1 заявка, 7 колбэков , 39 звонков
                                    </p>

                                </li>
                            </ul>
                        </div>


                        <ul className={`w-full relative flex items-start justify-start flex-wrap mx-[-30px] my-[45px] max-sm:mx-0 max-sm:block`}>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    CTR
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>4.78
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>%
                                    </div>
                                </div>
                            </li>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Всего конверсий
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>47
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>штук
                                    </div>
                                </div>
                            </li>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Цена лида
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>986.8
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>руб
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
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
                                        <Image
                                            className={`rounded-[50%] max-md:w-[60px] max-md:h-[60px`}
                                            src={`/VostokAvtoMashDirector.jpg`}
                                            alt={`фото клиента`}
                                            width={75} height={75}/>
                                        <div className={`flex flex-col justify-center`}>
                                            <p className={`mb-[5px] text-[14px]`}>Екатерина Виноградова</p>
                                            <p className={`text-[12px] text-gray-500`}>Генеральный
                                                директор &quot;Зубная фея&quot;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={`flex w-4/6 max-md:w-full`}>
                                <p className={`w-full text-[22px] max-xl:text-[18px] max-sm:text-[16px] max-md:w-full mb-[25px] max-md:mb-0`}>Борис,
                                    хочу поблагодарить вас за совместную работу. Особенно хочу отметить креативность,
                                    юмор и находчивость.
                                    Всегда было интересно работать с вами над созданием контента. А самое главное, что
                                    работа принесла результат - увеличение количества подписчиков с нескольких человек
                                    до нескольких сотен активных и вовлеченных поклонников нашего контента.
                                    Точно буду рекомендовать вас своим коллегам.</p>
                            </div>


                        </div>

                        <div className={`h-[1px] bg-foreground w-full`}></div>
                        <div className={`h-[1px] bg-foreground w-full mt-[30px]`}></div>
                    </div>
                </div>
            </section>
            <ul className={`flex p-casesFilterPadding px-[15px] flex-wrap gap-2 gap-y-3`}>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Удаленный Call-центр
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Удаленный Call-центр
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Call-центр
                    </button>
                </li>
            </ul>
            <Order/>
        </>
    );
};

export default ToothFairy;