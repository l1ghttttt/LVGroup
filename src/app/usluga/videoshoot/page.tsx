import React from 'react';
import Order from "@/components/order/Order";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import {CiInstagram, CiEdit, CiRead, CiBullhorn} from "react-icons/ci";
import CasesListWrapper from "@/components/cases-list/CasesListWrapper";
import type { Metadata } from 'next'

// Импорт сырого JSON и задание типов
import uslugiListRaw from '../../../app/uslugi.json'

interface Usluga {
    title: string
    href: string
    description: string
    "SEO-title"?: string
    "SEO-description"?: string
    "SEO-keywords"?: string
}

interface UslugaGroup {
    trigger: string
    values: Usluga[]
}

const uslugiList = uslugiListRaw as UslugaGroup[]

// Текущий путь услуги для этой страницы
const uslugaHref: string = "/videoshoot"

// Находим услугу по href
const currentUsluga = uslugiList
    .flatMap(group => group.values)
    .find(item => item.href === "/usluga" + uslugaHref)

export const metadata: Metadata = {
    title: currentUsluga?.["SEO-title"] ?? currentUsluga?.title ?? "LV GROUP",
    description: currentUsluga?.["SEO-description"] ?? currentUsluga?.description ?? "",
    // Превратим CSV-строку ключевых слов в массив (Metadata принимает string | string[])
    keywords: currentUsluga?.["SEO-keywords"]
        ? currentUsluga["SEO-keywords"].split(",").map(k => k.trim())
        : undefined,
}
const featuresList = [
    {
        icon: <CiInstagram size={100} className={`w-full`} />,
        title: "Сами ищем исполнителей",
        description: "Операторов, монтажеров, звукорежиссёров, визажистов и прочих профи."
    },
    {
        icon: <CiEdit size={100} className={`w-full`} />,
        title: "Сами составляем ТЗ",
        description: "Понятное, чёткое, по делу — без «сами разберутся»."
    },
    {
        icon: <CiRead size={100} className={`w-full`} />,
        title: "Контролируем съёмку на площадке",
        description: "Следим, чтобы всё соответствовало задаче, а не просто «было снято»."
    },
    {
        icon: <CiBullhorn size={100} className={`w-full`} />,
        title: "Генерируем идеи под вашу ЦА",
        description: "Не требуем от заказчика «скинь сценарий», а предлагаем готовые варианты."
    },
];

const orderList = [
    {
        title: "Reels, shorts, stories-контент",
        description: [
            "- Идеи, которые «залетают» — мы в курсе всех трендов",
            "- Сценарий, съёмка, монтаж — Вам не требуется во всём разбираться",
            "- Контент под TikTok, Instagram, YouTube, VK",
        ]
    },
    {
        title: "Коммерческие и имиджевые видео",
        description: [
            "- Рекламные ролики для ТВ и онлайн",
            "- Кейсы, интервью, закулисье",
            "- Продуманный сюжет, грамотное ТЗ, режиссура",
        ]
    },
    {
        title: "Вирусный и «цепляющий» контент",
        description: [
            "- Не просто «какая у нас классная компания», а ролики с оффером под вашу ЦА",
            "- Снимаем под задачи: привлечь, объяснить, вовлечь, продать",
        ]
    },
];

const TechnicalSupport = () => {
    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Видеосъёмка`}
                description={`Снимаем контент, который продаёт, вовлекает и запоминается. От коротких reels до рекламных роликов для ТВ — всё под ключ: с идеей, съёмкой, монтажом и контролем результата.`}
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

                <CasesListWrapper forcedInitialCategory={"Создание контента"} onlyHomePage={false} />

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