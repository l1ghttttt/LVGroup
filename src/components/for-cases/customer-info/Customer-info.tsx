import React from 'react';
import Image from "next/image";

interface Technology {
    logo: string;
    name: string;
}

interface CustomerInfoProps {
    title: string;
    logo: string;
    mobileLogo?: string;
    whiteBackground?: boolean;
    tags: string[];
    technologies?: Technology[];
    descriptions?: string[];
}

const CustomerInfo = ({title, logo, mobileLogo = logo, tags, technologies, descriptions, whiteBackground = false}: CustomerInfoProps) => {

    return (
        <section className="w-full">
            <div className=" mb-CustomerTitleMargin flex flex-col">
                <div className={`p-servicesTitlePadding`}>
                    <div className={`flex justify-between`}>
                        <h2 className={`max-sm:w-full text-customerTitleSize leading-customerTitleLeading w-3/5`}>{title}</h2>
                        <Image
                            className={`w-[150px] h-[150px] 2xl:hidden ${!whiteBackground && "max-2xl:mr-[35px] max-lg:mr-[5px]"} max-sm:mb-0 max-sm:hidden ${whiteBackground && "bg-white p-[4] rounded-xl"}`}
                            src={`/${mobileLogo}`}
                            alt={`лого заказчика`}
                            width={180} height={180}/>
                    </div>
                    <ul className={`flex p-casesFilterPadding px-[15px] flex-wrap gap-2 gap-y-3`}>
                        {tags.map(tag => (
                            <li key={tag}>
                                <button
                                    key={tag}
                                    className={`text-[18px] max-sm:text-[14px] select-none text-background bg-foreground hover:bg-mainColor cursor-pointer duration-300 tracking-widest h-[40px] flex items-center justify-center rounded-full px-[20px]`}>
                                    {tag}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <h4 className={`text-customerClientSize leading-customerClientLeading customer-spacing w-full px-CustomerSpacingPadding`}><span
                    className={`text-mainColor`}>Наш</span> клиент и <span
                    className={`text-mainColor`}>его</span> задача</h4>
                <div
                    className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>

                    <div className={`w-full flex gap-[30px] items-center max-xl:flex-col`}>
                        <Image
                            className={`w-[250px] 2xl:absolute 2xl:top-0 2xl:w-customerImageWidth ${!whiteBackground && "pr-[20px]"} max-2xl:hidden max-sm:mb-0 max-sm:block max-sm:w-3/4 h-auto CustomerImage max-sm:pr-0 ${whiteBackground && "bg-white py-3 px-2 rounded-xl"}`}
                            src={`/${logo}`}
                            alt={`лого заказчика`}
                            width={250} height={250}/>
                        {technologies ? (
                            <aside
                                className={`absolute top-0 left-full w-stackWidth ml-stackMargin  max-xl:static max-xl:w-full max-xl:ml-0`}>
                                <p className={`text-[15px] leading-[15px] border-t-[1px] border-stack pt-[10px] mb-[9px]`}>Технологии
                                    в проекте</p>
                                <ul className={`flex flex-col max-xl:flex-row flex-wrap stack-grid`}>
                                    {technologies.map((technology, i) => (
                                        <li key={i} className={`grid stack-layout items-center h-fit py-[10px] px-0 text-[18px] leading-[21px]`}>
                                            <Image key={i} src={`/${technology.logo}`} alt={'иконка технологии'} width={`25`}
                                                   height={`25`}
                                                   className={`w-auto grayscale`}/>
                                            <p>{technology.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        ) : null}
                        {descriptions ? (
                            <div
                                className={`flex flex-col gap-[10px] justify-start text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>
                                {descriptions.map((description, i) => (
                                    <p key={i}>
                                        {description}
                                    </p>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerInfo;
