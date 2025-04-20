import React from 'react';
import Order from "@/components/order/Order";
import CasesList from "@/components/cases-list/Cases-list";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import {CiInstagram, CiEdit, CiRead, CiBullhorn} from "react-icons/ci";

const featuresList = [
    {
        icon: <CiInstagram size={100} className={`w-full`} />,
        title: "Сами подбираем фотографа под задачу",
        description: "У нас нет «одного на всё». Под каждый проект — свой профи."
    },
    {
        icon: <CiEdit size={100} className={`w-full`} />,
        title: "Составляем чёткое ТЗ и референсы",
        description: "Чтобы Вы сразу понимали, что будет на выходе и потратили минимум ресурсов на съёмку."
    },
    {
        icon: <CiRead size={100} className={`w-full`} />,
        title: "Организуем и проконтролируем процесс «под ключ»",
        description: "Поможем с локацией, реквизитом, таймингом, светом — всё берём на себя."
    },
    {
        icon: <CiBullhorn size={100} className={`w-full`} />,
        title: "Умеем снимать нестандартное",
        description: "Хотите фуд-съёмку на природе, с животными или детьми? Мы сделаем."
    },
];

const orderList = [
    {
        title: "Контент для соцсетей",
        description: "Эмоции, атмосфера, живые кадры — то, что хочется лайкать, репостить и сохранять."
    },
    {
        title: "Фуд-съёмка для кафе и ресторанов",
        description: "Меню заведения, меню доставки, баннеры, реклама — аппетитные, стильные и «вкусные» кадры."
    },
    {
        title: "Съёмки для сайта",
        description: "Фото товаров, услуг и процессов — поможем визуализировать, объяснить и продать."
    },
    {
        title: "Мероприятия и события",
        description: "Актуальный визуал — кадры, которые реально можно использовать."
    },
    {
        title: "Интерьеры и атмосфера",
        description: "Передадим ощущение бренда через пространство: кафе, офис, студия, салон, ресепшн."
    },
    {
        title: "Фотосессии сотрудников",
        description: "Команда — лицо бизнеса. Организуем съёмку, чтобы показать людей живыми, а не как фото на паспорт."
    }
];

const TechnicalSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Фотосессии`}
                description={`Организуем фотосъёмку любой сложности — от Instagram-контента до меню, от сотрудников до атмосферы вашего пространства. Подберём специалистов, выстроим процессы, проконтролируем результат.`}
                background={`ContentBackground.mp4`}
                whiteBg={true}
                filters={true}
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