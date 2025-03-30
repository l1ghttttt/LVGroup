import React from 'react';
import Order from "@/components/order/Order";
import CasesList from "@/components/cases-list/Cases-list";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import { CiSquareCheck, CiUser, CiBoxList, CiRoute } from "react-icons/ci";

const featuresList = [
    {
        icon: <CiBoxList size={100} className={`w-full`} />,
        title: "Покажем, как действовать",
        description: "Мы дадим и поможем внедрить проверенные на практике инструменты продаж."
    },
    {
        icon: <CiSquareCheck size={100} className={`w-full`} />,
        title: "Поможем выполнить поставленный результат",
        description: "Проведем аудит, устраним \"зоны роста\", обучим персонал, а также дадим гарантии."
    },
    {
        icon: <CiUser size={100} className={`w-full`} />,
        title: "Мы знаем, как определить ваших конкурентов",
        description: "Не важно какая сфера бизнеса - все разработанные инструменты дадут результат и сделают вас №1 в своей нише."
    },
    {
        icon: <CiRoute size={100} className={`w-full`} />,
        title: "Дальнейшее сопровождение",
        description: "Оперативно подключимся к решению новых задач и открытию новых направлений бизнеса."
    }
];

const orderList = [
    {
        title: "Встреча и планирование реализации проекта",
        description: ""
    },
    {
        title: "Проведение вводного аудита",
        description: ""
    },
    {
        title: "Создание и согласование плана по реализации проекта",
        description: ""
    },
    {
        title: "Разработка/доработка всех регламентов и документов отдела продаж",
        description: ""
    },
    {
        title: "Набор/добор команды при необходимости, контроль внедрения всех инструментов в компании заказчика",
        description: ""
    },
    {
        title: "Выполнение поставленного денежного показателя, как итог успешной реализации проекта",
        description: ""
    },
    {
        title: "Дальнейшая помощь заказчику в новых проектах, аудитах отдела продаж и дополнительных обучениях",
        description: ""
    }
];

const CreateSalesment = () => {

    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Создание/развитие отделов продаж`}
                description={`LV Group – это не просто хорошие бизнес-тренеры, HR-ы или "продажники" - работая с нами, вы получаете все необходимые услуги в одном месте от нашей команды.`}
                background={`CreateSalesment.mp4`}
            />

            <div className={`bg-background flex flex-col items-center`}>

                <OrderedList
                    name={`Как мы работаем`}
                    description={`От вашей идеи до пошагового плана реализации совместного и успешного проекта.`}
                    orderList={orderList}
                />

                <CasesList
                    tags={false}
                />

                <OwnFeatures
                    title={`Что вы получаете, работая с нами`}
                    featuresList={featuresList}
                />

                <Order />
            </div>

        </main>
    );
};

export default CreateSalesment;