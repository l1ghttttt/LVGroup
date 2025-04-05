import React, { ReactNode } from 'react';

interface CustomerCommentsProps {
    children: ReactNode;
}

const CustomerComments: React.FC<CustomerCommentsProps> = ({ children }) => {
    return (
        <section
            className={`overflow-hidden w-[99vw] relative left-0 top-0 comment-gradient max-sm:aspect-[16/14] max-md:aspect-[16/10] max-xl:aspect-[16/9] aspect-[16/8] flex justify-center items-center my-[120px] max-md:my-[40px] max-md:mt-[15px] max-md:flex-col max-md:py-[50px] overflow-x-hidden`}>
            {children}
        </section>
    );
};

export default CustomerComments;
