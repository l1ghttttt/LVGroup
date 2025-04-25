import React from 'react';
import Order from "@/components/order/Order";
import CasesList from "@/components/cases-list/Cases-list";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import {CiGps, CiMicrophoneOn, CiEdit, CiCircleCheck} from "react-icons/ci";

const featuresList = [
    {
        icon: <CiGps size={100} className={`w-full`} />,
        title: "Опытные операторы",
        description: "Звонки делают не стажёры, а люди с опытом живых продаж. Разговор ведётся осознанно, с гибкостью и пониманием задач."
    },
    {
        icon: <CiMicrophoneOn size={100} className={`w-full`} />,
        title: "Живое общение, а не \"робозвонки\"",
        description: "Мы не читаем скрипты с листа. Мы адаптируемся под собеседника, слышим его и реагируем."
    },
    {
        icon: <CiEdit size={100} className={`w-full`} />,
        title: "Правильные скрипты",
        description: "Пишем сценарии общения под ваш бизнес и ЦА. Согласуем с Вами, даём рекомендации, как усилить эффективность."
    },
    {
        icon: <CiCircleCheck size={100} className={`w-full`} />,
        title: "Фокус на результате, а не на объёмах",
        description: "Цель — не «отзвонить тысячу», а вытащить максимум пользы из каждой базы."
    }
];

const orderList = [
    {
        title: "Опросы и исследования",
        description: [
            "- Изучаем удовлетворенность, причины выбора или отказа",
            "- Получаем реальные отзывы о продукте, сервисе, заведении",
            "- Готовим отчёты и рекомендации",
        ]
    },
    {
        title: "Первичный холодный обзвон",
        description: [
            "- Презентация продукта или услуги по согласованному скрипту",
            "- Кейсы, интервью, закулисье",
            "- Цель это выявление интереса и ЛПРов, передача контактов для дальнейшей работы",
        ]
    },
    {
        title: "Обзвон по действующей базе",
        description: [
            "- Возврат клиентов",
            "- Информирование об акциях и спецпредложениях",
            "- Реактивация «спящих» контактов",
        ]
    },
    {
        title: "Передача заинтересованных контактов",
        description: [
            "- Не просто «отчёт по звонкам», а передача контактов реальных ЛПРов и заинтересованных клиентов",
            "- Вы получаете «теплые» лиды, готовые к диалогу с Вашим менеджером",
        ]
    },
];

const TechnicalSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Удалённый call-центр`}
                description={`Живые звонки, которые действительно работают. Проводим прозвоны базы клиентов за Вас — профессионально, внятно, заинтересованно. Помогаем выявить лояльность, презентовать акцию, вернуть клиента или передать заинтересованного ЛПРа Вашему менеджеру. Всё чётко, с выверенными скриптами и живыми голосами — никакого «роботизированного сервиса».`}
                background={`CreatingCallCenter.mp4`}

            />

            <div className={`bg-background`}>

                <OrderedList
                    name={`Что мы делаем`}
                    description={``}
                    orderList={orderList}
                />

                <CasesList />

                <OwnFeatures
                    title={`Почему это работает`}
                    featuresList={featuresList}
                />

                <Order />

            </div>

        </main>
    );
};

export default TechnicalSupport;