import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerPhoto from "@/components/for-cases/customer-photo/Customer-photo";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerStats from "@/components/for-cases/customer-stats/Customer-stats";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";
import casesList from '../../../app/cases.json'
import CustomerReview from "@/components/for-cases/customer-review/Customer-review";

const caseHref = "/dr-mobile"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const DrMobile = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={`Контекстная реклама для "Dr. Mobile" 100 лидов в месяц`}
                    logo={`DrMobileLogo.png`}
                    tags={tagsList}
                    descriptions={[
                        "Dr. Mobile – это сеть сервисных центров по ремонту и выкупу любой электроники, по большей части оргтехники, мобильных телефонов и компьютеров. Сеть работает с 2010 года и радуетсвоих клиентов доступными ценами и профессиональным подходом к ремонту любой сложности.",
                        "К нам клиент обратился с задачей – обеспечить стабильный поток клиентов в свои сервисные центры посредством контекстной рекламы."
                    ]}
                />
                <div
                    className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerPhoto
                        full={true}
                        photo={`DrMobilePicture1.jpg`}
                    />
                    <CustomerText
                        title={`Подробнее о задаче`}
                        defaultText={[
                            "У Dr. Mobile уже был опыт ведения контекстной рекламы. Предыдущие специалисты предоставляли отчеты с большим количеством конверсий, но по факту отсутствовал поток новых клиентов.",
                            "Причина была достаточно распространенная – конверсии были настроены на промежуточные действия клиентов, например, переход между страницами сайта, нажатие кнопки «оставить заявку», а не итоговый экран после заполненной формы и тому подобное. Как следствие, рекламная компания качественно не обучалась, бюджет тратился впустую.",
                        ]}
                    />
                    <CustomerText
                        title={`Подготовка к рекламной компании`}
                        defaultText={[
                            "На старте работ мы проанализировали сайт заказчика, переработали весь контент – оформили картинки и разделы с описанием каждой услуги и УТП компании для повышения конверсии.",
                            "Подключили сервис для глубокого анализа работы контекстной рекламы, а также обратный звонок для увеличения конверсии входящего клиентского потока на сайте.",
                            "Наша цель – стабильный поток качественных конверсий по стоимости лида в районе 500 рублей"
                        ]}
                    />
                    <CustomerPhoto
                        full={true}
                        photo={`DrMobilePicture.jpg`}
                    />
                    <CustomerText
                        title={`Результаты`}
                        numberText={[
                            "Dr. Mobile не планирует останавливаться на текущих результатах – далее в планах развивать направление выкупа техники с нашей всесторонней помощью.",
                            "После проведенных работ по качественной настройке, анализу контекстной рекламы и доработке сайта клиент стабильно получает 100 заявок в месяц.",
                        ]}
                    />
                    <CustomerChain
                        align={`horizontal`}
                        chainList={[
                            "69 048 показов",
                            "1 277 кликов",
                            "1.85% CTR",
                            "60.515 руб. расход",
                            "47.4 руб. цена клика",
                            "488.1 руб. цена цели",
                            ["18 заявок", "35 колбэков", "71 звонок"]
                        ]}
                    />
                    <CustomerStats statsList={[
                            {
                                name: "CTR",
                                value: "1.85",
                                description: "%",
                            },
                            {
                                name: "Всего конверсий",
                                value: "124",
                                description: "",
                            },
                            {
                                name: "Цена лида",
                                value: "488.1",
                                description: "руб",
                            }
                            ]}
                    />
                    <CustomerReview
                        photo={`DrMobilePhoto.jpg`}
                        name={`Евгений Кревский`}
                        text={`Огромное спасибо команде LV GROUP за невероятную поддержку и крутой результат! С самого начала чувствовалась вовлеченность и желание реально помочь, а не просто «отработать проект». Всё сделали быстро, чётко и с душой. Клиентов стало больше, а работа сервиса Dr. Mobile теперь выглядит гораздо ярче и привлекательнее. Очень рады, что обратились именно к вам!`}
                        rank={`Собственник`}
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

export default DrMobile;