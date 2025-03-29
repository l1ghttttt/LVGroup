'use client'

import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import Image from "next/image";
import Order from "@/components/order/Order";
import CasesList from "@/components/cases-list/Cases-list";

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


                <section className={`px-WebsiteCreatingWelcomePaddingX w-full flex flex-col items-center`}>
                    <div
                        className={`xl:flex xl:items-start xl:justify-start flex-col w-OrderedListWidth max-w-[1200px] mt-[150px]`}>
                        <h2 className={`mb-OrderedListHeadingMargin font-normal text-customerTitleSize leading-customerTitleLeading`}>Как
                            мы работаем</h2>
                        <div className={`w-full xl:shrink-0`}>
                            <p className={`max-w-[1200px] text-OrderedListDescrSize leading-OrderedListDescrLeading flex flex-col justify-start items-stretch flow mb-OrderedListDescrMargin`}>
                                От вашей идеи до пошагового плана реализации совместного и успешного проекта.
                            </p>
                        </div>
                        <ul>
                            <li className={`website-creating-list-item list-item-full `}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number  `}>01
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Встреча
                                    и планирование реализации проекта</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}></p>
                            </li>
                            <li className={`website-creating-list-item list-item-full mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number `}>02
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Проведение
                                    вводного аудита</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}></p>
                            </li>
                            <li className={`website-creating-list-item list-item-full mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number `}>03
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Создание
                                    и согласование плана по реализации проекта</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}></p>
                            </li>
                            <li className={`website-creating-list-item list-item-full mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number `}>04
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Разработка/доработка всех регламентов и документов отдела продаж</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}></p>
                            </li>
                            <li className={`website-creating-list-item list-item-full mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number `}>05
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Набор/добор команды при необходимости, контроль внедрения всех инструментов в компании заказчика</p>

                            </li>
                            <li className={`website-creating-list-item list-item-full mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number `}>06
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Выполнение поставленного денежного показателя, как итог успешной реализации проекта</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}></p>
                            </li>
                            <li className={`website-creating-list-item list-item-full mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number `}>07
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Дальнейшая помощь заказчику в новых проектах, аудитах отдела продаж и дополнительных обучениях</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}></p>
                            </li>
                        </ul>
                    </div>
                </section>


                <CasesList text={`Отделы продаж`} tags={false}/>

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
                                    <Image src={"/SalesmentIcon1.svg"} alt={"Features icon"} width={100} height={100}
                                           className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] ${theme == 'dark' ? '' : 'invert'}`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Покажем,
                                        как действовать</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Мы
                                        дадим и поможем внедрить проверенные на практике инструменты продаж.</p>
                                </div>
                            </li>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <Image src={"/SalesmentIcon2.svg"} alt={"Features icon"} width={100} height={100}
                                           className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] ${theme == 'dark' ? '' : 'invert'}`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Поможем
                                        выполнить поставленный результат</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Проведем
                                        аудит, устраним &quot;зоны роста&quot;, обучим персонал, а также дадим
                                        гарантии.</p>
                                </div>
                            </li>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <Image src={"/SalesmentIcon3.svg"} alt={"Features icon"} width={100} height={100}
                                           className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] ${theme == 'dark' ? '' : 'invert'}`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Мы
                                        знаем, как определить ваших конкурентов</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0 max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Не
                                        важно какая сфера бизнеса - все разработанные инструменты дадут результат и
                                        сделают вас №1 в своей нише.</p>
                                </div>
                            </li>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <Image src={"/SalesmentIcon4.svg"} alt={"Features icon"} width={100} height={100}
                                           className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] ${theme == 'dark' ? '' : 'invert'}`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Дальнейшее
                                        сопровождение</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Оперативно
                                        подключимся к решению новых задач и открытию новых направлений бизнеса.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <Order />
            </div>

        </main>
    );
};

export default CreateSalesment;