'use client'

import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";

const WebsiteCreationWelcome = () => {
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
                    <source src="/WebsiteCreatingVideo.mp4" type="video/mp4"/>
                </video>
            </div>

            <div
                className={`w-full px-WebsiteCreatingWelcomePaddingX flex max-xl:block pb-WebsiteCreatingWelcomePaddingBottom pt-WebsiteCreatingWelcomePaddingTop overflow-hidden`}>
                <h1 className={`xl:WebsiteCreatingWelcomeHeadingWidth`}>
                    <div className={`leading-[1.1] text-WebsiteCreatingWelcomeHeadingSize font-railway`}>
                        Создание сайтов
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
                        Каждый наш сайт – это инструмент привлечения клиентов для бизнеса. Разработаем понятную
                        структуру и
                        визуал под вашу целевую аудиторию. Внимательно отнесемся ко всем пожеланиям и предложим
                        наилучшие
                        передовые решения в области веб-дизайна.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebsiteCreationWelcome;