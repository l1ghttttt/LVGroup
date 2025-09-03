import React from 'react';
import Order from "@/components/order/Order";
import ServiceWelcome from "@/components/for-uslugi/service-welcome/Service-welcome";
import OrderedList from "@/components/for-uslugi/ordered-list/Ordered-list";
import OwnFeatures from "@/components/for-uslugi/own-features/Own-features";
import { CiSquareCheck, CiTrophy, CiMonitor, CiMedal } from "react-icons/ci";
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
const uslugaHref: string = "/coop-trainings"

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
        icon: <CiMedal size={100} className={`w-full`} />,
        title: "Обучение под Ваш бизнес",
        description: "Адаптируем материалы под вашу нишу, продукты, целевую аудиторию и стиль коммуникации."
    },
    {
        icon: <CiMonitor size={100} className={`w-full`} />,
        title: "Формат офлайн с выездом",
        description: "Обучение проходит в вашем офисе, в привычной для команды среде, без отрыва от операционной работы."
    },
    {
        icon: <CiTrophy size={100} className={`w-full`} />,
        title: "100% практика",
        description: "Кейсы, ролевые игры, разбор реальных звонков и ситуаций из Вашей практики."
    },
    {
        icon: <CiSquareCheck size={100} className={`w-full`} />,
        title: "Работаем с владельцами и руководителями",
        description: "Умеем говорить на языке бизнеса и помогать команде видеть цели компании, а не просто выполнять инструкции."
    }
];

const orderList = [
    {
        title: "Телефонные продажи и холодные звонки",
        description: [
            "- Эффективные методики прохождения секретаря и выхода на лицо, принимающее решение",
            "- Удержание внимания и управление диалогом",
            "- Скрипты, которые звучат живо, а не как «по бумажке»"
        ]
    },
    {
        title: "Прямые продажи",
        description: [
            "- На мероприятиях и выставках: как не просто собирать визитки, а продать на большую аудиторию",
            "- В магазинах: увеличение конверсии из трафика в покупки",
            "- Очные встречи: эффективное закрытие сделок"
        ]
    },
    {
        title: "Обучение руководителей",
        description: [
            "- Качественный и эффективный подбор персонала",
            "- Тайм-менеджмент",
            "- Эффективное проведение планерок и внедрение отчетности",
            "- SWOT-анализ, постановка задач по SMART, делегирование"
        ]
    },
];

const CreateSalesment = () => {

    return (
        <main className={`w-full flex flex-col items-center`}>

            <ServiceWelcome
                title={`Корпоративные тренинги и \"полевое\" обучение`}
                description={`Практика, а не теория. Каждое обучение разрабатывается конкретно под Ваши задачи и сферу бизнеса. Полученные инструменты можно внедрять сразу после обучения.`}
                background={`CreateSalesment.mp4`}
            />

            <div className={`bg-background flex flex-col items-center`}>

                <OrderedList
                    name={`Основные направления обучения`}
                    description={``}
                    orderList={orderList}
                />

                <CasesListWrapper forcedInitialCategory={"Продажи"} onlyHomePage={false} />

                <OwnFeatures
                    title={`Что вы получаете, работая с нами`}
                    featuresList={featuresList}
                />

                <Order />
            </div>

        </main>
    );
};

export default CreateSalesment;