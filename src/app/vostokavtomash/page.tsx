'use client'

import React, {useEffect, useState} from 'react';
import Order from "@/widgets/order/Order";
import Image from "next/image";
import {useTheme} from "next-themes";

const VostokAvtoMash = () => {
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
                            <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading`}>+250% прибыли отдела продаж <br/> группы компаний &quot;ВостокАвтоМаш&quot;</h2>
                            <Image
                                className={`w-[150px] h-[150px] 2xl:hidden max-2xl:mr-[35px] max-lg:mr-[5px] max-sm:mb-0 max-sm:hidden`}
                                src={`/VostokAvtoMashLogo.png`}
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
                                    Маркетинговые исследования
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Обучение
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
                                src={`/VostokAvtoMashLogo.png`}
                                alt={`лого заказчика`}
                                width={250} height={250}/>

                            <div
                                className={`flex flex-col gap-[10px] justify-start text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    <span className={`text-mainColor font-bold mb-[20px]`}> ВостокАвтоМаш </span> – Это
                                    Хабаровская компания, занимающаяся производством и монтажом металлоконструкций,
                                    резервуаров, емкостей любых размеров и сложностей, вплоть до контейнерных АЗС.
                                </p>
                                <p>
                                    К нам клиент обратился с несколькими задачами: <br/>
                                    1. Создать и довести до эффективных результатов отдел продаж «с нуля» по новым
                                    направлениям деятельности – производство банных чанов, мебели в стиле «Лофт», теплиц
                                    и металлоконструкций.<br/>
                                    2. Вывести показатели действующего отдела продаж по резервуарам и емкостям на новый
                                    уровень, проработать зоны роста руководства и сотрудников отдела продаж
                                </p>
                            </div>
                        </div>
                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex mt-[100px] max-lg:mt-[30px] overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/6] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/VostokAvtoMashPicture.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>
                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Подробнее о задаче</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Помимо вакансий в будущем новом отделе продаж компании был запрос на подбор
                                    сотрудников на рабочие должности в производственный цех.
                                </p>
                                <p>
                                    Инструменты и задачи руководства отделом продаж необходимо было передать двум
                                    соучредителям, а также обучить их всему арсеналу инструментов эффективного РОПа
                                    (руководителя отдела продаж), т.к. ранее такой опыт был только в рамках «полевого
                                    самообучения».
                                </p>
                                <p>
                                    Также в ходе аудита действующего отдела продаж были выявлены «зоны роста» в рамках
                                    работы с CRM Bitrix24, отчетностью и направлением «холодного обзвона» потенциальных
                                    клиентов компании.
                                </p>
                            </div>
                        </div>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>План работы</h2>

                            <div className={`w-full flex gap-[20px] items-start justify-center flex-col`}>
                                <ul className={`flex w-full flex-col gap-[5px]`}>
                                    <li className={`flex gap-[10px] flex-1`}>

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

                                        <p className={`font-normal text-[22px] max-md:text-[18px] max-sm:text-[16px] lg:leading-[34px] leading-[22px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Разработка всей необходимой документации по Отделам продаж клиента:
                                            должностные инструкции, мотивация сотрудников, процедура ввода в должность,
                                            формы отчетности и руководства по работе отдела продаж со всеми скриптами
                                            обзвонов, презентаций и необходимыми материалами.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[10px] flex-1`}>

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

                                        <p className={`font-normal text-[22px] max-md:text-[18px] max-sm:text-[16px] lg:leading-[34px] leading-[22px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Описание всего бизнес-процесса «подбора персонала» в компании заказчика,
                                            поиск HR-менеджера, обучение/передача и контроль работы всего
                                            инструментария.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[10px] flex-1`}>

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

                                        <p className={`font-normal text-[22px] max-md:text-[18px] max-sm:text-[16px] lg:leading-[34px] leading-[22px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Закрытие всех открытых вакансий в рамках отдела продаж и производства.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[10px] flex-1`}>

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

                                        <p className={`font-normal text-[22px] max-md:text-[18px] max-sm:text-[16px] lg:leading-[34px] leading-[22px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            «Полевое сопровождение» и обучение отдела продаж, внедрение
                                            инструментария/контроль выполнения поставленных планов продаж.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[10px] flex-1`}>

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

                                        <p className={`font-normal text-[22px] max-md:text-[18px] max-sm:text-[16px] lg:leading-[34px] leading-[22px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Работа с действующим отделом продаж, доработка всей существующей
                                            документации отдела продаж, «полевое сопровождение», выявление и устранение
                                            «слабых зон» и доведение до поставленных результатов.
                                        </p>

                                    </li>
                                    <li className={`flex gap-[10px] flex-1`}>

                                        <div
                                            className={`flex items-center flex-col gap-[5px]`}>

                                            <div
                                                className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                                <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                    6
                                                </p>
                                            </div>

                                        </div>

                                        <p className={`font-normal text-[22px] max-md:text-[18px] max-sm:text-[16px] lg:leading-[34px] leading-[22px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                            Срез знаний сотрудников отделов продаж и руководства, анализ полученных
                                            результатов по проекту
                                        </p>

                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Результаты</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <ul className={`flex flex-col gap-[5px] `}>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>По итогам работы в 6 месяцев было запущено 3 полноценных
                                        работающих направления в группе компаний заказчика. Направление с мебелью в
                                        стиле «Лофт» оказалось самым не окупаемым, но приносящим больше всего «хлопот»
                                        производству, поэтому это направление было решено далее не развивать, а
                                        сфокусироваться на всех остальных более эффективных направлениях.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Интересно было увидеть, что наша работа по отделам
                                        продаж может быть также направлена на «тестирование ниши» - заказчик с нашей
                                        помощью проверил гипотезы по новым направлениям деятельности, а по
                                        неэффективному направлению просто перераспределил менеджеров на другие
                                        направления</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>В качестве обучения собственников был задействован
                                        разработанный нами online-курс «Отдел продаж на миллион», который также в
                                        свободное время изучали менеджеры отдела продаж – процесс внедрения всех
                                        разработанных инструментов прошел еще более быстро и качественно, online-курс
                                        отлично закрыл все «зоны роста» сотрудников.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Мы сталкиваемся с этим постоянно – а вот заказчик и его
                                        сотрудники были сильно удивлены, что качественно обученные менеджеры способны
                                        генерировать такой поток заявок, что производству пришлось выходить во вторую
                                        ночную смену. Но это уже стало значительно меньшей проблемой, чем вопрос с
                                        поиском новых клиентов для бизнеса</p></li>
                                </ul>
                            </div>
                        </div>

                        <ul className={`w-full relative flex items-start justify-start flex-wrap mx-[-30px] my-[45px] max-sm:mx-0 max-sm:block`}>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Оборот был
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>200
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>млн
                                    </div>
                                </div>
                            </li>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Оборот стал
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>500
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>млн
                                    </div>
                                </div>
                            </li>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Рост
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>250
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>%
                                    </div>
                                </div>
                            </li>
                        </ul>


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
                                            <Image className={`rounded-[50%] max-md:w-[60px] max-md:h-[60px] ${theme == 'dark' ? 'invert' : ''}`}
                                                   src={`/VostokAvtoMashDirector.jpg`}
                                                   alt={`фото клиента`}
                                                   width={75} height={75}/>
                                            <div className={`flex flex-col justify-center`}>
                                                <p className={`mb-[5px] text-[14px]`}>Фирсов Светозар</p>
                                                <p className={`text-[12px] text-gray-500`}>Генеральный директор &quot;ВостокАвтоМаш&quot;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className={`flex w-4/6 max-md:w-full`}>
                                    <p className={`w-full text-[22px] max-xl:text-[18px] max-sm:text-[16px] max-md:w-full mb-[25px] max-md:mb-0`}>Компания &quot;LV GROUP&quot; сама вышла на нас с помощью холодного обзвона, что сразу нас сильно подкупило.
                                        Благодаря команде &quot;LV GROUP&quot; мы стали группой компаний и расширились до 3-ех направлений и оборота в 500млн/год.
                                        Особенно полезным лично для себе могу выделить ввод ежедневной отчетности и единого формата ежедневных/еженедельных планерок отдела продаж.</p>
                                </div>


                            </div>

                            <div className={`h-[1px] bg-foreground w-full`}></div>
                            <div className={`h-[1px] bg-foreground w-full mt-[30px]`}></div>
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
                        Маркетинговые исследования
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Обучение
                    </button>
                </li>
            </ul>
            <Order/>
        </>
    );
};

export default VostokAvtoMash;