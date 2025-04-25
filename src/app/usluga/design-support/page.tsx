import React from 'react';
import Order from "@/components/order/Order";
import CasesList from "@/components/cases-list/Cases-list";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import {CiEdit, CiImageOn, CiCircleCheck, CiPenpot} from "react-icons/ci";

const featuresList = [
    {
        icon: <CiEdit size={100} className={`w-full`} />,
        title: "У Вас всегда «под рукой» дизайнер",
        description: "Не нужно искать фрилансеров, ждать ответа неделями и объяснять заново каждый раз."
    },
    {
        icon: <CiImageOn size={100} className={`w-full`} />,
        title: "Работаем в вашем стиле",
        description: "Сохраняем целостность визуального образа компании во всех материалах."
    },
    {
        icon: <CiCircleCheck size={100} className={`w-full`} />,
        title: "Решаем любые задачи",
        description: "От быстрых правок до концептуальных дизайнов под рекламу, упаковку или запуск нового продукта."
    },
    {
        icon: <CiPenpot size={100} className={`w-full`} />,
        title: "Всё в одном месте",
        description: "Дизайн, тексты, маркетинг — не нужно координировать подрядчиков."
    },
];

const orderList = [
    {
        title: "Оперативные правки и адаптация",
        description: "Быстро дорабатываем макеты, подгоняем под новые форматы, вносим изменения в уже готовые материалы."
    },
    {
        title: "Дизайн полиграфии",
        description: "Визитки, листовки, брошюры, меню, упаковка — всё, что можно напечатать, мы оформим красиво и с умом."
    },
    {
        title: "Цифровые макеты",
        description: "Баннеры для сайта, презентации, креативы для соцсетей и рекламы. "
    },
    {
        title: "Наружная реклама",
        description: "Дизайн вывесок, билбордов, указателей, брендирование транспорта и витрин."
    },
    {
        title: "Фирменный стиль и брендинг",
        description: "Если у вас ещё нет системы визуальной идентификации — разработаем. Если есть — поможем поддерживать её в едином стиле."
    },
];

const TechnicalSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Дизайн-поддержка`}
                description={`Визуальные решения для бизнеса — быстро, точно и в едином стиле. У вас не просто дизайнер — у Вас целая команда, готовая закрыть любые задачи: от визитки до наружной рекламы, от макетов для сайта до фирменного стиля.`}
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