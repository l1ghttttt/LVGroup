import React from 'react';

interface statsItem {
    name?: string;
    value: string;
    description?: string;
}

interface CustomerStatsProps {
    statsList: statsItem[];
}

const CustomerStats = ({statsList}: CustomerStatsProps) => {
    return (
        <section>
            <ul className={`w-full relative flex items-start justify-start flex-wrap mx-[-30px] my-[45px] max-sm:mx-0 max-sm:block`}>
                {statsList.map((stat, index) => (
                    <li className={`w-1/3 px-[30px] shrink-0 max-sm:w-full max-sm:p-0 max-sm:mb-[20px] max-lg:w-1/2 max-lg:mb-[30px]`} key={index}>
                        <div className={`text-[18px] leading-[20px] mb-[11px]`}>
                            {stat.name}
                        </div>
                        <div className={`border-b-[1px] flex items-baseline pb-[15px] max-sm:pb-[20px]`}>
                            <div
                                className={`text-mainColor text-customerInfographySize leading-customerInfographyLeading`}>{stat.value}
                            </div>
                            <div
                                className={` text-mainColor text-customerInfographySmallSize mx-[10px] leading-customerInfographySmallLeading`}>{stat.description}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CustomerStats;