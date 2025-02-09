'use client'

import React, {useEffect, useState} from 'react';
import Order from "@/widgets/order/Order";
import Image from "next/image";

const DrMobile = () => {

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
                            <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading`}>Контекстная реклама для &quot;Dr. Mobile&quot;: <br/> 100 лидов в месяц
                                до <br/> реальных показателей</h2>
                            <Image
                                className={`w-[150px] h-[150px] 2xl:hidden max-2xl:mr-[35px] max-lg:mr-[5px] max-sm:mb-0 max-sm:hidden`}
                                src={`/DrMobileLogo.jpg`}
                                alt={`лого заказчика`}
                                width={180} height={180}/>
                        </div>

                        <ul className={`flex p-casesFilterPadding pl-0 flex-wrap gap-2 gap-y-3`}>
                            <li>
                                <button
                                    className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Контекстная реклама
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Маркетинговые исследования
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
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
                                src={`/DrMobileLogo.jpg`}
                                alt={`лого заказчика`}
                                width={250} height={250}/>

                            <div
                                className={`flex flex-col gap-[10px] justify-start text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    <span className={`text-mainColor font-bold mb-[20px]`}> Dr. Mobile </span> – это
                                    сеть сервисных центров по ремонту и выкупу любой электроники, по большей части
                                    оргтехники, мобильных телефонов и компьютеров. Сеть работает с 2010 года и радует
                                    своих клиентов доступными ценами и профессиональным подходом к ремонту любой
                                    сложности.
                                </p>
                                <p>
                                    К нам клиент обратился с задачей – обеспечить стабильный поток клиентов в свои
                                    сервисные центры посредством контекстной рекламы.
                                </p>
                            </div>
                        </div>
                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex mt-[100px] max-lg:mt-[30px] overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/6] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/DrMobilePicture1.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>
                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Подробнее о задаче</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    У Dr. Mobile уже был опыт ведения контекстной рекламы. Предыдущие специалисты
                                    предоставляли отчеты с большим количеством конверсий, но по факту отсутствовал поток
                                    новых клиентов.
                                </p>
                                <p>
                                    Причина была достаточно распространенная – конверсии были настроены на промежуточные
                                    действия клиентов, например, переход между страницами сайта, нажатие кнопки
                                    «оставить заявку», а не итоговый экран после заполненной формы и тому подобное. Как
                                    следствие, рекламная компания качественно не обучалась, бюджет тратился впустую.
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
                                    На старте работ мы проанализировали сайт заказчика, переработали весь контент –
                                    оформили картинки и разделы с описанием каждой услуги и УТП компании для повышения
                                    конверсии.
                                </p>
                                <p>
                                    Подключили сервис для глубокого анализа работы контекстной рекламы, а также обратный
                                    звонок для увеличения конверсии входящего клиентского потока на сайте.
                                </p>
                                <p>
                                    Наша цель – стабильный поток качественных конверсий по стоимости лида в районе 500
                                    рублей
                                </p>
                            </div>
                        </div>

                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/6] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/DrMobilePicture.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>

                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Результаты</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <ul className={`flex flex-col gap-[5px] `}>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Dr. Mobile не планирует останавливаться на текущих
                                        результатах – далее в планах развивать направление выкупа техники с нашей
                                        всесторонней помощью.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>После проведенных работ по качественной настройке,
                                        анализу контекстной рекламы и доработке сайта клиент стабильно получает 100
                                        заявок в месяц.</p></li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className={`w-[80vw] max-xl:w-[90vw] flex gap-[30px] mt-[45px] items-start justify-center flex-col max-lg:hidden`}>
                            <ul className={`flex gap-[19px] w-full`}>
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
                                        69 048 показов
                                    </p>
                                </li>
                                <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-end align-text-bottom`}>
                                        1 277 кликов
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
                                        1.85% CTR
                                    </p>
                                </li>
                                <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-end`}>
                                        60.515 руб. <br/> расход
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
                                        47.4 руб. <br/> цена клика
                                    </p>
                                </li>
                                <li className={`flex md:flex-col flex-1 h-[275px] justify-around`}>

                                    <p className={`font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] flex items-end`}>
                                        488.1 руб. <br/> цена цели
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
                                        18 заявок <br/>
                                        35 колбэков <br/>
                                        71 звонок
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


                        <ul className={`w-full relative flex items-start justify-start flex-wrap mx-[-30px] my-[45px] max-sm:mx-0 max-sm:block`}>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    CTR
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>1.85
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
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>124
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading big-hidden`}>штуки
                                    </div>
                                </div>
                            </li>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Цена лида
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>488.1
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>руб
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <ul className={`px-[15px] flex p-casesFilterPadding flex-wrap gap-2 gap-y-3`}>
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

export default DrMobile;