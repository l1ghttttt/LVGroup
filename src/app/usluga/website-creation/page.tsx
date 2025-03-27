import React from 'react';
import WebsiteCreationWelcome from "@/components/for-uslugi/website-creation-welcome/Website-creation-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import WelcomeCases from "@/widgets/welcome-cases/Welcome-cases";
import Order from "@/components/order/Order";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";

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