import React from 'react';

interface OrderListItem {
    title: string;
    description: string;
}

interface OrderedListProps {
    name: string;
    description: string;
    orderList: OrderListItem[];
}

const OrderedList = ({name, description, orderList}: OrderedListProps) => {
    return (
        <section className={`px-WebsiteCreatingWelcomePaddingX w-full flex flex-col items-center`}>
            <div className={`xl:flex xl:items-start xl:justify-start flex-col w-OrderedListWidth max-w-[1200px] mt-[150px]`}>
                <h2 className={`mb-OrderedListHeadingMargin font-normal text-customerTitleSize leading-customerTitleLeading`}>{name}</h2>
                <div className={`w-full xl:shrink-0`}>
                    <p className={`max-w-[1200px] text-OrderedListDescrSize leading-OrderedListDescrLeading flex flex-col justify-start items-stretch flow mb-OrderedListDescrMargin`}>
                        {description}
                    </p>
                </div>
                <ul>
                    {orderList.map((item, index) => (
                        <li key={index} className={`website-creating-list-item  ${index ? `mt-OrderedListItemMargin` : null}`}>
                            <div className="text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number">
                                0{index + 1}
                            </div>
                            <p className="block text-[30px] leading-[40px] website-creating-list-item-heading font-railway">{item.title}</p>
                            <p className="block text-[20px] leading-[34px] website-creating-list-item-descr max-md:mt-[10px]">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default OrderedList;