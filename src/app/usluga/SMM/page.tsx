import React from 'react';
import {CiBookmarkCheck, CiBoxList, CiCalendar, CiDiscount1, CiGrid32, CiMonitor} from "react-icons/ci";
import Order from "@/components/order/Order";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import CasesListWrapper from "@/components/cases-list/CasesListWrapper";

const featuresList = [
    {
        icon: <CiMonitor size={100} className={`w-full`} />,
        title: "Качественные специалисты",
        description: "Над каждым проектом работает целая команда специалистов: дизайнеры, видеографы, копирайтеры, stories-мейкеры и менеджеры проектов, а не один SMM-специалист, который делает все, но значительно менее качественно."
    },
    {
        icon: <CiGrid32 size={100} className={`w-full`} />,
        title: "Работа по стратегии с четкими целями и задачами",
        description: "Все наши специалисты нацелены на результат - мы не работаем с соцсетями по принципу «что-то делается, но не понятно для чего»."
    },
    {
        icon: <CiBookmarkCheck size={100} className={`w-full`} />,
        title: "Прозрачная и понятная отчетность",
        description: "Сформируем и расшифруем клиенту статистику по каждому месяцу – выявим зоны роста и самые эффективные инструменты."
    },
    {
        icon: <CiBoxList size={100} className={`w-full`} />,
        title: "Решим все дополнительные задачи маркетинга",
        description: "Новый фирменный стиль, съемка блюд food-фотографом или баннер для наружной рекламы? – все задачи будут решены с минимальным участием собственника бизнеса."
    },
    { icon:
            <CiDiscount1 size={100} className={`w-full`} />,
        title: "Честное продвижение",
        description: "Лучше 500 активных подписчиков, чем 10000 накрученных инстаграм-ботов."
    },
    {
        icon: <CiCalendar size={100} className={`w-full`} />,
        title: "Глубокое погружение в вашу тематику",
        description: "Будь-то бурятская культура, стоматология или автосервис – наши специалисты вникают в каждую нишу и предлагают самые эффективные инструменты продвижения."
    },
];

const orderList = [
    {
        title: "Анализ и стратегия",
        description: "Проанализируем ваши соцсети, определим целевую аудиторию. Сформируем стратегию, цели и задачи SMM продвижения."
    },
    {
        title: "Разработка контент-плана",
        description: "Создаем и утверждаем контент-план на месяц, не выдумываем каждый день, что будем выкладывать завтра."
    },
    {
        title: "Визуал и оформление профиля",
        description: "Разработаем или доработаем визуал профиля от актуального, постов и историй до taplink и обложек."
    },
    {
        title: "Работа с блогерами и сообществами",
        description: "Имеем большой опыт работы блогерами и рекламными пабликами – самостоятельно оценим всю статистику и подберем подходящее и эффективное продвижение."
    },
    {
        title: "Создание контента",
        description: "Организуем съемки любой сложности, подберем моделей, фотографов и видеографов, а также проконтролируем качественное выполнение всех поставленных задач."
    },
    {
        title: "Аналитика",
        description: "Предоставим прозрачный и понятный отчет о проделанной работе за месяц, сформируем дальнейшую стратегию продвижения исходя из эффективности работы всех инструментов продвижения."
    }
];

const SMM = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`SMM-продвижение в социальных сетях`}
                description={`Выстроим правильное позиционирование вашей компании в медиапространстве.`}
                background={`SMMVideo.mp4`}
            />

            <div className={`bg-background`}>


                <OrderedList
                    name={`Что входит в услуги`}
                    description={`Представим ваш бизнес, продукт или сервис в правильном свете. Построим доверительные отношения с вашей целевой аудиторией через SMM продвижение.`}
                    orderList={orderList}
                />

                <CasesListWrapper forcedInitialCategory={"Маркетинг"} onlyHomePage={false} />

                <OwnFeatures
                    title={`Что вы получаете, работая с нами`}
                    featuresList={featuresList}
                />


                <Order />
            </div>

        </main>
    );
};

export default SMM;