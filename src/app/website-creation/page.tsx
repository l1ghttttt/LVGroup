import React from 'react';
import WebsiteCreationWelcome from "@/widgets/website-creation-welcome/Website-creation-welcome";
import OrderedList from "@/widgets/ordered-list/Ordered-list";
import WelcomeCases from "@/widgets/welcome-cases/Welcome-cases";
import Order from "@/widgets/order/Order";
import OwnFeatures from "@/widgets/own-features/Own-features";

const WebsiteCreation = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>
            <WebsiteCreationWelcome/>
            <div className={`bg-background`}>
                <OrderedList/>
                <WelcomeCases/>
                <OwnFeatures/>
                <Order/>
            </div>

        </main>
    );
};

export default WebsiteCreation;