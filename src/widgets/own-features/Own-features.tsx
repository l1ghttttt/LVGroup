import React from 'react';
import { IoStatsChartSharp } from "react-icons/io5";
import { LuMonitorSmartphone } from "react-icons/lu";
import { IoShieldCheckmark } from "react-icons/io5";
import { PiSealPercentFill } from "react-icons/pi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BiLogoFigma } from "react-icons/bi";

const OwnFeatures = () => {
    return (
        <section className={`px-WebsiteCreatingWelcomePaddingX w-full flex flex-col items-center relative mb-[100px]`}>
            <div className={`flex flex-col w-OrderedListWidth mt-[150px] max-w-[1200px]`}>
                <h2 className={`mb-OrderedListHeadingMargin font-normal text-customerTitleSize leading-customerTitleLeading`}>Что
                    вы получаете, работая с нами</h2>
            </div>
            <div className={`w-full flex justify-center`}>
                <ul className={`flex flex-wrap w-[90%] justify-between gap-y-[40px]`}>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center h-[200px]`}>
                        <div className={`w-[100px] h-[100px]`}>
                            <LuMonitorSmartphone size={100}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px]`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway`}>Современный и адаптивный сайт</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr  max-md:mt-[10px]`}>Используем на сайтах эффективные сервисы: квизы, формы обратного звонка, сервисы для глубокой аналитики рекламы и калькуляторы стоимости. Пишем чистый и валидный код.</p>
                        </div>
                    </li>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center h-[200px]`}>
                        <div className={`w-[100px] h-[100px]`}>
                            <BiLogoFigma size={100}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px]`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway`}>Экспертность
                                в дизайне и создании контента</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr  max-md:mt-[10px]`}>Проводим
                                съёмки, создаем иллюстрации, напишем тексты, исходя из современных и актуальных
                                трендов.</p>
                        </div>
                    </li>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center h-[200px]`}>
                        <div className={`w-[100px] h-[100px]`}>
                            <IoShieldCheckmark size={100}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px]`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway`}>Помощь
                                и обучение работе с сайтом</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr  max-md:mt-[10px]`}>Поможем с CMS, научим обновлять контент сайта,
                                поможем продлить сертификат SSL, сменить хостинг или домен сайта и многое
                                другое.</p>
                        </div>
                    </li>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center h-[200px]`}>
                        <div className={`w-[100px] h-[100px]`}>
                            <IoStatsChartSharp size={100}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px]`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway`}>Доступ
                                к статистике и отчетам сайта</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr  max-md:mt-[10px]`}>Предоставляем
                                постоянный доступ к онлайн статистике, регулярно отчитываемся о выполненных работах по
                                сайту.</p>
                        </div>
                    </li>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center h-[200px]`}>
                        <div className={`w-[100px] h-[100px]`}>
                            <PiSealPercentFill size={100}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px]`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway`}>Скидки</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr  max-md:mt-[10px]`}>Предоставляем
                                скидки на сопутствующие услуги для максимально эффективного онлайн-продвижения
                                компании.</p>
                        </div>
                    </li>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center h-[200px]`}>
                        <div className={`w-[100px] h-[100px]`}>
                            <FaRegCalendarCheck size={100}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px]`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway`}>Дальнейшее
                                развитие после запуска</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr  max-md:mt-[10px]`}>Разработаем
                                дальнейшую стратегию продвижения, подберем самые эффективные инструменты, исходя из
                                нашего опыта и анализа.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default OwnFeatures;