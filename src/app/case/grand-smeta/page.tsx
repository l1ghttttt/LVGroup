import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerPhoto from "@/components/for-cases/customer-photo/Customer-photo";
import CustomerStats from "@/components/for-cases/customer-stats/Customer-stats";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";

const caseHref = "/grand-smeta"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const LDPR = () => {
    return (
        <main className="w-full">
            <div className="flex flex-col">
                <CustomerInfo
                    title={"Гранд-Смета: 77 участников на семинаре с обзвона"}
                    logo={"granddSmetaLogo.jpg"}
                    tags={tagsList}
                    descriptions={[
                        "ГРАНД-Смета — Российская компания, специализирующаяся на разработке профессионального программного обеспечения для сметного расчёта. Их решения используют инженеры, проектировщики, строительные компании и государственные подрядчики по всей стране.",
                        "Для подготовки к офлайн-семинару в г. Благовещенск необходимо было:",
                        "-обзвонить организации в строительной сфере;",
                        "-выйти на ЛПР (лиц, принимающих решения);",
                        "-обеспечить максимальную явку заинтересованных клиентов на мероприятие."
                    ]}
                    technologies={[
                        {
                            logo: "GoogleDocs.png",
                            name: "GoogleDocs",
                        }
                    ]}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerChain
                        align={`vertical`}
                        name={`Решение`}
                        chainList={[
                            "Разработали скрипт — составили и согласовали сценарий общения, адаптированный под специфику отрасли",
                            "Подготовили операторов — провели брифинг, тренировки на примерах, внесли корректировки по результатам первых звонков.",
                            "Организовали прозвон по всей базе — без потери качества и перегрузки клиента.",
                            "Ввели прозрачную отчётность — клиент в реальном времени видел статусы каждого контакта в Google-таблице.",
                            "Работа на результат — фокус на интересах клиента, вежливое и уверенное ведение диалога каждым сотрудником."
                        ]}
                    />
                    <CustomerPhoto
                        photo={"GrandSmetaPicture.jpg"}
                        full={false}
                    />
                    <CustomerText
                        title={"Результаты"}
                        numberText={[
                            "Обзвонили 500 компаний в строительной сфере г. Благовещенска.",
                            "Вышли на целевых ЛПРов и заинтересовали их в посещении семинара.",
                            "Обеспечили 77 реальных участников на семинаре.",
                            "Сэкономили время клиента и полностью взяли коммуникацию на себя."
                        ]}
                    />
                    <CustomerText title={"Общий вывод"} defaultText={["Кейс ГРАНД-Сметы — ещё одно подтверждение, что живые звонки работают лучше любой рассылки. Мы не просто звоним, мы приводим людей."]} />
                    <CustomerStats
                        statsList={[
                            {
                                name: "Продолжительность",
                                value: "5",
                                description: "дней",
                            },
                            {
                                name: "Обзвонили компаний",
                                value: "500",
                            },
                            {
                                name: "Обеспечили",
                                value: "77",
                                description: "участников",
                            }
                        ]}
                    />
                    <FooterTags
                        tags={tagsList}
                    />
                </div>
                <Order/>
            </div>
        </main>
    );
};

export default LDPR;