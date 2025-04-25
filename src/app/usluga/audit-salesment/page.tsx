import React from 'react';
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import {CiBoxList, CiRoute, CiSquareCheck, CiUser} from "react-icons/ci";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import Order from "@/components/order/Order";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import CasesListWrapper from "@/components/cases-list/CasesListWrapper";

const orderList = [
    {
        title: "Анализ всей существующей документации и регламентов в отделе продаж компании",
        description: ""
    },
    {
        title: "Анализ ведения телефонных переговоров",
        description: ""
    },
    {
        title: "Анализ встреч/консультаций с клиентами компании",
        description: ""
    },
    {
        title: "Проверка знаний менеджеров «продукта» компании",
        description: ""
    },
    {
        title: "Анализ дальнейшего взаимодействия с клиентами компании",
        description: ""
    },
    {
        title: "Анализ работы менеджеров с действующей CRM-системой или клиентской",
        description: ""
    },
    {
        title: "Анализ коммерческих предложений компании, маркетинг-китов и других презентационных материалов",
        description: ""
    },
    {
        title: "Анализ отчетности, планерок и иных инструментов контроля в отделе продаж ",
        description: ""
    },
    {
        title: "Анализ системы обучения в компании",
        description: ""
    },
    {
        title: "Анализ источников клиентского траффика",
        description: ""
    },
]

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

const AuditSalesment = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Аудит отдела продаж`}
                description={`Выявим «зоны роста» отдела продаж, колл-центра или команды кураторов лечения в медицинских центрах. Дадим четкий пошаговый план действий по их устранению. Аудит может проводиться как в онлайн формате, так и в оффлайн формате.`}
                background={`CreateSalesment.mp4`}
            />

            <div className={`bg-background flex flex-col items-center`}>

                <OrderedList
                    name={`Что включает в себя аудит`}
                    description={``}
                    orderList={orderList}
                />

                <CasesListWrapper forcedInitialCategory={"Продажи"} />

                <OwnFeatures
                    title={`Что вы получаете, работая с нами`}
                    featuresList={featuresList}
                />

                <Order/>

            </div>

        </main>
);
};

export default AuditSalesment;