import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerPhoto from "@/components/for-cases/customer-photo/Customer-photo";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";
import CustomerStats from "@/components/for-cases/customer-stats/Customer-stats";
import CustomerReview from "@/components/for-cases/customer-review/Customer-review";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'

const caseHref = "/tooth-fairy"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const ToothFairy = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={"\"Зубная Фея\": от 5000 лидов в отчете и отсутствия клиентов до реальных показателей"}
                    logo={"ToothFairyLogo.jpg"}
                    descriptions={[
                        "Зубная Фея – это семейная стоматология в г. Хабаровске для детей и взрослых, предлагающая клиентам профессиональные услуги лучших стоматологов города. Они проводят безболезненное и безопасное лечение с помощью современного оборудования по наиболее доступным ценам в регионе.",
                        "К нам клиент обратился с задачей – обеспечить стабильный поток клиентов посредством контекстной рекламы с понятными, прозрачными и реальными отчетами по итогам каждого месяца работ."
                    ]}
                    tags={tagsList}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerPhoto
                        photo={"ToothFairyPicture1.jpg"}
                        full={true}
                    />
                    <CustomerText
                        title={"Подробнее о задаче"}
                        defaultText={[
                            "У клиники уже был опыт ведения контекстной рекламы. Предыдущие специалисты предоставляли отчеты с 5000 конверсий/месяц, но по факту новых клиентов не было вообще.",
                            "Настоящую причину мы узнать не сможем никогда, т.к. недобросовестный исполнитель отказался давать доступ в рекламный кабинет клиента, сославшись на секретность собственных наработок. Однако, мы можем предположить, что конверсии были настроены на промежуточные действия клиентов, например, переход между страницами сайта, нажатие кнопки «оставить заявку», а не итоговый экран после заполненной формы и тому подобное. Как следствие, рекламная компания качественно не обучалась, бюджет тратился впустую.",
                            "Более того – на формах обратной связи были обязательными поля – ФИО, почта, телефон, время приема, комментарии и опционально выбор врача. Естественно конверсия по заполнению таких форм была нулевая."
                        ]}
                    />
                    <CustomerText
                        title={"Подготовка к рекламной компании"}
                        defaultText={[
                            "На старте работ мы проанализировали сайт заказчика, привели его в соответствие по требованиям к мед. учреждениям, совместно проработали УТП для целевой аудитории.",
                            "Подключили сервис для глубокого анализа работы контекстной рекламы, а также обратный звонок для увеличения конверсии входящего клиентского потока на сайте.",
                            "Наша цель – стабильный поток качественных конверсий по стоимости лида в районе 1000 рублей."
                        ]}
                    />
                    <CustomerPhoto
                        photo={"ToothFairyPicture.jpg"}
                    />
                    <CustomerText
                        title={"Результаты"}
                        numberText={[
                            "Зубная фея на данный момент получает порядка 50-60 качественных лидов в месяц, естественно такие заявки окупают затраты на контекстную рекламу, а также позволяют подключать дополнительные направления траффика – например, наружную рекламу и SMM.",
                            "Установили дополнительные сервисы для улучшения эффективности контекстной рекламы.",
                            "Помимо контекстной рекламы взяли в работу направление SMM и обязательно об этом расскажем в отдельном кейсе!",
                            "Полностью решили все задачи клиента, которые были поставлены на старте проекта."
                        ]}
                    />
                    <CustomerChain
                        align={"horizontal"}
                        chainList={[
                            "10 038 показов",
                            "480 кликов",
                            "4.78% CTR",
                            "46.379 руб. расход",
                            "96.6 руб. цена клика",
                            "986.7 руб. цена цели",
                            [
                                "1 заявка",
                                "7 колбэков",
                                "39 звонков"
                            ]
                        ]}
                    />
                    <CustomerStats
                        statsList={[
                            {
                                name: "CTR",
                                value: "4.78",
                                description: "%",
                            },
                            {
                                name: "Всего конверсий",
                                value: "47",
                                description: "штук",
                            },
                            {
                                name: "Цена лида",
                                value: "986.8",
                                description: "руб",
                            }]}
                    />
                    <CustomerReview
                        photo={"tooth-fairy-photo.png"}
                        name={"Екатерина Виноградова"}
                        rank={"Управляющая стоматологией"}
                        text={"Борис, хочу поблагодарить вас за совместную работу. Особенно хочу отметить креативность, юмор и находчивость. Всегда было интересно работать с вами над созданием контента. А самое главное, что работа принесла результат - увеличение количества подписчиков с нескольких человек до нескольких сотен активных и вовлеченных поклонников нашего контента. Точно буду рекомендовать вас своим коллегам."}
                    />
                    <FooterTags tags={tagsList} />
                </div>
                <Order/>
            </div>
        </main>
    );
};

export default ToothFairy;