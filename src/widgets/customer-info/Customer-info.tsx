import React from 'react';
import Image from "next/image";

const CustomerInfo = () => {
    return (
        <section className="w-full">
            <div className=" mb-CustomerTitleMargin flex flex-col">
                <div className={`p-servicesTitlePadding`}>
                    <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading`}>Редизайн и
                        разработка сайта
                        <br/> для автосервиса &quot;Ламарк-Центр&quot;</h2>
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

                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative`}>
                    <h4 className={`text-customerClientSize leading-customerClientLeading`}><span
                        className={`text-mainColor`}>Наш</span> клиент и <span
                        className={`text-mainColor`}>его</span> задача</h4>
                    <div className={`flex gap-[50px] mt-[50px] items-center`}>
                        <Image className={`w-[250px] 2xl:absolute 2xl:top-0 2xl:w-customerImageWidth pr-[20px] h-auto CustomerImage`} src={`/lamark-logo.jpg`}
                               alt={`лого заказчика`}
                               width={250} height={250}/>
                        <div className={`flex flex-col gap-[10px] justify-start text-[22px]`}>
                            <p className={`text-mainColor text-customerClientSize mb-[20px]`}>Ламарк-Центр</p>
                            <p>
                                Автосервис, который работает с 1998 года, партнерами и клиентами стали уже более 15 000
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
                    </div>
                </div>


            </div>
        </section>
    );
};

export default CustomerInfo;