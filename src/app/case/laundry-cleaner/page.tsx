import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerPhoto from "@/components/for-cases/customer-photo/Customer-photo";
import CustomerStats from "@/components/for-cases/customer-stats/Customer-stats";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";

const caseHref = "/laundry-cleaner"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const LaundryCleaner = () => {
    return (
        <main className="w-full">
            <div className="flex flex-col">
                <CustomerInfo
                    title={"Прачечная \"Чистюля\": 400 звонков, десятки новых клиентов и первый договор на 100 000 уже в день старта"}
                    logo={"LaundryCleanerLogo.png"}
                    tags={tagsList}
                    descriptions={[
                        "Прачечная Чистюля (г. Владивосток) работает с 2009 года, клиентами компании являются не только крупные гостиницы, но и хостелы, посуточные квартиры, которые заботятся о качестве белья своих посетителей.",
                        "К нам клиент обратился со следующей задачей:",
                        "Загрузить прачечную новыми объемами. Нашей целью стало через удаленный колл-центр провести масштабный обзвон гостиниц в Владивостоке и передавать клиенту только заинтересованных потенциальных заказчиков."
                    ]}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerChain
                        align={`vertical`}
                        name={`Решение`}
                        chainList={[
                            "Разработали грамотный скрипт продаж, сфокусированный на быстром выявлении лиц, принимающих решение.",
                            "Провели обзвон более 400 гостиниц Владивостока.",
                            "Выявили и зафиксировали информацию у лиц, принимающих решение о текущих условиях работы с конкурентами заказчика, и предложили тестовую стирку.",
                            "Передавали клиенту только заинтересованных заказчиков.",
                            "Организовали дополнительную обработку: отправка коммерческих предложений на Email и WhatsApp.",
                        ]}
                    />
                    <CustomerPhoto
                        photo={"LaundryCleanerPicture.jpg"}
                        full={false}
                    />
                    <CustomerText
                        title={"Результаты"}
                        numberText={[
                            "Уже с первого дня обзвона клиент заключил договор на 100 000 рублей, сразу окупив стоимость услуг колл-центра.",
                            "Получено десятки заинтересованных контактов для дальнейшей работы.",
                            "Высокий уровень конверсии: интерес к сотрудничеству проявили более 13% обзвоненных заведений.",
                            "Выявили новые направления работы с базами отдыха и продажей специализированной химии для стирки."
                        ]}
                    />
                    <CustomerStats
                        statsList={[
                            {
                                name: "Продолжительность",
                                value: "5",
                                description: "дней",
                            },
                            {
                                name: "Обработано клиентов",
                                value: "400",
                                description: "",
                            },
                            {
                                name: "Передано",
                                value: "52",
                                description: "лида",
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

export default LaundryCleaner;