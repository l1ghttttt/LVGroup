import React from 'react';
import WebsiteCreationWelcome from "@/widgets/website-creation-welcome/Website-creation-welcome";
import OrderedList from "@/widgets/ordered-list/Ordered-list";
import WelcomeCases from "@/widgets/welcome-cases/Welcome-cases";
import Order from "@/widgets/order/Order";

const WebsiteCreation = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>
            <WebsiteCreationWelcome/>
            <div className={`bg-background`}>
                <OrderedList/>
                <WelcomeCases/>
                <h2 className={`h-[200px] mt-[150px] text-center`}>Что вы получаете, работая с нами</h2>
                <Order/>
            </div>

        </main>
    );
};

export default WebsiteCreation;