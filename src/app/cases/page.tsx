import React from 'react';
import CasesList from "@/components/cases-list/Cases-list";

const CasesPage = () => {
    return (
        <>
            <div className="cases-container mt-[50px] max-md:mt-[100px]">
                <CasesList tags={true}/>
            </div>
        </>
    );
};

export default CasesPage;