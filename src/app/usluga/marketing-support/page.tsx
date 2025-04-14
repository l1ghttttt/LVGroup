import React from 'react';
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import CasesList from "@/components/cases-list/Cases-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import Order from "@/components/order/Order";
import {CiSquareCheck, CiViewList, CiDollar, CiTrophy} from "react-icons/ci";

const featuresList = [
    {
        icon: <CiSquareCheck size={100} className={`w-full`} />,
        title: "Один подрядчик на весь маркетинг",
        description: "Не нужно держать в штате дизайнера, копирайтера, таргетолога, SMM-специалиста, программиста и сотрудника по контексту."
    },
    {
        icon: <CiTrophy size={100} className={`w-full`} />,
        title: "Сильная команда с опытом",
        description: "Мы не тестируем гипотезы за Ваш счёт. Применяем только то, что реально работает — опираясь на десятки проектов."
    },
    {
        icon: <CiViewList size={100} className={`w-full`} />,
        title: "Контроль и отчётность",
        description: "Всё прозрачно: Вы видите, что делается, когда и зачем."
    },
    {
        icon: <CiDollar size={100} className={`w-full`} />,
        title: "Результат, а не процессы",
        description: "Нам важно, чтобы маркетинг приносил вам выручку, а не просто «работал»."
    },
]

const orderList = [
    {
        title: "Стратегия продвижения",
        description: [
            "- Анализ текущего положения компании",
            "- Подбор эффективных каналов продвижения под Вашу целевую аудиторию",
            "- План активности на месяц/квартал /год"
        ]
    },
    {
        title: "Наружная реклама и офлайн-продвижение",
        description: [
            "- Участие в мероприятиях города",
            "- Креативные инструменты привлечения (включая ростовые куклы и любые необычные форматы)",
            "- Полный цикл: от идеи до реализации"
        ]
    },
    {
        title: "SMM и реклама в пабликах",
        description: [
            "- Поиск и подбор только действительно работающих площадок",
            "- Договоренности, контроль публикаций и анализ эффективности",
        ]
    },
    {
        title: "Дизайн и контент",
        description: [
            "- Разработка всех макетов, визуальных решений и рекламных материалов",
            "- Фото- и видеосъемки под ключ: от брифа до готовых роликов",
            "- Контроль за качеством и сроками"
        ]
    },
    {
        title: "Сайт и реклама",
        description: [
            "- Полное ведение сайта: тексты, визуал и улучшение конверсии",
            "- Настройка и ведение контекстной рекламы",
            "- Постоянный мониторинг, тестирование и улучшения"
        ]
    },
]

const MarketingSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome title={`Маркетинговое сопровождение`}
                            description={`Комплексная работа над вашим продвижением — без головной боли и разочарований`}
                            background={`SMMVideo.mp4`}
            />

            <div className={`bg-background flex flex-col items-center`}>

                <OrderedList
                    name={`Что входит в услуги`}
                    description={`Мы берем на себя полный цикл маркетинга — от стратегии до внедрения, от рекламы до креатива. Вам не нужно контролировать подрядчиков, следить за сроками, разбираться в рекламных кабинетах и пытаться найти в штат сильного маркетолога.`}
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

export default MarketingSupport;