import React from 'react';
import Link from "next/link";
import { CiAirportSign1, CiBullhorn, CiUser } from "react-icons/ci";

const Page = () => {
    return (
        <main className={`relative max-w-full w-full`}>
            <section className="bg-cover bg-no-repeat bg-[url(https://static.nimax.ru/contacts/contacts1.png)]">
                <div className={`bg-transparent relative p-ContactsHatPadding`}>
                    <div className={`sm:flex sm:items-start sm:justify-between max-lg:flex-wrap `}>
                        <div
                            className={`max-md:hidden text-ContactsHatTitle mr-ContactsHatMargin leading-[1] w-2/3 flex items-end justify-stretch max-xl:w-1/2 max-sm:w-full`}>
                            Контакты <br/> LVGroup
                        </div>
                        <div
                            className={`md:hidden text-ContactsHatTitle mr-ContactsHatMargin leading-[1] w-2/3 flex items-end justify-stretch max-xl:w-1/2 max-sm:w-full`}>
                            Контакты LVGroup
                        </div>
                        <div
                            className={`shrink-0 flex flex-flow items-start justify-start leading-[1.2] w-1/3 max-xl:w-1/2 max-sm:w-full pl-ContactsLinkPaddingLeft mt-ContactsLinksMarginTop text-ContactsLinkTextSize`}>
                            <Link href={""}> +7 (4212) 93-03-01 </Link>
                            <Link href={""} className={"mt-[20px] mb-[30px] max-2xl:mb-[20px]"}> +7 (924)
                                204-00-30 </Link>
                            <Link href={"mt-[8px]"} className={``}>
                                <div
                                    className={`whitespace-pre-wrap w-ContactsUroInfWidth mb-ContactsUroInfMarginBottom mt-ContactsUroInfMarginTop`}>
                                    <div className={`mb-[10px] text-[calc(14px + var(--responsive)*10)]`}>
                                        ИП Леонов Б.С.
                                    </div>
                                    <div>
                                        ОГРНИП: 321272400043890
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className={`bg-transparent flex items-start justify-start flex-wrap relative gap-0 ml-[-1px] mb-[-1px]`}>
                    <div
                        className={`shrink-0 bg-[rgba(31,31,31,.5)] ml-[1px] mb-[1px] relative overflow-hidden duration-500 transition-all w-ContactsCubeWidth h-ContactsCubeHeight hover:bg-[#1e1e1e]`}>
                        <div className={`flex items-stretch justify-start flex-flow absolute z-[50] top-0 left-0 w-full h-full p-ContactsCubeInnerPadding`}>
                            <div className={`leading-ContactsCubeTextLeading text-ContactsCubeTextSize h-1/4`}>
                                Работаем с клиентами по всему миру
                            </div>
                            <div className={`w-full h-1/2 flex justify-center items-end`}>
                                <CiAirportSign1 size={100} className={`w-1/2 h-1/2`}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`shrink-0 bg-[rgba(31,31,31,.5)] ml-[1px] mb-[1px] relative overflow-hidden duration-500 transition-all w-ContactsCubeWidth h-ContactsCubeHeight hover:bg-[#1e1e1e]`}>
                        <div
                            className={`flex items-stretch justify-start flex-flow absolute z-[50] top-0 left-0 w-full h-full p-ContactsCubeInnerPadding`}>
                            <div className={`leading-ContactsCubeTextLeading text-ContactsCubeTextSize h-1/4`}>
                                Всегда открыты к новым предложениям и сотрудничеству
                            </div>
                            <div className={`w-full h-1/2 flex justify-center items-end`}>
                                <CiBullhorn size={100} className={`w-1/2 h-1/2`}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`shrink-0 bg-[rgba(31,31,31,.5)] ml-[1px] mb-[1px] relative overflow-hidden duration-500 transition-all w-ContactsCubeWidth h-ContactsCubeHeight hover:bg-[#1e1e1e]`}>
                        <div
                            className={`flex items-stretch justify-start flex-flow absolute z-[50] top-0 left-0 w-full h-full p-ContactsCubeInnerPadding`}>
                            <div className={`leading-ContactsCubeTextLeading text-ContactsCubeTextSize h-1/4`}>
                                Рассматриваем как сотрудников в штат, так и работу на удалёнке
                            </div>
                            <div className={`w-full h-1/2 flex justify-center items-end`}>
                                <CiUser size={100} className={`w-1/2 h-1/2`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;