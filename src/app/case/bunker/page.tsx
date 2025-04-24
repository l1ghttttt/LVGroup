import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerPhoto from "@/components/for-cases/customer-photo/Customer-photo";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerPhotosStroke from "@/components/for-cases/customer-photos-stroke/Customer-photos-stroke";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'

const caseHref = "/bunker"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const Bunker = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={"Фирменный стиль компьютерного клуба \"Бункер\""}
                    logo={"BunkerLogo.png"}
                    tags={tagsList}
                    descriptions={[
                        "Компьютерный клуб \"Бункер\" – Это новый компьютерный клуб в городе Хабаровске. Современные, мощные ПК и консоли, 300+ популярных игр на ПК, консоли и VR.",
                        "Наша задача – создать фирменный стиль, идущий в ногу со временем и привлекающим в компьютерный клуб аудиторию геймеров."
                    ]}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerPhoto
                        photo={"BunkerPicture1.jpg"}
                        full={true}
                    />
                    <CustomerText
                        title={"Идея"}
                        defaultText={[
                            "Смелый фирменный знак, который имеет потенциал для создания увлекательной истории благодаря фирменному элементу в виде монстрика-геймера.",
                            "В процессе работы над брендом, персонажа можно развивать в стикерах, принтах и так далее. Он может стать лицом компании, а это в свою очередь увеличит узнаваемость со стороны клиентов."
                        ]}
                    />
                    <CustomerPhoto
                        photo={"BunkerPicture2Mobile1.png"}
                    />
                    <CustomerText
                        title={"Логотип"}
                        defaultText={[
                            "Заказчик обратился уже с готовым неймингом «Бункер». Наша задача была придумать соответствующую концепцию.",
                            "Важно было отстроиться от конкурентов, у которых логотип обыгрывает только название компьютерного клуба."
                        ]}
                    />
                    <CustomerPhoto
                        photo={"BunkerPicture3.jpg"}
                    />
                    <CustomerText
                        title={"Носители"}
                        defaultText={[
                            "Основной упор сделали на наружную рекламу, мерч, фирменный паттерн и заставку на рабочий стол каждого компьютера."
                        ]}
                    />
                    <CustomerPhotosStroke
                        photos={[
                            "BunkerPicture4.jpg",
                            "BunkerPicture5.jpg",
                            "BunkerPicture6.jpg",
                            "BunkerPicture7.jpg",
                            "BunkerPicture8.jpg",
                            "BunkerPicture9.jpg",
                            "BunkerPicture10.jpg",
                        ]}
                        photosOnMobile={[
                            "BunkerPicture11.jpg",
                        ]}
                    />
                    <CustomerText
                        title={"Результат"}
                        numberText={[
                            "Создали фирменный стиль и брендбук для компьютерного клуба, проработали фирменные шрифты и все необходимые носители."
                        ]}
                    />
                    <FooterTags
                        tags={tagsList}
                    />
                </div>
            </div>
            <Order/>
        </main>
    );
};

export default Bunker;