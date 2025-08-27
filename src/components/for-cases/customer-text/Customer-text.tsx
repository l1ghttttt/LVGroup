import React from 'react';
import Link from "next/link";

interface BonusText {
    link?: string;
    text: string;
}

interface CustomerTextProps {
    title: string;
    defaultText?: string[];
    dottedText?: string[];
    numberText?: string[];
    lastText?: string[];
    bonusName?: string;
    bonusTexts?: BonusText[];
}

function adaptText(text: string) {
    return text
        // заменяем <br>
        .replace(/<br\s*\/?>/gi, '<span class="hidden sm:inline"><br/></span>')
        // заменяем <b>
        .replace(/<b>/gi, '<span class="font-bold">')
        // заменяем </b>
        .replace(/<\/b>/gi, '</span>');
}

const CustomerText = ({title, defaultText, dottedText, numberText, lastText, bonusName, bonusTexts}: CustomerTextProps) => {
    return (
        <div
            className={`w-full flex gap-[30px] mt-[45px] max-lg:gap-[20px] max-lg:mt-[20px] items-start justify-center flex-col relative`}>
            <h2 className={`text-customerClientSize text-mainColor`}>{title}</h2>
            <div
                className={`flex flex-col gap-[5px] justify-start leading-[34px] text-[21px] max-md:text-[17px] max-md:leading-[30px]`}>

                {defaultText ? (
                    defaultText.map((text, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: adaptText(text) }} />
                    ))
                ) : null}

                {dottedText ? (
                    <ul className="flex flex-col gap-[5px]">
                        {dottedText.map((text, i) => (
                            <li key={i} className="pl-[25px] relative customerList">
                                <p
                                    className="my-[20px]"
                                    dangerouslySetInnerHTML={{ __html: adaptText(text) }}
                                />
                            </li>
                        ))}
                    </ul>
                ) : null}

                {numberText ? (
                    <ul className="flex flex-col gap-[5px] ">
                        {numberText.map((text, i) => (
                            <li key={i} className="pl-[25px] relative" >
                                <p className="text-[16px] conclusion">
                                    {i < 9 ? `0${i + 1}` : i + 1}
                                </p>
                                <p
                                    className="my-[20px]"
                                    dangerouslySetInnerHTML={{ __html: adaptText(text) }}
                                />
                            </li>
                        ))}
                    </ul>
                ) : null}

                {lastText ? (
                    lastText.map((text, i) => (
                        <p key={i} dangerouslySetInnerHTML={{ __html: adaptText(text) }} />
                    ))
                ) : null}

                {bonusName || bonusTexts ? (
                    <aside
                        className={`absolute top-0 left-full w-stackWidth ml-stackMargin  max-xl:static max-xl:w-full max-xl:ml-0`}>
                        <p className={`text-[15px] leading-[15px] border-t-[1px] border-stack pt-[10px] mb-[9px]`}>{bonusName}</p>
                        <ul className={`flex flex-col max-xl:flex-row flex-wrap stack-grid`}>
                            <li className={`items-center py-[10px] px-0 text-[18px] gap-1 leading-[21px]`}>

                                {bonusTexts?.map((text, i) => (
                                    text.link ? (
                                        <Link href={`/${text.link}`} key={i}>{text.text}</Link>
                                    ) : (
                                        <p key={i}>{text.text}</p>
                                    )
                                ))}

                            </li>
                        </ul>
                    </aside>
                ) : null}

            </div>
        </div>
    );
};

export default CustomerText;