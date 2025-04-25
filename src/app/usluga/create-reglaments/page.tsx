import React from 'react';
import Order from "@/components/order/Order";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import {CiBoxList, CiSquareCheck, CiUser, CiRoute} from "react-icons/ci";
import CasesListWrapper from "@/components/cases-list/CasesListWrapper";

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
        title: "Эффективные сценарии любых обзвонов для отдела продаж или колл-центра",
        description: ""
    },
    {
        title: "Сценарии проведения встреч, презентаций, консультаций клиентов",
        description: ""
    },
    {
        title: "Планы ввода в должность вновь принятых сотрудников",
        description: ""
    },
    {
        title: "Должностные инструкции для сотрудников колл-центра",
        description: ""
    },
    {
        title: "Организующая схема всей компании, с ЦКП по каждой должности",
        description: ""
    },
    {
        title: "Регламенты проведения ежедневных, еженедельных планерок колл-центра",
        description: ""
    },
    {
        title: "Понятные, прозрачные и рабочие формы отчетности для сотрудников",
        description: ""
    },
    {
        title: "Регламенты эффективного подбора персонала в компании на любые вакансии",
        description: ""
    },
    {
        title: "Инструменты внутреннего обучения, среза знаний и оценки эффективности персонала",
        description: ""
    },
    {
        title: "Регламенты работы с клиентской базой и принципы ведения переписки с клиентами компании",
        description: ""
    },
];

const TechnicalSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Разработка регламентов и стандартов`}
                description={`В нашей команде только практики с опытом продаж более 15-ти лет, имеющие за плечами множество успешных проектов в различных сферах бизнеса. Качественно разработанные регламенты сократят ввод в должность сотрудников в несколько раз.`}
                background={`CreatingCallCenter.mp4`}

            />

            <div className={`bg-background`}>

                <OrderedList
                    name={`Что может разработать наша команда`}
                    description={``}
                    orderList={orderList}
                />

                <CasesListWrapper forcedInitialCategory={"Call-центр"} />

                <OwnFeatures
                    title={`Что вы получаете, работая с нами`}
                    featuresList={featuresList}
                />

                <Order />

            </div>

        </main>
    );
};

export default TechnicalSupport;