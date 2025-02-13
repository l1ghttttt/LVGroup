'use client'

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {useTheme} from "next-themes";

const WebsiteCreationWelcome = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    //console.log(theme);
    if (!mounted) return null;
    return (
        <section className={`relative object-cover w-full`}>
            <Image src={'/WebsiteCreating3.jpeg'} alt={`background`} width={1920} height={800} className={`w-full h-full absolute z-[-1] object-cover ${theme == 'dark' ? '' : 'invert'}`}/>
            <div
                className={`w-full px-WebsiteCreatingWelcomePaddingX flex max-xl:block pb-WebsiteCreatingWelcomePaddingBottom pt-WebsiteCreatingWelcomePaddingTop overflow-hidden`}>
                <h1 className={`xl:WebsiteCreatingWelcomeHeadingWidth`}>
                    <div className={`leading-[1.1] text-WebsiteCreatingWelcomeHeadingSize text-mainColor font-railway`}>
                        Создание сайтов
                    </div>
                </h1>
                <div
                    className={`xl:w-WebsiteCreatingWelcomeDescrWidth p-WebsiteCreatingWelcomeDescrPadding ml-WebsiteCreatingWelcomeDescrMargin`}>
                    <div className={`w-full max-w-[900px] text-WebsiteCreatingWelcomeDescrSize leading-WebsiteCreatingWelcomeDescrLeading mt-WebsiteCreatingWelcomeDescrMarginTop`}>
                        Каждый наш сайт – это инструмент привлечения клиентов для бизнеса. Разработаем понятную структуру и
                        визуал под вашу целевую аудиторию. Внимательно отнесемся ко всем пожеланиям и предложим наилучшие
                        передовые решения в области веб-дизайна.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteCreationWelcome;