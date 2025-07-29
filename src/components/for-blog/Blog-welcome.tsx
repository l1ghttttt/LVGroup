'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface ServiceWelcomeProps {
    title: string;
    description: string;
    background: string;
    whiteBg?: boolean;
    filters?: boolean;
}

const BlogWelcome = ({
                         title,
                         description,
                         background,
                         whiteBg = false,
                         filters = false,
                     }: ServiceWelcomeProps) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted || !resolvedTheme) return null;

    const isDark = whiteBg ? resolvedTheme === 'light' : resolvedTheme === 'dark';

    return (
        <section className="relative object-cover w-full">
            <div className="video-background">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    id="myVideo"
                    className={`${filters && 'grayscale contrast-200 brightness-125'} ${!isDark && 'invert'}`}
                >
                    <source src={`/${background}`} type="video/mp4" />
                </video>
            </div>

            <div className="w-full px-BlogWelcomePaddingX flex max-xl:block pb-BlogWelcomePaddingBottom pt-BlogWelcomePaddingTop overflow-hidden">
                <h1 className="xl:w-WebsiteCreatingWelcomeHeadingWidth">
                    <div className="leading-[1.1] text-WebsiteCreatingWelcomeHeadingSize font-railway w-[125%] max-2xl:w-[175%] max-xl:w-auto">
                        {title}
                    </div>
                </h1>
                <div className="xl:w-WebsiteCreatingWelcomeDescrWidth p-WebsiteCreatingWelcomeDescrPadding ml-WebsiteCreatingWelcomeDescrMargin">
                    <div className="w-full max-w-[900px] text-WebsiteCreatingWelcomeDescrSize leading-[1.25] mt-BlogWelcomeDescrMarginTop">
                        {description}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogWelcome