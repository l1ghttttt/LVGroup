'use client'
import React from 'react';
import {useTheme} from "next-themes";

type chainItem = string | string[];

interface CustomerChainProps {
    align?: 'vertical' | 'horizontal';
    name?: string;
    chainList?: chainItem[];
}

const CustomerChain = ({align = "horizontal", name, chainList = ["error"]}: CustomerChainProps) => {
    const { theme } = useTheme();
    return (
        <section className={`${align == 'vertical' && `w-full`}`}>
            {align === "horizontal" && (
                <>
                    <div className={`w-[80vw] max-xl:w-[90vw] flex gap-[30px] mt-[45px] items-start justify-center flex-col max-lg:hidden`}>
                        {name && (<h2 className={`text-customerClientSize text-mainColor ${align == "horizontal" && `lg:w-full text-center`}`}>{name}</h2>)}
                        <ul className={`flex gap-[19px] w-full`}>
                            {chainList.map((item, index) => (
                                <li className={`flex md:flex-col flex-1 h-[275px] justify-around`} key={index}>

                                    <div className={`flex flex-col gap-1 justify-end font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] align-bottom`}>
                                        {index % 2 !== 0 && (
                                            Array.isArray(item) ? (
                                                item.map((subItem, subIndex) => <p key={subIndex}>{subItem}</p>)
                                            ) : (
                                                <span key={index}>{item}</span>
                                            )
                                        )}
                                    </div>

                                    <div
                                        className={`flex gap-[19px] items-center max-md:flex-col max-md:gap-[5px]`}>

                                        <div
                                            className={`w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                            <p className={`font-normal text-[32px] max-md:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>{index + 1}</p>
                                        </div>

                                        {chainList.length !== index + 1 && (
                                            <div
                                                className={`relative flex-1 max-md:border-t-[0px] h-[2px] max-md:h-auto max-md:min-h-[26px] max-md:w-[2px]`}>
                                                <div className={`customBorder ${theme == 'dark' ? 'invert' : ''}`}></div>
                                            </div>
                                        )}

                                    </div>

                                    <div className={`flex flex-col gap-1 justify-start font-normal text-[24px] max-xl:text-[20px] max-lg:text-[16px] leading-[30px] pr-[10px] h-[90px] items-start align-text-top`}>
                                        {index % 2 == 0 && (
                                            Array.isArray(item) ? (
                                                item.map((subItem, subIndex) => <p key={subIndex}>{subItem}</p>)
                                            ) : (
                                                <span key={index}>{item}</span>
                                            )
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={`w-[90vw] flex gap-[20px] mt-[20px] items-start justify-center flex-col lg:hidden`}>
                        {name && (<h2 className={`text-customerClientSize text-mainColor ${align == "horizontal" && `lg:w-full text-center`}`}>{name}</h2>)}
                        <ul className={`flex w-full flex-col gap-[9px]`}>
                            {chainList.map((item, index) => (


                                <li className={`flex lg:flex-col gap-[10px] flex-1`} key={index}>

                                    <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                        <div
                                            className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                            <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                {index+1}
                                            </p>
                                        </div>

                                        {chainList.length !== index + 1 && (
                                            <div className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                                <div className={`customBorder`}></div>
                                            </div>
                                        )}

                                    </div>

                                    <div className={`flex flex-col gap-2 font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                        {
                                            Array.isArray(item) ? (
                                                item.map((subItem, subIndex) => <p key={subIndex}>{subItem}</p>)
                                            ) : (
                                                <span key={index}>{item}</span>
                                            )
                                        }
                                    </div>

                                </li>


                            ))}


                            {/*<li className={`flex lg:flex-col gap-[10px] flex-1`}>

                                <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                    <div
                                        className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                        <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                            2
                                        </p>
                                    </div>

                                    <div
                                        className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                        <div className={`customBorder`}></div>
                                    </div>

                                </div>

                                <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                    1 277 кликов
                                </p>

                            </li>
                            <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                                <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                    <div
                                        className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                        <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                            3
                                        </p>
                                    </div>

                                    <div
                                        className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                        <div className={`customBorder`}></div>
                                    </div>

                                </div>

                                <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                    1.85% CTR
                                </p>

                            </li>
                            <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                                <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                    <div
                                        className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                        <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                            4
                                        </p>
                                    </div>

                                    <div
                                        className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                        <div className={`customBorder`}></div>
                                    </div>

                                </div>

                                <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                    60.515 руб. расход
                                </p>

                            </li>
                            <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                                <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                    <div
                                        className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                        <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                            5
                                        </p>
                                    </div>

                                    <div
                                        className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                        <div className={`customBorder`}></div>
                                    </div>

                                </div>

                                <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                    47.4 руб. цена клика
                                </p>

                            </li>
                            <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                                <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                    <div
                                        className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                        <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                            6
                                        </p>
                                    </div>

                                    <div
                                        className={`relative flex-1 max-lg:border-t-[0px] h-[2px] max-lg:h-auto max-lg:min-h-[26px] max-lg:w-[2px]`}>
                                        <div className={`customBorder`}></div>
                                    </div>

                                </div>

                                <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                    488.1 руб. цена цели
                                </p>

                            </li>
                            <li className={`flex lg:flex-col gap-[10px] flex-1`}>

                                <div className={`flex gap-[19px] items-center max-lg:flex-col max-lg:gap-[5px]`}>

                                    <div
                                        className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                        <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                            7
                                        </p>
                                    </div>

                                </div>

                                <p className={`font-normal text-[24px] max-md:text-[22px] max-sm:text-[20px] leading-[22px] pt-[15px] max-sm:pt-[10px]`}>
                                    18 заявок, 35 колбэков , 71 звонок
                                </p>

                            </li>*/}
                        </ul>
                    </div>
                </>
            )}
            {align === "vertical" && (
                <div
                    className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col`}>
                    <h2 className={`text-customerClientSize text-mainColor`}>{name}</h2>
                    <div className={`w-full flex gap-[20px] items-start justify-center flex-col`}>

                        <ul className={`flex w-full flex-col gap-[5px]`}>
                            {chainList.map((item, index) => (


                                <li className={`flex gap-[20px] flex-1`} key={index}>

                                    <div
                                        className={`flex items-center flex-col gap-[5px]`}>

                                        <div
                                            className={`w-[60px] h-[60px] max-lg:w-[50px] max-lg:h-[50px] max-sm:w-[40px] max-sm:h-[40px] rounded-full bg-gradient-to-br from-background to-[#FF9966] p-[4px] max-sm:p-[3px]`}>
                                            <p className={`font-normal text-[32px] max-lg:text-[24px] max-sm:text-[20px] leading-none bg-background w-full h-full rounded-full flex justify-center items-center select-none`}>
                                                {index+1}
                                            </p>
                                        </div>
                                        {chainList.length !== index + 1 && (
                                            <div
                                                className={`relative flex-1 border-t-[0px] min-h-[40px] w-[2px]`}>
                                                <div className={`customBorder-y`}></div>
                                            </div>
                                        )}
                                    </div>

                                    <div className={`flex flex-col gap-1 font-normal text-[20px] max-md:text-[18px] max-sm:text-[15px] lg:leading-[24px] leading-[18px] pt-[5px] max-sm:pt-0 pb-[25px]`}>
                                        {
                                            Array.isArray(item) ? (
                                                item.map((subItem, subIndex) => <p key={subIndex}>{subItem} </p>)
                                            ) : (
                                                <span key={index}>{item}</span>
                                            )
                                        }
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            )}
        </section>
    );
};

export default CustomerChain;