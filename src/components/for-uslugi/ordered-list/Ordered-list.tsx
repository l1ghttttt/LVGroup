import React from 'react';

interface OrderListItem {
    title: string;
    description: string | string[];
}

interface OrderedListProps {
    name: string;
    description: string;
    orderList: OrderListItem[];
    disableNumber?: boolean,
}

const OrderedList = ({name, description, orderList, disableNumber = false}: OrderedListProps) => {
    return (
        <section className={`px-WebsiteCreatingWelcomePaddingX w-full flex flex-col items-center`}>
            <div className={`xl:flex xl:items-start xl:justify-start flex-col w-OrderedListWidth max-w-[1200px] mt-[150px] max-lg:mt-[100px] max-sm:mt-[50px]`}>
                <h2 className={`mb-OrderedListHeadingMargin font-normal text-customerTitleSize leading-customerTitleLeading`}>{name}</h2>
                <div className={`w-full xl:shrink-0`}>
                    {description ? (<p className={`max-w-[1200px] text-OrderedListDescrSize leading-OrderedListDescrLeading flex flex-col justify-start items-stretch flow mb-OrderedListDescrMargin`}>
                        {description}
                    </p>) : null}

                </div>
                <ul>
                    {orderList.map((item, index) => (
                        <li key={index} className={`website-creating-list-item ${item.description ? `` : `list-item-full`}   ${index ? `mt-OrderedListItemMargin` : null}`}>
                            <div className="text-[16px] pb-[12px] mb-[12px] border-b-[1px] border-solid border-foreground website-creating-list-item-number">
                                {!disableNumber ? (<>
                                    {index < 9 ? `0${index + 1}` : null}
                                    {index >= 9 ? `${index + 1}` : null}
                                </>) : null}

                            </div>
                            <p className="block text-[30px] leading-[40px] max-md:text-[21px] max-md:leading-[28px] website-creating-list-item-heading font-railway">{item.title}</p>
                            <p className="block text-[20px] leading-[34px] max-md:text-[17px] max-md:leading-[24px] website-creating-list-item-descr max-md:mt-[10px]">{
                                Array.isArray(item.description) ? (
                                    item.description.map((subItem, subIndex) => <span key={subIndex}>{subItem} <br/></span>)
                                ) : (
                                    <span>{item.description}</span>
                                )
                            }</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default OrderedList;