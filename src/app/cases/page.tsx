'use client'

import React, {useEffect, useState} from 'react';
import Order from "@/components/order/Order"
import CasesList from "@/components/cases-list/Cases-list";

const CasesPage = () => {

    useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div className="cases-container mt-[50px] max-md:mt-[100px]">
                <CasesList name={`Наши проекты`} onlyHomePage={false} disableSeeAll={true}/>
                <Order/>
            </div>
        </>
    );
};

export default CasesPage;