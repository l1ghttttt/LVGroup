import React from 'react';
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerPhoto from "@/components/for-cases/customer-photo/Customer-photo";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";
import CustomerStats from "@/components/for-cases/customer-stats/Customer-stats";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import Order from "@/components/order/Order";
import casesList from '../../../app/cases.json'

const caseHref = "/brat-buryat-context-ad"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const BratBuryatContextsAd = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={`291 заказ за один месяц с сайта кафе \"Брат Бурят\"`}
                    logo={`BratBuryatLogo.jpg`}
                    tags={tagsList}
                    descriptions={[
                        "Кафе \"Брат Бурят\" – это кафе бурятской кухни в современном исполнении. Здесь можно встретить как традиционные бурятские блюда, так и давно полюбившуюся классику, вроде салата цезарь или греческого.",
                        "С клиентом мы уже работали по СММ направлению. Кафе набирало обороты и появилась возможность создать сайт, чтобы на нем запустить контекстную рекламу. Ключевая наша задача была быстро выйти на окупаемость контекстной рекламы и сформировать постоянный поток заказов с сайта клиента."
                    ]}
                />
                <div
                    className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerPhoto
                        full={true}
                        photo={`BratBuryatContextAdPicture.jpg`}
                        photoAlt={`Фото контекстной рекламы`}
                    />
                    <CustomerText
                        title={`Подготовка к рекламной компании`}
                        defaultText={[
                            "Сайт клиенту мы делали самостоятельно, поэтому сделать его максимально удобным и конверсионным не составило труда. Сделали удобную корзину, отдельно выделили «хиты продаж», продумали офферы в карточке каждого блюда и многое другое – об этом детально расскажем в кейсе по созданию сайта.",
                            "Подключили сервис обратного звонка и онлайн оплату через «Робокассу» на сайте для увеличения конверсии входящего клиентского потока.",
                            "Наша цель – стабильный поток  порядка 150 заказов с сайта по стоимости лида в районе 400-600 рублей."
                        ]}
                    />
                    <CustomerPhoto
                        full={true}
                        photo={`BratBuryatContextAdPicture2.jpg`}
                        higher={true}
                        photoAlt={`Фото контекстной рекламы номер 2`}
                    />

                    <CustomerText
                        title={`Результаты`}
                        numberText={[
                            "Поскольку с клиентом мы работаем много лет, то планку в 150 заказов мы давно прошли. На март 2025 года суммарно заказов с сайта – 291.",
                            "Хотелось бы отметить, что такая хорошая конверсия и цена заявки обеспечивается не только качественно настроенной контекстной рекламой и самим сайтом, но и совместной работой над маркетингом компании – наружная реклама, участие в значимых событиях города, качество продаваемой продукции и оказываемый сервис персоналом кафе.",
                        ]}
                    />
                    <CustomerChain
                        align={`horizontal`}
                        chainList={[
                            "87898 показов",
                            "1 413 кликов",
                            "8.23% CTR",
                            "21.23 руб. цена клика",
                            "454.55 руб. цена цели",
                            "179 подтв. заказов",
                            ["74 колбэков", "38 прямых звонков", "66 заявок с контекста"]
                        ]}
                    />
                    <CustomerStats statsList={[
                        {
                            name: "Общий бюджет",
                            value: "30",
                            description: "тыс.",
                        },
                        {
                            name: "Всего конверсий",
                            value: "291",
                            description: "",
                        },
                        {
                            name: "Цена цели",
                            value: "454.5",
                            description: "руб.",
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

export default BratBuryatContextsAd;