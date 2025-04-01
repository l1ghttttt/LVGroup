import React from 'react';
import CasesList from "@/components/cases-list/Cases-list";
import Order from "@/components/order/Order";

const CasesPage = () => {
    return (
        <>
            <div className="cases-container mt-[50px] max-md:mt-[100px]">
                <CasesList tags={true} name={`Наши проекты`} disableSeeAll={true}/>
                <Order />
            </div>
        </>
    );
};

export default CasesPage;