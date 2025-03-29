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
                        <source src="/WebsiteCreatingVideo.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div
                    className={`w-full px-WebsiteCreatingWelcomePaddingX flex max-xl:block pb-WebsiteCreatingWelcomePaddingBottom pt-WebsiteCreatingWelcomePaddingTop overflow-hidden`}>
                    <h1 className={`xl:WebsiteCreatingWelcomeHeadingWidth`}>
                        <div className={`leading-[1.1] text-WebsiteCreatingWelcomeHeadingSize font-railway`}>
                            Техническая поддержка
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
                            Внесем любые необходимые изменения и обеспечим постоянную работоспособность сайта на любой платформе.
                        </div>
                    </div>
                </div>
            </section>
            <div className={`bg-background`}>
                <section className={`px-WebsiteCreatingWelcomePaddingX w-full flex flex-col items-center`}>
                    <div
                        className={`xl:flex xl:items-start xl:justify-start flex-col w-OrderedListWidth max-w-[1200px] mt-[150px]`}>
                        <h2 className={`mb-OrderedListHeadingMargin font-normal text-customerTitleSize leading-customerTitleLeading`}>Что включает в себя тех. поддержка?</h2>
                        <div className={`w-full xl:shrink-0`}>
                            <p className={`max-w-[1200px] text-OrderedListDescrSize leading-OrderedListDescrLeading flex flex-col justify-start items-stretch flow mb-OrderedListDescrMargin`}>
                                Никто не любит, когда что-то ломается. Но все-таки значительно лучше, когда в любой момент можно обратиться к проверенному и компетентному специалисту.
                            </p>
                        </div>
                        <ul>
                            <li className={`website-creating-list-item`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number `}>01
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Стабильная работа сайта</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Проанализируем и исправим все ошибки, устраним любые аварийные ситуации, проведем мониторинг доступности всех страниц и backup сайта.</p>
                            </li>
                            <li className={`website-creating-list-item mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number`}>02
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Сопровождение</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Обсудим и возьмем на себя задачи по дальнейшему развитию, как сайта, так и других направлений. Поможем с вопросами оплат и дальнейшей работы с провайдерами услуг хостинга и других сервисов.</p>
                            </li>
                            <li className={`website-creating-list-item mt-OrderedListItemMargin`}>
                                <div
                                    className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number`}>03
                                </div>
                                <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Восстановление утерянных данных</p>
                                <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Проработаем вопросы с восстановлением паролей от сайта, админ. панели, в случае, если они были похищены или утраченыи.</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <CasesList text={`Наша тех. поддержка`} tags={false}/>
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
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Современный
                                        и адаптивный сайт</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Используем
                                        на сайтах эффективные сервисы: квизы, формы обратной связи, сервисы для глубокой
                                        аналитики, калькуляторы стоимости. Пишем чистый и валидный код.</p>
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
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Экспертность
                                        в дизайне и создании контента</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Проводим
                                        съёмки, создаем иллюстрации, напишем тексты, исходя из современных и актуальных
                                        трендов.</p>
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
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Помощь
                                        и обучение работе с сайтом</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0 max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Поможем
                                        с CMS, научим обновлять контент сайта,
                                        поможем продлить сертификат SSL, сменить хостинг или домен сайта и многое
                                        другое.</p>
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
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Доступ
                                        к статистике и отчетам сайта</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Предоставляем
                                        постоянный доступ к онлайн статистике, регулярно отчитываемся о выполненных
                                        работах по
                                        сайту.</p>
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
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Скидки</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Предоставляем
                                        скидки на сопутствующие услуги для максимально эффективного онлайн-продвижения
                                        компании.</p>
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
                                    <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Дальнейшее
                                        развитие после запуска</h3>
                                    <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Разработаем
                                        дальнейшую стратегию продвижения, подберем самые эффективные инструменты, исходя
                                        из
                                        нашего опыта и анализа.</p>
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