'use client'

import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import {CiBookmarkCheck, CiBoxList, CiCalendar, CiDiscount1, CiGrid32, CiMonitor} from "react-icons/ci";
import Order from "@/components/order/Order";
import CasesList from "@/components/cases-list/Cases-list";

const TechnicalSupport = () => {
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
                        <source src="/SMMVideo.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div
                    className={`w-full px-WebsiteCreatingWelcomePaddingX flex max-xl:block pb-WebsiteCreatingWelcomePaddingBottom pt-WebsiteCreatingWelcomePaddingTop overflow-hidden`}>
                    <h1 className={`xl:WebsiteCreatingWelcomeHeadingWidth`}>
                        <div className={`leading-[1.1] text-WebsiteCreatingWelcomeHeadingSize font-railway`}>
                            SMM-продвижение в социальных сетях
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
                            Выстроим правильное позиционирование вашей компании в медиапространстве.
                        </div>
                    </div>
                </div>
            </section>
            <div className={`bg-background`}>
                <section className={`px-WebsiteCreatingWelcomePaddingX w-full flex flex-col items-center`}>
                    <div
                        className={`xl:flex xl:items-start xl:justify-start flex-col w-OrderedListWidth max-w-[1200px] mt-[150px]`}>
                        <h2 className={`mb-OrderedListHeadingMargin font-normal text-customerTitleSize leading-customerTitleLeading`}>Что входит в услуги</h2>
                        <div className={`w-full xl:shrink-0`}>
                            <p className={`max-w-[1200px] text-OrderedListDescrSize leading-OrderedListDescrLeading flex flex-col justify-start items-stretch flow mb-OrderedListDescrMargin`}>
                                Представим ваш бизнес, продукт или сервис в правильном свете. Построим доверительные отношения с вашей целевой аудиторией через SMM продвижение.
                            </p>
                        </div>
                        <ul>
                            <li className={`website-creating-list-item`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number `}>01
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Анализ
                                    и стратегия</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Проанализируем
                                    ваши соцсети, определим целевую аудиторию. Сформируем стратегию, цели и задачи SMM
                                    продвижения.</p>
                            </li>
                            <li className={`website-creating-list-item mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number`}>02
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Разработка
                                    контент-плана</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Создаем
                                    и утверждаем контент-план на месяц, не выдумываем каждый день, что будем выкладывать
                                    завтра.</p>
                            </li>
                            <li className={`website-creating-list-item mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number`}>03
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Визуал
                                    и оформление профиля</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Разработаем
                                    или доработаем визуал профиля от актуального, постов и историй до taplink и
                                    обложек.</p>
                            </li>
                            <li className={`website-creating-list-item mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number`}>03
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Работа
                                    с блогерами и сообществами</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Имеем
                                    большой опыт работы блогерами и рекламными пабликами – самостоятельно оценим всю
                                    статистику и подберем подходящее и эффективное продвижение.</p>
                            </li>

                            <li className={`website-creating-list-item mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number`}>03
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Создание контента</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Организуем съемки любой сложности, подберем моделей, фотографов и видеографов, а также проконтролируем качественное выполнение всех поставленных задач.</p>
                            </li>
                            <li className={`website-creating-list-item mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number`}>03
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Аналитика</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Предоставим прозрачный и понятный отчет о проделанной работе за месяц, сформируем дальнейшую стратегию продвижения исходя из эффективности работы всех инструментов продвижения.</p>
                            </li>
                        </ul>
                    </div>
                </section>

                <CasesList text={`Наши SMM`} tags={false}/>

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
                                    <CiMonitor size={100}
                                               className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Качественные специалисты</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Над каждым проектом работает целая команда специалистов: дизайнеры, видеографы, копирайтеры, stories-мейкеры и менеджеры проектов, а не один SMM-специалист, который делает все, но значительно менее качественно.</p>
                                </div>
                            </li>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <CiGrid32 size={100}
                                              className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Работа по стратегии с четкими целями и задачами</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Все наши специалисты нацелены на результат - мы не работаем с соцсетями по принципу «что-то делается, но не понятно для чего».</p>
                                </div>
                            </li>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <CiBookmarkCheck size={100}
                                                     className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Прозрачная и понятная отчетность</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0 max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Сформируем и расшифруем клиенту статистику по каждому месяцу – выявим зоны роста и самые эффективные инструменты.</p>
                                </div>
                            </li>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <CiBoxList size={100}
                                               className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Решим все дополнительные задачи маркетинга</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Новый фирменный стиль, съемка блюд food-фотографом или баннер для наружной рекламы? – все задачи будут решены с минимальным участием собственника бизнеса.</p>
                                </div>
                            </li>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <CiDiscount1 size={100}
                                                 className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Честное продвижение</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Лучше 500 активных подписчиков, чем 10000 накрученных инстаграм-ботов.</p>
                                </div>
                            </li>
                            <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                                <div
                                    className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                                    <CiCalendar size={100}
                                                className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                                </div>
                                <div
                                    className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Глубокое погружение в вашу тематику</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Будь-то бурятская культура, стоматология или автосервис – наши специалисты вникают в каждую нишу и предлагают самые эффективные инструменты продвижения.</p>
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

export default TechnicalSupport;