import React from 'react';
import Order from "@/components/order/Order";
import CasesList from "@/components/cases-list/Cases-list";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import {CiBookmarkCheck, CiBoxList, CiCalendar, CiDiscount1, CiGrid32, CiMonitor} from "react-icons/ci";

const featuresList = [
    {
        icon: <CiMonitor size={100} />,
        title: "Современный и адаптивный сайт",
        description: "Используем на сайтах эффективные сервисы: квизы, формы обратной связи, сервисы для глубокой аналитики, калькуляторы стоимости. Пишем чистый и валидный код."
    },
    {
        icon: <CiGrid32 size={100} />,
        title: "Экспертность в дизайне и создании контента",
        description: "Проводим съёмки, создаем иллюстрации, напишем тексты, исходя из современных и актуальных трендов."
    },
    {
        icon: <CiBookmarkCheck size={100} />,
        title: "Помощь и обучение работе с сайтом",
        description: "Поможем с CMS, научим обновлять контент сайта, поможем продлить сертификат SSL, сменить хостинг или домен сайта и многое другое."
    },
    {
        icon: <CiBoxList size={100} />,
        title: "Доступ к статистике и отчетам сайта",
        description: "Предоставляем постоянный доступ к онлайн статистике, регулярно отчитываемся о выполненных работах по сайту."
    },
    { icon:
            <CiDiscount1 size={100} />,
        title: "Скидки",
        description: "Предоставляем скидки на сопутствующие услуги для максимально эффективного онлайн-продвижения компании."
    },
    {
        icon: <CiCalendar size={100} />,
        title: "Дальнейшее развитие после запуска",
        description: "Разработаем дальнейшую стратегию продвижения, подберем самые эффективные инструменты, исходя из нашего опыта и анализа."
    },
];

const orderList = [
    {
        title: "Стабильная работа сайта",
        description: "Проанализируем и исправим все ошибки, устраним любые аварийные ситуации, проведем мониторинг доступности всех страниц и backup сайта."
    },
    {
        title: "Сопровождение",
        description: "Обсудим и возьмем на себя задачи по дальнейшему развитию, как сайта, так и других направлений. Поможем с вопросами оплат и дальнейшей работы с провайдерами услуг хостинга и других сервисов."
    },
    {
        title: "Восстановление утерянных данных",
        description: "Проработаем вопросы с восстановлением паролей от сайта, админ. панели, в случае, если они были похищены или утраченыи."
    }
];

const TechnicalSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Техническая поддержка`}
                description={`Внесем любые необходимые изменения и обеспечим постоянную работоспособность сайта на любой платформе.`}
                background={`WebDeveloping.mp4`}
            />

            <div className={`bg-background`}>

                <OrderedList
                    name={`Что включает в себя тех. поддержка?`}
                    description={`Никто не любит, когда что-то ломается. Но все-таки значительно лучше, когда в любой момент можно обратиться к проверенному и компетентному специалисту.`}
                    orderList={orderList}
                />

                <CasesList
                    text={`Наша тех. поддержка`}
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

export default TechnicalSupport;