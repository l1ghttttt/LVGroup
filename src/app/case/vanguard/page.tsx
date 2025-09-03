import React from 'react';
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";
import Order from "@/components/order/Order";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'
import PhonesVideo from "@/components/for-cases/phones-video/Phones-video";
const caseHref = "/Vanguard"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const Vanguard = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={"Салон мебели Авангард: продажа дивана с первого Reels"}
                    logo={"VanguardLogo.png"}
                    tags={tagsList}
                    descriptions={[
                        "Авангард — лидер на рынке мягкой мебели среднего и высокого ценового сегмента с 10-летним опытом. Сегодня компания — это 5 точек продаж в Хабаровске и Владивостоке, а также эксклюзивный дистрибьютор крупнейших мебельных фабрик России O'PRIME и FRENDOM.",
                        "В условиях недоступности таргетированной рекламы в Instagram в России перед клиентом стояла задача — наладить регулярную подачу контента, который будет привлекать новую аудиторию и повышать доверие к бренду."
                    ]}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <PhonesVideo videoList={[
                        "VanguardVideoLeft",
                        "VanguardVideoCenter",
                        "VanguardVideoRight",]}
                    />
                    <CustomerChain
                        align={`vertical`}
                        name={`Решение`}
                        chainList={[
                            "Разработали контент-стратегию. Сделали упор на живые Reels с подробным рассказом про каждый диван и лёгким юмором, чтобы удерживать внимание зрителей и повышать вовлечённость.",
                            "Организовали регулярные съёмки. Выстроили системный график, обеспечив постоянный поток нового контента.",
                            "Максимизировали охваты без бюджета на рекламу. Публикуем ролики не только в Instagram, но и в YouTube Shorts и TikTok, чтобы привлекать аудиторию с разных площадок.",
                            "Использовали контент как инструмент продаж. Готовые видео менеджеры отправляют клиентам, которые раздумывают о покупке, а также размещают их в статусах рабочего WhatsApp для своих контактов.",
                        ]}
                    />
                    <CustomerText
                        title={"Результаты"}
                        numberText={[
                            "Уже после первого выложенного Reels был продан один из представленных диванов.",
                            "Запущено регулярное производство контента — съёмка и публикация стали постоянной частью маркетинга компании.",
                            "Получены дополнительные просмотры и подписчики из YouTube и TikTok.",
                            "Видео доказало свою эффективность в «дожиме» клиентов — наглядная демонстрация преимуществ товара помогает быстрее принять решение о покупке."
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

export default Vanguard;