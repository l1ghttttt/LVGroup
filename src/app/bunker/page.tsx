'use client'

import React, {useEffect, useState} from 'react';
import Order from "@/widgets/order/Order";
import Image from "next/image";

const Bunker = () => {

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
                            <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading`}>Фирменный стиль <br/> компьютерного клуба &quot;Бункер&quot;</h2>
                            <Image
                                className={`w-[150px] h-[150px] 2xl:hidden max-2xl:mr-[35px] max-lg:mr-[5px] max-sm:mb-0 max-sm:hidden`}
                                src={`/BunkerLogo.png`}
                                alt={`лого заказчика`}
                                width={180} height={180}/>
                        </div>

                        <ul className={`flex p-casesFilterPadding pl-0 flex-wrap gap-2 gap-y-3`}>
                            <li>
                                <button
                                    className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Фирменный стиль
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Дизайн-поддержка
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    Создание контента
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
                                src={`/BunkerLogo.png`}
                                alt={`лого заказчика`}
                                width={250} height={250}/>

                            <div
                                className={`flex flex-col gap-[10px] justify-start text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Компьютерный клуб <span
                                    className={`text-mainColor font-bold mb-[20px]`}>  &quot;Бункер&quot; </span> – Это
                                    новый компьютерный клуб в городе Хабаровске. Современные, мощные ПК и консоли, 300+
                                    популярных игр на ПК, консоли и VR.
                                </p>
                                <p>
                                    Наша задача – создать фирменный стиль, идущий в ногу со временем и привлекающим в
                                    компьютерный клуб аудиторию геймеров.
                                </p>
                            </div>
                        </div>
                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex mt-[200px] max-lg:mt-[90px] max-sm:mt-[20px] overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/6] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/BunkerPicture1.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>

                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Идея</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Смелый фирменный знак, который имеет потенциал для создания увлекательной истории
                                    благодаря фирменному элементу в виде монстрика-геймера.
                                </p>
                                <p>
                                    В процессе работы над брендом, персонажа можно развивать в стикерах, принтах и так
                                    далее. Он может стать лицом компании, а это в свою очередь увеличит узнаваемость со
                                    стороны клиентов.
                                </p>
                            </div>
                        </div>

                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex mt-[45px] max-lg:mt-[20px] overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/6] max-sm:aspect-[16/9] object-fill max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/BunkerPicture2.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Логотип</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Заказчик обратился уже с готовым неймингом «Бункер». Наша задача была придумать
                                    соответствующую концепцию.
                                </p>
                                <p>
                                    Важно было отстроиться от конкурентов, у которых логотип обыгрывает только название
                                    компьютерного клуба.
                                </p>
                            </div>
                        </div>

                        <div className={`w-[80vw] max-sm:w-[90vw] flex mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px]`}>
                            <Image className={`w-full h-auto rounded-[50px] border-[13px] border-foreground`}
                                   src={`/BunkerPicture3.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                        </div>

                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Носители</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <p>
                                    Основной упор сделали на наружную рекламу, мерч, фирменный паттерн и заставку на
                                    рабочий стол каждого компьютера.
                                </p>
                            </div>
                        </div>

                        <div className='case-gallery mt-[45px] max-lg:mt-[20px]'>
                            <Image className={`w-full h-auto`}
                                   src={`/BunkerPicture4.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                            <Image className={`w-full h-auto`}
                                   src={`/BunkerPicture5.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                            <Image className={`w-full h-auto`}
                                   src={`/BunkerPicture6.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                            <Image className={`w-full h-auto`}
                                   src={`/BunkerPicture7.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                            <Image className={`w-full h-auto`}
                                   src={`/BunkerPicture8.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                            <Image className={`w-full h-auto`}
                                   src={`/BunkerPicture9.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                            <Image className={`w-full h-auto`}
                                   src={`/BunkerPicture10.jpg`} alt={`сайт после`} width={1600}
                                   height={900}/>
                        </div>
                        {/*
                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex mt-[45px] max-lg:mt-[20px] overflow-hidden overflow-x-hidden`}>
                        <Image
                                className={`w-full aspect-[16/8] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/BunkerPicture4.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>

                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/8] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/BunkerPicture5.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>
                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/8] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/BunkerPicture6.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>
                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/8] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/BunkerPicture7.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>
                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/8] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/BunkerPicture8.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>
                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/8] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/BunkerPicture9.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>
                        <div
                            className={`w-[100vw] max-2xl:w-[100vw] flex overflow-hidden overflow-x-hidden`}>
                            <Image
                                className={`w-full aspect-[16/8] max-sm:aspect-[16/9] object-cover max-w-full overflow-hidden overflow-x-hidden`}
                                src={`/BunkerPicture10.jpg`} alt={`картинка`} width={1600}
                                height={900}/>
                        </div>

                        */}


                        <div
                            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                            <h2 className={`text-customerClientSize text-mainColor`}>Результат</h2>
                            <div
                                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                <ul className={`flex flex-col gap-[5px] `}>
                                    <li className={`pl-[25px] relative customerList `}><p
                                        className={`my-[20px]`}>Создали фирменный стиль и брендбук для компьютерного
                                        клуба, проработали фирменные шрифты и все необходимые носители.</p></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <ul className={`px-[15px] flex p-casesFilterPadding flex-wrap gap-2 gap-y-3`}>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Фирменный стиль
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Дизайн-поддержка
                    </button>
                </li>
                <li>
                    <button
                        className={`text-[18px] select-none text-background bg-foreground hover:text-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                        Создание контента
                    </button>
                </li>
            </ul>
            <Order/>
        </>
    );
};

export default Bunker;