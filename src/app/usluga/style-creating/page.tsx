import React from 'react';
import Order from "@/components/order/Order";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import {CiMedal, CiTrophy, CiStar, CiCalendarDate} from "react-icons/ci";
import CasesListWrapper from "@/components/cases-list/CasesListWrapper";

const featuresList = [
    {
        icon: <CiMedal size={100} className={`w-full`} />,
        title: "Индивидуальный подход",
        description: "Каждый проект начинается с глубокого понимания вашего бизнеса и целей."
    },
    {
        icon: <CiTrophy size={100} className={`w-full`} />,
        title: "Комплексное решение",
        description: "От идеи до реализации — мы сопровождаем вас на каждом этапе."
    },
    {
        icon: <CiStar size={100} className={`w-full`} />,
        title: "Опыт и креативность",
        description: "Наша команда сочетает профессионализм с творческим подходом, создавая уникальные решения."
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
        description: "Понимание вашей целевой аудитории, конкурентного окружения и уникальных преимуществ."
    },
    {
        title: "Разработка логотипа",
        description: "Создание уникального и запоминающегося логотипа, отражающего характер вашего бренда."
    },
    {
        title: "Цветовая палитра и типографика",
        description: "Подбор фирменных цветов и шрифтов, которые будут использоваться во всех материалах."
    },
    {
        title: "Фирменные элементы",
        description: "Создание визиток, бланков, конвертов и других носителей фирменного стиля."
    },
    {
        title: "Брендбук",
        description: "Подробное руководство по использованию всех элементов фирменного стиля для обеспечения единообразия."
    },
];

const TechnicalSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Разработка фирменного стиля`}
                description={`Создаём визуальную идентичность, которая выделяет Ваш бренд и запоминается. Мы разрабатываем фирменный стиль, который отражает суть Вашего бизнеса, привлекает внимание и формирует доверие у клиентов. От логотипа до полного брендбука — всё под ключ.`}
                background={`StyleCreating.mp4`}
            />

            <div className={`bg-background`}>

                <OrderedList
                    name={`Что мы делаем`}
                    description={``}
                    orderList={orderList}
                />

                <CasesListWrapper forcedInitialCategory={"Дизайн"} onlyHomePage={false} />

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