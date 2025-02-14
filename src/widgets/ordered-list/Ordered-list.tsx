import React from 'react';

const OrderedList = () => {
    return (
        <section className={`px-WebsiteCreatingWelcomePaddingX w-full flex flex-col items-center`}>
            <div className={`xl:flex xl:items-start xl:justify-start flex-col w-OrderedListWidth max-w-[1200px] mt-[150px]`}>
                <h2 className={`mb-OrderedListHeadingMargin font-normal text-customerTitleSize leading-customerTitleLeading`}>Как
                    мы работаем</h2>
                <div className={`w-full xl:shrink-0`}>
                    <p className={`max-w-[1200px] text-OrderedListDescrSize leading-OrderedListDescrLeading flex flex-col justify-start items-stretch flow mb-OrderedListDescrMargin`}>
                        От вашей идеи до пошагового плана реализации совместного и успешного проекта.
                    </p>
                </div>
                <ul>
                    <li className={`website-creating-list-item`}>
                        <div
                            className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number `}>01
                        </div>
                        <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Аналитика и
                            проектирование сайта</p>
                        <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Определяем
                            цели и задачи проекта, изучаем бизнес-процессы. Планируем архитектуру сайта и составляем
                            техническое задание.</p>
                    </li>
                    <li className={`website-creating-list-item mt-OrderedListItemMargin`}>
                        <div
                            className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number`}>02
                        </div>
                        <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Разработка дизайна сайта и адаптация</p>
                        <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Разработка макетов дизайна сайта в четырех форм-факторах (desktop, laptop, tablet, phone) с учетом сценариев поведения пользователей.</p>
                    </li>
                    <li className={`website-creating-list-item mt-OrderedListItemMargin`}>
                        <div
                            className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number`}>03
                        </div>
                        <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Верстка, программирование и тестирование сайта</p>
                        <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Пишем чистый валидный оптимизированный код, понятный для третьих лиц. Тестируем все элементы и функционал сайта повторяя пользовательские сценарии.</p>
                    </li>
                    <li className={`website-creating-list-item mt-OrderedListItemMargin`}>
                        <div
                            className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number`}>04
                        </div>
                        <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Наполнение и релиз сайта в интернете</p>
                        <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Интегрируем товарные категории (1C, R-keeper, IIko, Excel) или наполняем сайт вручную. Подбираем лаконичный домен, размещаем на скоростном хостинге.</p>
                    </li>
                    <li className={`website-creating-list-item mt-OrderedListItemMargin`}>
                        <div
                            className={`text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number`}>05
                        </div>
                        <p className={`block text-[30px] leading-[40px] website-creating-list-item-heading font-railway`}>Дальнейшее развитие и продвижение сайта</p>
                        <p className={`block text-[20px] leading-[34px] website-creating-list-item-descr  max-md:mt-[10px]`}>Ввод в эксплуатацию, подключение сервисов аналитики, определение путей продвижения: Контекстная реклама, SEO-продвижение, таргетированная реклама. А также занимаемся поддержкой сайта.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default OrderedList;