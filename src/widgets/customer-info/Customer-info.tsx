'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";

const CustomerInfo = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="w-full">
            <div className=" mb-CustomerTitleMargin flex flex-col">
                <div className={`p-servicesTitlePadding`}>
                    <div className={`flex justify-between`}>
                        <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading`}>Редизайн и
                            разработка сайта
                            <br/> для автосервиса &quot;Ламарк-Центр&quot;</h2>
                        <Image
                            className={`w-[150px] h-[150px] 2xl:hidden max-2xl:mr-[65px] max-lg:mr-[35px] max-sm:mb-0 max-sm:hidden`}
                            src={`/lamark-logo.jpg`}
                            alt={`лого заказчика`}
                            width={180} height={180}/>
                    </div>

                    <ul className={`flex p-casesFilterPadding pl-0 flex-wrap gap-2 gap-y-3`}>
                        <li>
                            <button
                                className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                Продажи
                            </button>
                        </li>
                        <li>
                            <button
                                className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                Маркетинг
                            </button>
                        </li>
                        <li>
                            <button
                                className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                Веб-разработка
                            </button>
                        </li>
                        <li>
                            <button
                                className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                Создание контента
                            </button>
                        </li>
                        <li>
                            <button
                                className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                Дизайн
                            </button>
                        </li>
                        <li>
                            <button
                                className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                Call-центр
                            </button>
                        </li>
                    </ul>
                </div>
                <h4 className={`text-customerClientSize leading-customerClientLeading customer-spacing w-full px-CustomerSpacingPadding`}><span
                    className={`text-mainColor`}>Наш</span> клиент и <span
                    className={`text-mainColor`}>его</span> задача</h4>
                <div
                    className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>

                    <div className={`w-full flex gap-[30px] items-center max-sm:flex-col`}>
                        <Image
                            className={`w-[250px] 2xl:absolute 2xl:top-0 2xl:w-customerImageWidth pr-[20px] max-2xl:hidden max-sm:mb-0 max-sm:block max-sm:w-3/4 h-auto CustomerImage`}
                            src={`/lamark-logo.jpg`}
                            alt={`лого заказчика`}
                            width={250} height={250}/>
                        <div className={`flex flex-col gap-[10px] justify-start text-[21px]`}>
                            <p>
                                <span className={`text-mainColor font-bold mb-[20px]`}>Ламарк-Центр</span> - автосервис,
                                который работает с 1998 года, партнерами и клиентами стали уже более 15 000
                                человек. Ключевые ценности компании - честность, уважение, доверие и ответственность.
                            </p>
                            <p>
                                Клиент столкнулся со следующей проблемой - прошлые разработчики сайта брали оплату за
                                обслуживание сайта, но фактически
                                ничего не делали - сайт не обновлялся более 5 лет, в итоге стоимость работ по обновлению
                                сайта и корректировки работы всех
                                установленных модулей стала сравнима с разработкой полностью нового сайта с современным
                                дизайном и лучшей конверсией.
                            </p>

                        </div>

                        <aside className={`absolute top-0 left-full !!! w-stackWidth and ml-stackMargin`}>
                            <p className={`text-[15px] leading-[15px] border-t-[1px] border-stack pt-[10px] mb-[9px]`}>Технологии
                                в проекте</p>
                            <ul className={`flex flex-col`}>
                                <li className={`grid stack-layout items-center h-fit py-[10px] px-0 text-[18px] leading-[21px]`}>
                                    <Image src={'/Vue.png'} alt={'stack icon'} width={`25`} height={`25`}
                                           className={`w-auto grayscale`}/>
                                    <p>Vue</p>
                                </li>
                                <li className={`grid stack-layout items-center h-fit py-[10px] px-0 text-[18px] leading-[21px]`}>
                                    <Image src={'/AntDesign.png'} alt={'stack icon'} width={`25`} height={`25`}
                                           className={`w-auto grayscale`}/>
                                    <p>Ant Design</p>
                                </li>
                                <li className={`grid stack-layout items-center h-fit py-[10px] px-0 text-[18px] leading-[21px]`}>
                                    <Image src={'/nginx.png'} alt={'stack icon'} width={`25`} height={`25`}
                                           className={`w-auto grayscale`}/>
                                    <p>Nginx</p>
                                </li>
                                <li className={`grid stack-layout items-center h-fit py-[10px] px-0 text-[18px] leading-[21px]`}>
                                    <Image src={'/jQuery.png'} alt={'stack icon'} width={`25`} height={`25`}
                                           className={`w-auto grayscale`}/>
                                    <p>jQuery</p>
                                </li>
                            </ul>
                        </aside>


                    </div>
                    <div className={`w-full flex gap-[30px] mt-[100px] items-start justify-center flex-col`}>
                        <h2 className={`text-customerClientSize text-mainColor`}>Переработка наполнения и дизайна</h2>
                        <div className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px]`}>
                            <p>
                                Исследовав целевую аудиторию клиента, мы выявили, что большинство посетителей пользуются
                                мобильной версией сайта, а именно 81% от всего траффика.
                            </p>
                            <p>
                                Клиент столкнулся со следующей проблемой - прошлые разработчики сайта брали оплату за
                                обслуживание сайта, но фактически
                                ничего не делали - сайт не обновлялся более 5 лет, в итоге стоимость работ по обновлению
                                сайта и корректировки работы всех
                                установленных модулей стала сравнима с разработкой полностью нового сайта с современным
                                дизайном и лучшей конверсией.
                            </p>
                            <p>
                                Предыдущая версия сайта абсолютно не подходила для мобильного траффика, в целом когда
                                разрабатывался данный сайт целевая аудитория отдавала
                                предпочтение ПК для посещения сайта - сейчас же приоритеты изменились.
                            </p>
                            <p>
                                В рамках мобильной версии мы руководствовались следующими целями:
                            </p>
                            <ul className={`flex flex-col gap-[5px] `}>
                                <li className={`pl-[25px] relative customerList `}><p className={`my-[20px]`}>Сайт
                                    должен быть полностью адаптирован под мобильную версию, все страницы без исключения
                                    должны корректно работать на любом смартфоне.</p></li>
                                <li className={`pl-[25px] relative customerList `}><p className={`my-[20px]`}>Ключевые
                                    пункты меню сайта должны быть внизу перед глазами пользователя, данные пункты мы
                                    выделили исходя из статистики посещения разделов.</p></li>
                                <li className={`pl-[25px] relative customerList `}><p className={`my-[20px]`}>Сайт
                                    должен быть отлично оптимизирован и быстро загружаться, эффект загрузки со
                                    спидометром мы сделали для эстетики.</p></li>
                                <li className={`pl-[25px] relative customerList `}><p className={`my-[20px]`}>Помимо
                                    кнопок &quot;записаться&quot;" должны быть кликабельные кнопки What's app, выдержанные в
                                    стилистике нового сайта.</p></li>
                            </ul>
                            <p>
                                Новый сайт &quot;Ламарк-Центра&quot; отлично выглядит в мобильной версии и отвечает на все запросы
                                потенциального клиента.
                            </p>
                        </div>
                    </div>

                    <div className={`w-full flex justify-between mt-[100px]`}>
                        <div className={`w-1/3 pr-[30px]`}>
                            <div
                                className={`rounded-b-[3%] rounded-t-[3%] border-y-[30px] border-y-foreground border-y-solid border-x-solid border-x-[5px] border-x-foreground w-full`}>
                                {typeof window !== "undefined" && (
                                    <video loop muted autoPlay playsInline>
                                        <source src="/video-1.mp4" type="video/mp4"/>
                                    </video>
                                )}
                            </div>
                        </div>
                        <div className={`w-1/3 pr-[30px]`}>
                            <div
                                className={`rounded-b-[3%] rounded-t-[3%] border-y-[30px] border-y-foreground border-y-solid border-x-solid border-x-[5px] border-x-foreground w-full`}>
                                {typeof window !== "undefined" && (
                                    <video loop muted autoPlay playsInline>
                                        <source src="/video-2.mp4" type="video/mp4"/>
                                    </video>
                                )}
                            </div>
                        </div>
                        <div className={`w-1/3 pr-[30px]`}>
                            <div
                                className={`rounded-b-[3%] rounded-t-[3%] border-y-[30px] border-y-foreground border-y-solid border-x-solid border-x-[5px] border-x-foreground w-full`}>
                                {typeof window !== "undefined" && (
                                    <video loop muted autoPlay playsInline>
                                        <source src="/video-3.mp4" type="video/mp4"/>
                                    </video>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={`w-[80vw] flex mt-[100px] rounded-b-[3%] rounded-t-[3%] border-x-[40px] border-x-foreground border-y-[15px] border-y-foreground`}>
                        <Image className={`w-full h-auto`} src={`/lamarkScreen.png`} alt={`сайт после`} width={1600}
                               height={900}/>
                    </div>

                    <div className={`w-full flex gap-[30px] mt-[100px] items-start justify-center flex-col`}>
                        <h2 className={`text-customerClientSize text-mainColor`}>Разработка</h2>
                        <div className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px]`}>
                            <p>
                                Помимо полностью адаптивного сайта мы не забыли о современном дизайне, выдержанном в
                                фирменных цветах брендбука клиента. Цифры, ценности и миссия компании позволяют
                                сформировать доверие у новых клиентов автосервиса.
                            </p>
                            <p>
                                Организовали и провели съемку сотрудников автосервиса, отобрали материалы и проработали
                                галерею на сайте клиента, выделили ключевые предложения для потенциальных клиентов
                            </p>
                            <p>
                                Вся структура сайта была переработана на более понятную и логичную - разделили услуги по
                                группам и подгруппам, исходя из направлений. Изменили формат статей и акций на более
                                удобный
                                для ознакомления потенциальными клиентами. Для удобства добавили пункт &quot;вопрос-ответ&quot; с
                                часто
                                задаваемыми вопросами и ответами на них.
                            </p>
                        </div>
                    </div>
                    <div className={`w-full flex gap-[30px] mt-[100px] items-start justify-center flex-col`}>
                        <h2 className={`text-customerClientSize text-mainColor`}>Дополнительные сервисы</h2>
                        <div className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px]`}>
                            <p>
                                Для повышения конверсии сайта настроили и подключили следующие сервисы:
                            </p>
                            <ul className={`flex flex-col gap-[5px] `}>
                                <li className={`pl-[25px] relative customerList `}><p className={`my-[20px]`}><span
                                    className={`font-semibold`}>CallBack</span> - обратный звонок клиенту сразу, пока он
                                    находится на сайте либо в удобное для него
                                    время. Есть возможность выбора различных цехов Кузовного и Слесарного. Порядка 30%
                                    заявок
                                    дает нам данный сервис.</p></li>
                                <li className={`pl-[25px] relative customerList `}><p className={`my-[20px]`}><span
                                    className={`font-semibold`}>Quiz</span> - на сайте предлагается пройти небольшой
                                    опрос за бесплатную вводную услугу, в данном
                                    случае - бесплатная диагностика автомобиля. Квиз приносит порядка 10% заявок</p>
                                </li>
                                <li className={`pl-[25px] relative customerList `}><p className={`my-[20px]`}><span
                                    className={`font-semibold`}>CallTracking</span> - сервис для глубокого анализа
                                    эффективности работы контекстной рекламы.
                                    Позволяет нам понять с каких именно поисковых запросов мы получаем конверсии на
                                    сайте и
                                    многое другое</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className={`w-full flex gap-[30px] mt-[100px] items-start justify-center flex-col`}>
                        <h2 className={`text-customerClientSize text-mainColor`}>Результаты</h2>
                        <div className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px]`}>
                            <ul className={`flex flex-col gap-[5px] `}>
                                <li className={`pl-[25px] relative customerList `}><p
                                    className={`my-[20px]`}>Разработали сайт и его полностью адаптированную версию для
                                    любого мобильного устройства.</p></li>
                                <li className={`pl-[25px] relative customerList `}><p
                                    className={`my-[20px]`}>Переработали структура сайта и сделали ее более понятной для
                                    конечного пользователя.</p></li>
                                <li className={`pl-[25px] relative customerList `}><p className={`my-[20px]`}>Показали
                                    ключевые преимущества нашего клиента в сфере автосервисов.</p></li>
                                <li className={`pl-[25px] relative customerList `}><p className={`my-[20px]`}>Установили
                                    дополнительные сервисы для улучшения эффективности контекстной рекламы.</p></li>
                                <li className={`pl-[25px] relative customerList `}><p className={`my-[20px]`}>Полностью
                                    решили все задачи клиента, которые были поставлены на старте проекта.</p></li>
                            </ul>
                        </div>
                    </div>

                    <div className={`w-full flex flex-col gap-[25px] mt-[100px] items-start`}>
                        <h2 className={`text-customerClientSize text-mainColor`}>Отзыв клиента</h2>
                        <div className={`h-[1px] bg-foreground w-full`}></div>
                        <p className={`w-3/4 text-[22px]`}><span
                            className={`text-[30px] font-semibold leading-[20px]`}>&quot; </span>Обратились за
                            созданием сайта в компанию &quot;Двигатель&quot;. Ребята отнеслись креативно, с подходом и душой. Все
                            продумали, все отсняли, что нужно доработали и дописали. Еще нас тронуло, как ребята болеют
                            за проект - нам постоянно все напоминали, как-будто им нужен сайт еще больше, чем нам.
                            Большое спасибо от всего &quot;Ламарк-центра&quot;!<span
                                className={`text-[30px] font-semibold leading-[20px]`}> &quot;</span></p>
                        <div className={`h-[1px] bg-foreground w-full`}></div>
                        <div className={`w-full flex justify-end`}>
                            <div className={`flex gap-[10px]`}>
                                <Image className={`rounded-[50%]`} src={`/lamark-director.png`} alt={`фото клиента`}
                                       width={75} height={75}/>
                                <div className={`flex flex-col justify-around`}>
                                    <p className={`mb-0`}>Маркина Ирина,</p>
                                    <p>Директор &quot;Ламарк-Центр&quot;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default CustomerInfo;