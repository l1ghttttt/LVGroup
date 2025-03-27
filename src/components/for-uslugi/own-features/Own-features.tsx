import React from 'react';
import {CiBookmarkCheck, CiBoxList, CiCalendar, CiDiscount1, CiGrid32, CiMonitor} from "react-icons/ci";

const OwnFeatures = () => {
    return (
        <section className={`px-WebsiteCreatingWelcomePaddingX w-full flex flex-col items-center relative mb-[100px]`}>
            <div className={`flex flex-col w-OrderedListWidth mt-[150px] max-w-[1200px]`}>
                <h2 className={`mb-OrderedListHeadingMargin font-normal text-customerTitleSize leading-customerTitleLeading`}>Что
                    вы получаете, работая с нами</h2>
            </div>
            <div className={`w-full flex justify-center`}>
                <ul className={`flex flex-wrap w-[90%] max-xl:w-[75%] max-md:w-full justify-between gap-y-[40px] max-xl:gap-y-[75px]`}>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                        <div className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                            <CiMonitor size={100} className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Современный и адаптивный сайт</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Используем на сайтах эффективные сервисы: квизы, формы обратной связи, сервисы для глубокой аналитики, калькуляторы стоимости. Пишем чистый и валидный код.</p>
                        </div>
                    </li>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                        <div className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                            <CiGrid32 size={100} className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Экспертность
                                в дизайне и создании контента</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Проводим
                                съёмки, создаем иллюстрации, напишем тексты, исходя из современных и актуальных
                                трендов.</p>
                        </div>
                    </li>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                        <div className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                            <CiBookmarkCheck size={100} className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Помощь
                                и обучение работе с сайтом</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0 max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Поможем с CMS, научим обновлять контент сайта,
                                поможем продлить сертификат SSL, сменить хостинг или домен сайта и многое
                                другое.</p>
                        </div>
                    </li>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                        <div className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                            <CiBoxList size={100} className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Доступ
                                к статистике и отчетам сайта</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Предоставляем
                                постоянный доступ к онлайн статистике, регулярно отчитываемся о выполненных работах по
                                сайту.</p>
                        </div>
                    </li>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                        <div className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                            <CiDiscount1 size={100} className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Скидки</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Предоставляем
                                скидки на сопутствующие услуги для максимально эффективного онлайн-продвижения
                                компании.</p>
                        </div>
                    </li>
                    <li className={`w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]`}>
                        <div className={`w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] max-md:flex max-md:items-center flex-shrink-0`}>
                            <CiCalendar size={100} className={`max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px]`}/>
                        </div>
                        <div className={`flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around`}>
                            <h3 className={`text-mainColor text-[28px] leading-[40px] website-creating-list-item-heading font-railway max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px] font-semibold`}>Дальнейшее
                                развитие после запуска</h3>
                            <p className={`text-[18px] leading-[28px] website-creating-list-item-descr max-sm:mt-0  max-md:mt-[10px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]`}>Разработаем
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