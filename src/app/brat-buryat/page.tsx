'use client'

import React, {useEffect, useState} from 'react';
import Order from "@/widgets/order/Order";
import Image from "next/image";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import ProgressBars from "@/components/progress-bar/ProgressBar";

const BratBuryat = () => {
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
                            <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading max-lg:hidden`}>SMM для кафе <span
                                    className={`whitespace-nowrap`}>&quot;Брат Бурят&quot; </span> <br/>с 200 до 12 000 подписчиков</h2>
                            <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading lg:hidden`}>SMM для кафе <span
                                className={`whitespace-nowrap`}>&quot;Брат Бурят&quot;</span> <br/> с 200 до 12 000 подписчиков</h2>
                            <Image
                                className={`w-[150px] h-[150px] 2xl:hidden max-2xl:mr-[35px] max-lg:mr-[5px] max-sm:mb-0 max-sm:hidden`}
                                src={`/BratBuryatLogo.jpg`}
                                alt={`лого заказчика`}
                                width={180} height={180}/>
                        </div>

                        <ul className={`flex p-casesFilterPadding pl-0 flex-wrap gap-2 gap-y-3`}>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Создание контента
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    SMM
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Дизайн
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
                                className={`w-[250px] 2xl:absolute 2xl:top-0 2xl:w-customerImageWidth pr-[20px] max-2xl:hidden max-sm:mb-0 max-sm:block max-sm:w-3/4 h-auto CustomerImage max-sm:pr-0 `}
                                src={`/BratBuryatLogo.jpg`}
                                alt={`лого заказчика`}
                                width={250} height={250}/>

                            <div
                                className={`flex flex-col gap-[10px] justify-start text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Кафе <span
                                    className={`text-mainColor font-bold mb-[20px]`}> &quot;Брат Бурят&quot; </span> –
                                    это кафе бурятской кухни в современном исполнении. Здесь можно встретить как
                                    традиционные бурятские блюда, так и давно полюбившуюся классику, вроде салата цезарь
                                    или греческого.
                                </p>
                                <p>
                                    Клиент только открылся, столкнулся с некачественным исполнителем продвижения в
                                    социальных сетях, который за 2 месяца выложил 2 поста. Перед нами стояла задача
                                    рассказать о бурятской кухне, культуре, познакомить многих потенциальных гостей с
                                    ней, так как большинство никогда о ней не слышали. Для тех, кто знаком с этой кухней
                                    – донести, что в кафе вся рецептура соответствует традициям, что можно поесть здесь
                                    прямо как на родине.
                                </p>
                            </div>
                        </div>


                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex mt-[100px] max-lg:mt-[30px] overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/7] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/BratBuryatPicture1.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Стратегия</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    К продвижению в социальных сетях наша команда всегда подходит комплексно, поэтому
                                    помимо регулярной выкладки постов и сторис были задействованы таргетированная
                                    реклама, работа с лидерами мнений, участие в мероприятиях города, регулярная съемка
                                    reels и реклама в популярных пабликах.
                                </p>
                                <p>
                                    Мы с клиентом решили вести статистику каждого канала – усиливать самые эффективные
                                    инструменты - это позволит качественно распределять рекламные бюджеты и получать
                                    отличный результат.
                                </p>
                            </div>
                        </div>


                        <div className={`w-[100vw] flex mt-[100px] max-lg:mt-[30px] overflow-hidden overflow-x-hidden`}>
                            <video autoPlay muted loop playsInline
                                   className={`w-[100vw] max-w-full overflow-hidden overflow-x-hidden`}>
                                <source src="/Brat-buryat-mockup.mp4" type="video/mp4"/>
                            </video>
                        </div>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Контент</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Ключевые тематики контента:
                                </p>
                                <p>
                                    -Блюда бурятской кухни в современном исполнении.
                                </p>
                                <p>
                                    -Традиции народа Бурятии.
                                </p>
                                <p>
                                    -Элементы интерьера кафе и как в них отражена культура Бурятии.
                                </p>
                                <p>
                                    -Внутренняя кухня кафе, смешные ситуации, корпоративная культура.
                                </p>
                            </div>
                        </div>


                        <section
                            className={`w-[100vw] bg-[url(/carousels-background.png)] bg-cover md:aspect-[16/8] flex justify-center gap-[7%] items-center my-[120px] max-md:my-[60px] max-md:flex-col max-md:gap-[50px] max-md:py-[50px] pointer-events-none select-none`}>


                            <div
                                className={`w-[22%] max-md:w-3/4 overflow-hidden border-white border-solid border-[3px] rounded-[40px] max-lg:border-[3px] max-lg:rounded-[20px] max-sm:border-[2px] max-sm:rounded-[15px]`}>
                                <Carousel
                                    className={`w-full`}
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                    plugins={[
                                        Autoplay({
                                            delay: 4500,
                                        }),
                                    ]}
                                >
                                    <ProgressBars/>
                                    <CarouselContent className="-ml-0 md:-ml-0">
                                        <CarouselItem className="p-0"><Image src={`/1-1.JPG`} alt={`carousel photo`}
                                                                             width={360} height={630} className={`w-full h-full`}/></CarouselItem>
                                        <CarouselItem className="p-0"><Image src={`/1-2.JPG`} alt={`carousel photo`}
                                                                             width={360} height={630}  className={`w-full h-full`}/></CarouselItem>
                                        <CarouselItem className="p-0"><Image src={`/1-3.JPG`} alt={`carousel photo`}
                                                                             width={360} height={630}  className={`w-full h-full`}/></CarouselItem>
                                    </CarouselContent>

                                </Carousel>
                            </div>

                            <div
                                className={`w-[22%] max-md:w-3/4 overflow-hidden border-white border-solid border-[3px] rounded-[40px] max-lg:border-[3px] max-lg:rounded-[20px] max-sm:border-[2px] max-sm:rounded-[15px]`}>
                                <Carousel
                                    className={`w-full`}
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                    plugins={[
                                        Autoplay({
                                            delay: 4500,
                                        }),
                                    ]}
                                >
                                    <ProgressBars/>
                                    <CarouselContent className="-ml-0 md:-ml-0">
                                        <CarouselItem className="p-0"><Image src={`/2-1.JPG`} alt={`carousel photo`}
                                                                             width={360} height={630} className={`w-full h-full`}/></CarouselItem>
                                        <CarouselItem className="p-0"><Image src={`/2-2.JPG`} alt={`carousel photo`}
                                                                             width={360} height={630} className={`w-full h-full`}/></CarouselItem>
                                        <CarouselItem className="p-0"><Image src={`/2-3.JPG`} alt={`carousel photo`}
                                                                             width={360} height={630} className={`w-full h-full`}/></CarouselItem>
                                    </CarouselContent>

                                </Carousel>
                            </div>

                            <div
                                className={`w-[22%] max-md:w-3/4 overflow-hidden border-white border-solid border-[3px] rounded-[40px] max-lg:border-[3px] max-lg:rounded-[20px] max-sm:border-[2px] max-sm:rounded-[15px]`}>
                                <Carousel
                                    className={`w-full`}
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                    plugins={[
                                        Autoplay({
                                            delay: 4500,
                                        }),
                                    ]}
                                >
                                    <ProgressBars/>
                                    <CarouselContent className="-ml-0 md:-ml-0">
                                        <CarouselItem className="p-0"><Image src={`/3-1.JPG`} alt={`carousel photo`}
                                                                             width={360} height={630} className={`w-full h-full`}/></CarouselItem>
                                        <CarouselItem className="p-0"><Image src={`/3-2.JPG`} alt={`carousel photo`}
                                                                             width={360} height={630} className={`w-full h-full`}/></CarouselItem>
                                        <CarouselItem className="p-0"><Image src={`/3-3.JPG`} alt={`carousel photo`}
                                                                             width={360} height={630} className={`w-full h-full`}/></CarouselItem>
                                    </CarouselContent>

                                </Carousel>
                            </div>


                        </section>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Instagram
                                без &quot;таргета&quot;</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Таргетированная реклама давала очень хорошие результаты, когда ее отключили мы
                                    сделали максимальный упор на регулярную съемку reels – 5 в месяц, также
                                    дополнительно мы выкладывали каждый ролик на Youtube и Tik-Tok.
                                </p>
                                <p>
                                    В итоге это дало отличные результаты – с постоянной периодичностью ролики набирали
                                    большие охваты, самый лучший результат – это <span
                                    className={`text-mainColor font-bold mb-[20px]`}> 915 000 </span> просмотров на
                                    одном ролике!
                                </p>
                                <p>
                                    Помимо этого, мы проводили коллаборации с партнерами, в рамках конкурсов,
                                    видеороликов и совместных предложениях для гостей.
                                </p>
                            </div>
                        </div>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col relative`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Фирменный стиль</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Работая с клиентом, мы столкнулись с тем, что все рекламные материалы – будь то
                                    вывеска, меню или тейбл-тенты выполнены в разном стиле без единой общей концепции,
                                    поэтому был также разработан фирменный стиль и переработан существующий логотип в
                                    угоду современным тенденциям и интерьеру нового места.
                                </p>
                            </div>


                            <aside
                                className={`absolute top-0 left-full w-stackWidth ml-stackMargin  max-xl:static max-xl:w-full max-xl:ml-0`}>
                                <p className={`text-[15px] leading-[15px] border-t-[1px] border-stack pt-[10px] mb-[9px]`}>Cмотрите
                                    услугу</p>
                                <ul className={`flex flex-col max-xl:flex-row flex-wrap stack-grid`}>
                                    <li className={`items-center py-[10px] px-0 text-[18px] leading-[21px]`}>
                                        <Link href={"/"}>Фирменный стиль кафе <span
                                            className={`whitespace-nowrap`}>&quot;Брат Бурят&quot;</span></Link>
                                    </li>
                                </ul>
                            </aside>
                        </div>

                        <div className={`w-[100vw] flex mt-[100px] max-lg:mt-[30px] overflow-hidden overflow-x-hidden`}>
                            <video autoPlay muted loop playsInline
                                   className={`w-[100vw] max-w-full overflow-hidden overflow-x-hidden`}>
                                <source src="/BratBuryatMenu.mp4" type="video/mp4"/>
                            </video>
                        </div>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Результаты</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <ul className={`flex flex-col gap-[5px] `}>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>С 2019 года мы работаем с кафе «Брат Бурят» - за это
                                        время аккаунт вырос до 12000 подписчиков.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Повысилась узнаваемость бренда и главного блюда
                                        бурятской кухни – бууз. Количество отзывов о кафе на площадке 2ГИС – более
                                        1200.</p></li>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Помимо SMM направления был создан сайт и запущена
                                        контекстная реклама, с результатом более 250 заказов в месяц.</p></li>
                                </ul>
                            </div>
                        </div>

                        <ul className={`w-full relative flex items-end justify-start flex-wrap mx-[-30px] my-[45px] max-sm:mx-0 max-sm:block`}>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Подписчиков ДО
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>200
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading big-hidden`}>
                                    </div>
                                </div>
                            </li>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Подписчиков ПОСЛЕ
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading big-hidden`}>12000
                                    </div>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading big-nohidden`}>12
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading big-nohidden`}>тыс.
                                    </div>
                                </div>
                            </li>
                            <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`}>
                                <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                                    Охваты Instagram в месяц
                                </div>
                                <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                                    <div
                                        className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>64227
                                    </div>
                                    <div
                                        className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>
                                    </div>
                                </div>
                            </li>
                        </ul>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Общие выводы</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <ul className={`flex flex-col gap-[5px] `}>
                                    <li className={`pl-[25px] relative`}>
                                        <p className={`text-[16px] conclusion`}>01</p>
                                        <p className={`my-[20px]`}>Комплексный подход к продвижению клиента, включающий
                                            SMM, контекстную рекламу, маркетинговое сопровождение привели к качественным
                                            результатам, несмотря на отключение таргетированной рекламы в Instagram.</p>
                                    </li>
                                    <li className={`pl-[25px] relative`}>
                                        <p className={`text-[16px] conclusion`}>02</p>
                                        <p className={`my-[20px]`}>Разработанный фирменный стиль значительно упростил
                                            работу клиента – любые рекламные материалы стали быстрее разрабатываться,
                                            соответствовать общей концепции и стоить дешевле, т.к. не исполнителям не
                                            приходится ничего выдумывать «с нуля».</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <ul className={`px-[15px] flex p-casesFilterPadding flex-wrap gap-2 gap-y-3`}>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Создание контента
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        SMM
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Дизайн
                    </button>
                </li>
            </ul>
            <Order/>
        </>
    );
};

export default BratBuryat;