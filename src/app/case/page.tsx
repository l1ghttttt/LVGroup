import React from 'react';
import CustomerInfo from "@/widgets/customer-info/Customer-info";

const Page = () => {
    return (
        <>
            <CustomerInfo />
            <div className={`h-[1000px]`}></div>
        </>
    );
};

export default Page;