import React from 'react';
import Order from "@/components/order/Order";
import BeforeAfter from "@/components/for-cases/before-after/Before-after";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerReview from "@/components/for-cases/customer-review/Customer-review";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";

const caseHref = "/frp"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const firstImage = {
    imageUrl: '/frpSiteAfter.png',
    alt: 'Сайт после',
};

const secondImage = {
    imageUrl: '/frpSiteBefore.png',
    alt: 'Сайт до',
};

const technologiesList = [
    {
        logo: "Wordpress.png",
        name: "Wordpress",
    },
]

const Lamark = () => {
    return (
        <main className="w-full">
            <div className="flex flex-col">
                <CustomerInfo
                    title={`Обновление и редизайн сайта ФРП Хабаровского края`}
                    logo={`frpLogo.png`}
                    tags={tagsList}
                    descriptions={[
                        "Фонд развития промышленности Хабаровского края — государственная организация, предоставляющая льготные займы промышленным предприятиям региона.",
                        "Задача: оперативно внести большой объём правок и провести частичный редизайн сайта frp27.ru, чтобы он выглядел современно, соответствовал требованиям законодательства и был удобен в использовании, при этом необходимо уложиться в ограниченный бюджет."
                    ]}
                    whiteBackground={true}
                    technologies={technologiesList}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <BeforeAfter firstImage={firstImage} secondImage={secondImage} delimiterColor={`black`}/>
                    <CustomerChain
                        align={"vertical"}
                        name={"План работы"}
                        chainList={[
                            "Привели в порядок устаревший сайт с «костылями» от прошлых разработчиков - оптимизировали структуру, убрали лишние вкладки и меню, упростили навигацию.",
                            "Актуализировали контент и блоки — обновили тексты, условия программ и процентные ставки; добавили новые проекты и программы фонда.",
                            "Редизайн ключевых элементов — создали современный слайдер с читабельными заголовками; обновили расположение блоков на главной странице, вынесли новости в верхнюю часть.",
                            "Улучшили функциональность — добавили удобные виджеты справа, разгрузили главную страницу; сделали фильтры проектов по годам.",
                            "Мобильная адаптация — переработали мобильную версию, исправив проблемы с отображением — теперь сайт одинаково удобен на компьютере и смартфоне.",
                            "Соответствие законодательству — оформили сайт по требованиям 152-ФЗ о персональных данных: разместили политику конфиденциальности, согласие на обработку данных, уведомление о cookie.",
                            "Технические доработки — сделали телефоны кликабельными, обновили подвал сайта, настроили корректную работу счётчиков."
                        ]}
                    />
                    <CustomerText
                        title={`Результаты`}
                        numberText={[
                            "Сайт стал современнее, удобнее и понятнее для пользователей.",
                            "Исправлены ошибки, мешавшие заказчику самостоятельно наполнять сайт.",
                            "Обеспечено соответствие требованиям Роскомнадзора.",
                            "Улучшено отображение на мобильных устройствах.",
                            "Оптимизирована структура, что упростило навигацию и поиск информации."
                        ]}
                    />
                    <CustomerReview
                        photo={`frpPhoto.jpg`}
                        name={`Костинский Станислав`}
                        text={`Отличная компания! Быстро и качественно привели наш сайт в порядок: исправили ошибки, улучшили дизайн и навигацию. Работали четко по договоренностям. Цена полностью соответствует качеству. Спасибо! Рекомендуем.`}
                        rank={`Директор`}
                    />
                    <FooterTags tags={tagsList} />
                </div>
                <Order/>
            </div>
        </main>
    )
}

export default Lamark