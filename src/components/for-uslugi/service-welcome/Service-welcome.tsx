'use client'

import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";

interface ServiceWelcomeProps {
    title: string;
    description: string;
    background: string;
}

const ServiceWelcome = ({title, description, background}: ServiceWelcomeProps) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
    return (
        <section className={`relative object-cover w-full`}>

            <div className="video-background">
                <video autoPlay muted loop playsInline id="myVideo" className={theme == 'dark' ? '' : 'invert'}>
                    <source src={`/${background}`} type="video/mp4"/>
                </video>
            </div>

            <div
                className={`w-full px-WebsiteCreatingWelcomePaddingX flex max-xl:block pb-WebsiteCreatingWelcomePaddingBottom pt-WebsiteCreatingWelcomePaddingTop overflow-hidden`}>
                <h1 className={`xl:WebsiteCreatingWelcomeHeadingWidth`}>
                    <div className={`leading-[1.1] text-WebsiteCreatingWelcomeHeadingSize font-railway`}>
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