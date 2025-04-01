import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerPhoto from "@/components/for-cases/customer-photo/Customer-photo";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";

const tagsList = [
    "Контекстная реклама",
    "Маркетинговые исследования",
    "Реклама",
]

const DrMobile = () => {
    return (
        <>
            <section className={`w-full overflow-x-hidden`}>
                <div className={`flex flex-col`}>
                    <CustomerInfo
                        title={`Контекстная реклама для "Dr. Mobile" 100 лидов в месяц`}
                        logo={`DrMobileLogo.png`}
                        tags={tagsList}
                        descriptions={[
                            "Dr. Mobile – это сеть сервисных центров по ремонту и выкупу любой электроники, по большей части оргтехники, мобильных телефонов и компьютеров. Сеть работает с 2010 года и радуетсвоих клиентов доступными ценами и профессиональным подходом к ремонту любой сложности.",
                            "К нам клиент обратился с задачей – обеспечить стабильный поток клиентов в свои сервисные центры посредством контекстной рекламы."
                        ]}
                    />
                    <div
                        className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                        <CustomerPhoto
                            full={true}
                            photo={`DrMobilePicture1.jpg`}
                        />
                        <CustomerText
                            title={`Подробнее о задаче`}
                            defaultText={[
                                "У Dr. Mobile уже был опыт ведения контекстной рекламы. Предыдущие специалисты предоставляли отчеты с большим количеством конверсий, но по факту отсутствовал поток новых клиентов.",
                                "Причина была достаточно распространенная – конверсии были настроены на промежуточные действия клиентов, например, переход между страницами сайта, нажатие кнопки «оставить заявку», а не итоговый экран после заполненной формы и тому подобное. Как следствие, рекламная компания качественно не обучалась, бюджет тратился впустую.",
                            ]}
                        />
                        <CustomerText
                            title={`Подготовка к рекламной компании`}
                            defaultText={[
                                "На старте работ мы проанализировали сайт заказчика, переработали весь контент – оформили картинки и разделы с описанием каждой услуги и УТП компании для повышения конверсии.",
                                "Подключили сервис для глубокого анализа работы контекстной рекламы, а также обратный звонок для увеличения конверсии входящего клиентского потока на сайте.",
                                "Наша цель – стабильный поток качественных конверсий по стоимости лида в районе 500 рублей"
                            ]}
                        />
                        <CustomerPhoto
                            full={true}
                            photo={`DrMobilePicture.jpg`}
                        />
                        <CustomerText
                            title={`Результаты`}
                            numberText={[
                                "Dr. Mobile не планирует останавливаться на текущих результатах – далее в планах развивать направление выкупа техники с нашей всесторонней помощью.",
                                "После проведенных работ по качественной настройке, анализу контекстной рекламы и доработке сайта клиент стабильно получает 100 заявок в месяц.",
                            ]}
                        />



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
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>
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

export default DrMobile;