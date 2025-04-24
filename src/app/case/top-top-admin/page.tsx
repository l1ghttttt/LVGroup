import React from 'react';
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import Order from "@/components/order/Order";
import CustomerGallery from "@/components/for-cases/customer-gallery/Customer-gallery";
import casesList from '../../../app/cases.json'

const caseHref = "/top-top-admin"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const TopTopAdmin = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={"Разработка коммерческого предложения для \"Топ-Топ Админ\""}
                    logo={"TopTopAdminLogo.png"}
                    tags={tagsList}
                    descriptions={[
                        "Топ-Топ Админ уже более 16 лет занимается технической поддержкой различных сфер бизнеса - от простых работ по системному администрированию до сборки и настройки серверов и систем безопасности.",
                        "К нам клиент обратился со следующей задачей:",
                        "1. Сформировать ключевые преимущества.",
                        "2. Отстроиться от конкурентов и донести преимущества работы с аутсорсинговой компанией в отличии от системного администратора в штате.",
                        "3. Красиво оформить коммерческое предложение в удобном формате для просмотра с телефона или компьютера.",
                        "4. Взять за основу фирменный стиль компании и придерживаться существующей концепции."
                    ]}
                    whiteBackground={true}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerGallery photos={[
                        "TopTopAdminPicture1.jpg",
                        "TopTopAdminPicture2.jpg",
                        "TopTopAdminPicture3.jpg",
                        "TopTopAdminPicture4.jpg",
                        "TopTopAdminPicture5.jpg",
                        "TopTopAdminPicture6.jpg",
                        "TopTopAdminPicture7.jpg",
                        "TopTopAdminPicture8.jpg",
                        "TopTopAdminPicture9.jpg",
                        "TopTopAdminPicture10.jpg"
                    ]} />
                    <CustomerText title={"Результаты"} numberText={["Создали коммерческое предложение, отвечающее всем требованиям заказчика. Вертикальный формат идеально подошел для рассылки в WhatsApp и на почту потенциальным клиентам."]}/>
                    <FooterTags
                        tags={tagsList}
                    />
                </div>
                <Order/>
            </div>
        </main>
    );
};

export default TopTopAdmin;