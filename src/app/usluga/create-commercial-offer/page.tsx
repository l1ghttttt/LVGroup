import React from 'react';
import Order from "@/components/order/Order";
import CasesList from "@/components/cases-list/Cases-list";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import {CiEdit, CiCircleCheck, CiMedal, CiCalendarDate} from "react-icons/ci";

const featuresList = [
    {
        icon: <CiEdit size={100} className={`w-full`} />,
        title: "Индивидуальный подход",
        description: "Каждое коммерческое предложение разрабатывается с учётом специфики Вашего бизнеса и целей."
    },
    {
        icon: <CiMedal size={100} className={`w-full`} />,
        title: "Опыт и креативность",
        description: "Наша команда сочетает профессионализм с творческим подходом, создавая уникальные решения."
    },
    {
        icon: <CiCircleCheck size={100} className={`w-full`} />,
        title: "Комплексное решение",
        description: "От идеи до реализации — мы сопровождаем Вас на каждом этапе."
    },
    {
        icon: <CiCalendarDate size={100} className={`w-full`} />,
        title: "Соблюдение сроков",
        description: "Чёткое планирование и контроль позволяют нам выполнять проекты вовремя."
    },
];

const orderList = [
    {
        title: "Анализ и стратегия",
        description: "Понимание Вашей целевой аудитории, конкурентного окружения и уникальных преимуществ."
    },
    {
        title: "Структура и сценарий",
        description: "Разработка логичной структуры презентации, которая ведёт клиента от проблемы к решению.​"
    },
    {
        title: "Копирайтинг",
        description: "Создание текстов, которые говорят на языке Вашей аудитории и подчеркивают выгоды сотрудничества."
    },
    {
        title: "Дизайн и визуализация",
        description: "Оформление презентации в едином стиле с использованием инфографики, иконок и других визуальных элементов.​"
    },
    {
        title: "Форматы подачи",
        description: "Подготовка материалов в удобном для Вас формате."
    },
];

const TechnicalSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Создание коммерческого предложения`}
                description={`Презентация, которая продаёт за вас. Мы создаём коммерческие предложения и маркетинг-киты, которые не просто рассказывают о вашем бизнесе, а убеждают клиентов выбрать именно вас. Это не просто красивые слайды — это инструмент продаж, выверенный до мелочей.`}
                background={`StyleCreating.mp4`}

            />

            <div className={`bg-background`}>

                <OrderedList
                    name={`Что мы делаем`}
                    description={``}
                    orderList={orderList}
                />

                <CasesList />

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