'use client'

import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useTheme} from "next-themes";
import {OrderForm} from "@/components/Form/Order-form";

const Order = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <section className={`w-full z-25 flex items-stretch max-xl:flex-col`} id={`order-section`}>
            <div className={`w-1/2 flex items-stretch justify-stretch shrink-[0.5] relative max-xl:w-full`}>
                <div className="order-video-background absolute top-0 left-0 w-full h-full">
                    <video autoPlay muted loop playsInline id="myOrderVideo" className={theme === 'dark' ? '' : 'invert'}>
                        <source src="/order-bg.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div
                    className={`flex flex-col items-stretch justify-start relative w-full py-formSpaceYPadding px-formSpaceXPadding`}>
                    <h3 className={`text-orderTitleSize leading-orderTitleLeading font-medium relative`}>
                        Нужна встреча, чтобы
                        <br/>
                        принять решение?
                    </h3>
                    <nav className={`flex`}>
                        <ul className={`flex flex-wrap mt-[47px] max-w-[700px] max-sm:flex-col`}>
                            <li className={`mr-[40px] mb-[50px] max-2xl:mr-[30px] max-2xl:mb-[30px] max-sm:mr-[20px] max-sm:mb-[20px] max-sm:w-auto`}>
                                <Link href="/"
                                      className={`touch-manipulation text-orderDescrSize leading-orderDescrLeading flex`}>
                                    +7 (4212) 93-03-01
                                </Link>
                            </li>
                            {/*<li className={`mr-[40px] mb-[50px] max-2xl:mr-[30px] max-2xl:mb-[30px] max-sm:mr-[20px] max-sm:mb-[20px] max-sm:w-auto`}>
                                <Link href="/"
                                      className={`touch-manipulation text-orderDescrSize leading-orderDescrLeading flex`}>
                                    lvgroup@gmail.com
                                </Link>
                            </li>*/}
                            <li className={`mr-[40px] mb-[50px] max-2xl:mr-[30px] max-2xl:mb-[30px] max-sm:mr-[20px] max-sm:mb-[20px] max-sm:w-auto`}>
                                <Link target={`_blank`} href="https://t.me/tvoi_dvigatel"
                                      className={`touch-manipulation text-orderDescrSize leading-orderDescrLeading flex`}>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white mr-orderIconMargin"  aria-hidden="true" fill="currentColor"
                                         xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="27"
                                         viewBox="0 0 50 50">
                                        <path fill="currentColor"
                                              d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                                    </svg>
                                    telegram
                                </Link>
                            </li>
                            {/*<li className={`mr-[40px] mb-[50px] max-2xl:mr-[30px] max-2xl:mb-[30px] max-sm:mr-[20px] max-sm:mb-[20px] max-sm:w-auto`}>
                                <Link href="/"
                                      className={`touch-manipulation text-orderDescrSize leading-orderDescrLeading flex`}>
                                    <svg
                                        className="w-6 h-6 text-gray-800 dark:text-white mr-orderIconMargin"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="33"
                                        height="27"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M15.907 11.998 10.332 9.23a.9.9 0 0 1-.16-.037l-.018-.007v6.554c0 .017.008.034.01.051l2.388-2.974 3.355-.82Z"/>
                                        <path
                                            d="m11.463 4.054 5.579 3.323A4.02 4.02 0 0 1 18.525 9c.332.668.47 1.414.398 2.155a3.07 3.07 0 0 1-.745 1.65 3.108 3.108 0 0 1-1.55.951c-.022.007-.045.005-.07.01-.062.03-.126.057-.191.08l-2.72.667-1.992 2.48c-.18.227-.41.409-.67.534.047.034.085.077.137.107a2.05 2.05 0 0 0 1.995.035c.592-.33 2.15-1.201 4.636-2.892l.28-.19c1.328-.895 3.616-2.442 3.967-4.215a9.94 9.94 0 0 0-1.713-4.154 10.027 10.027 0 0 0-3.375-2.989 10.107 10.107 0 0 0-8.802-.418c1.162.287 2.287.704 3.354 1.243Z"/>
                                        <path
                                            d="M5.382 17.082v-6.457a3.7 3.7 0 0 1 .45-1.761 3.733 3.733 0 0 1 1.238-1.34 3.915 3.915 0 0 1 3.433-.245c.176.03.347.084.508.161l5.753 2.856c.082.05.161.105.236.165a2.128 2.128 0 0 0-.953-1.455l-5.51-3.284c-1.74-.857-3.906-1.523-5.244-1.097a9.96 9.96 0 0 0-2.5 3.496 9.895 9.895 0 0 0 .283 8.368 9.973 9.973 0 0 0 2.73 3.322 17.161 17.161 0 0 1-.424-2.729Z"/>
                                        <path
                                            d="m19.102 16.163-.272.183c-2.557 1.74-4.169 2.64-4.698 2.935a4.083 4.083 0 0 1-2 .53 3.946 3.946 0 0 1-1.983-.535 3.788 3.788 0 0 1-1.36-1.361 3.752 3.752 0 0 1-.51-1.85 1.812 1.812 0 0 1-.043-.26V9.143c0-.024.009-.046.01-.07-.056.02-.11.043-.162.07a1.796 1.796 0 0 0-.787 1.516v6.377a10.67 10.67 0 0 0 1.113 4.27 10.11 10.11 0 0 0 8.505-.53 10.022 10.022 0 0 0 3.282-2.858 9.936 9.936 0 0 0 1.75-3.97 19.615 19.615 0 0 1-2.845 2.216Z"/>
                                    </svg>
                                    Скачать бриф
                                </Link>
                            </li>*/}
                        </ul>
                    </nav>
                    <nav className={`flex mt-auto w-full text-[18px] leading-[28px] max-xl:pt-[200px]`}>
                        <ul className={`flex`}>
                            <li className={`mr-[72px] max-xl:mr-[36px] max-sm:mr-0`}>
                                <p className={`text-[20px] relative leading-[35px] mb-[20px] max-sm:font-medium max-sm:leading-[29px] max-sm:mb-[15px]`}>
                                    Наши руководители готовы лично помочь и обсудить детали.

                                </p>
                                <p className={`text-[20px] relative leading-[35px] mb-[20px] max-sm:font-medium max-sm:leading-[29px] max-sm:mb-[15px]`}>
                                    Позвоните, чтобы договориться о встрече или заполните форму,
                                    и мы вам обязательно перезвоним.
                                </p>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={`w-1/2 bg-altBg max-xl:w-full shrink-[0.5] z-25 `}>
                    <OrderForm/>
            </div>
        </section>

);
};

export default Order;
