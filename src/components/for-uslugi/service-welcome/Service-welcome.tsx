'use client'

import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";

interface ServiceWelcomeProps {
    title: string;
    description: string;
    background: string;
    whiteBg?: boolean;
    filters?: boolean;
}

const ServiceWelcome = ({title, description, background, whiteBg=false, filters=false}: ServiceWelcomeProps) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(theme)
    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && whiteBg) {
            if (theme === 'dark') {
                setCurrentTheme('light');
            } else if (theme === 'light') {
                setCurrentTheme('dark');
            }
        }
    }, [mounted, whiteBg, theme]);
    if (!mounted) return null;

    return (
        <section className={`relative object-cover w-full`}>

            {currentTheme === 'dark' ? (
                <div className="video-background">
                    <video autoPlay muted loop playsInline id="myVideo"
                           className={`${filters && 'grayscale contrast-200 brightness-125'}`}>
                        <source src={`/${background}`} type="video/mp4"/>
                    </video>
                </div>
            ) : (
                <div className="video-background">
                    <video autoPlay muted loop playsInline id="myVideo"
                           className={`${filters && 'grayscale contrast-200 brightness-125'} invert`}>
                        <source src={`/${background}`} type="video/mp4"/>
                    </video>
                </div>
            )}


            <div
                className={`w-full px-WebsiteCreatingWelcomePaddingX flex max-xl:block pb-WebsiteCreatingWelcomePaddingBottom pt-WebsiteCreatingWelcomePaddingTop overflow-hidden`}>
                <h1 className={`xl:w-WebsiteCreatingWelcomeHeadingWidth`}>
                    <div
                        className={`leading-[1.1] text-WebsiteCreatingWelcomeHeadingSize font-railway w-[125%] max-2xl:w-[175%] max-xl:w-auto`}>
                        {title}
                    </div>
                </h1>
                <div
                    className={`xl:w-WebsiteCreatingWelcomeDescrWidth p-WebsiteCreatingWelcomeDescrPadding ml-WebsiteCreatingWelcomeDescrMargin`}>
                    {/*<p className={`text-welcomeDescr  max-md:hidden`}>Чтобы вы сфокусировались на других важных
                        задачах
                        бизнеса.<br/>В нашей команде более 20 профильных специалистов. <br/> Наша цель - это результат
                    </p>*/}
                    <div
                        className={`w-full max-w-[900px] text-WebsiteCreatingWelcomeDescrSize leading-[1.25] mt-WebsiteCreatingWelcomeDescrMarginTop`}>
                        {description}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceWelcome;