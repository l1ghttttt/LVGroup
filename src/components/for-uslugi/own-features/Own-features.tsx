import React from 'react';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface OwnFeaturesProps {
    title: string;
    featuresList: Feature[];
}

const OwnFeatures = ({ title, featuresList }: OwnFeaturesProps) => {



    return (
        <section className="px-WebsiteCreatingWelcomePaddingX w-full flex flex-col items-center relative mb-[100px]">
            <div className="flex flex-col w-OrderedListWidth mt-[150px] max-w-[1200px]">
                <h2 className="mb-OrderedListHeadingMargin font-normal text-customerTitleSize leading-customerTitleLeading">{title}</h2>
            </div>
            <div className="w-full flex justify-center">
                <ul className="flex flex-wrap w-[90%] max-xl:w-[75%] max-md:w-full justify-between gap-y-[40px] max-xl:gap-y-[75px]">
                    {featuresList.map((feature, index) => (
                        <li key={index} className="w-[45%] max-xl:w-full gap-[20px] flex items-center xl:h-[200px]">
                            <div className="w-[100px] h-[100px] max-md:w-[85px] max-md:h-[85px] max-sm:w-[50px] max-sm:h-[50px] flex-shrink-0">
                                {feature.icon}
                            </div>
                            <div className="flex flex-col justify-start gap-[20px] h-full pt-[20px] max-xl:justify-around">
                                <h3 className="text-mainColor text-[28px] leading-[40px] font-railway font-semibold max-2xl:text-[26px] max-md:text-[24px] max-sm:text-[22px] max-md:leading-[32px]">
                                    {feature.title}
                                </h3>
                                <p className="text-[18px] leading-[28px] max-2xl:text-[16px] max-md:text-[15px] max-sm:text-[14px] max-sm:leading-[22px]">
                                    {feature.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default OwnFeatures;