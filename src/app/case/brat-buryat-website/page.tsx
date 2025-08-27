import React from 'react';
import Order from "@/components/order/Order";
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'
import CustomerVideo from "@/components/for-cases/customer-video/Customer-video";
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";

const caseHref = "/brat-buryat-website"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];

const descriptiopnsList = ["Кафе \"Брат Бурят\" – это кафе бурятской кухни в современном исполнении. Здесь можно встретить как традиционные бурятские блюда, так и давно полюбившуюся классику, вроде салата цезарь или греческого.", "Клиенту был нужен новый сайт, который бы выгодно презентовал меню, отражал национальную самобытность кухни и создавал позитивное впечатление о бренде. Сайт также должен был быстро загружаться, быть удобным для мобильных устройств и визуально соответствовать духу заведения."]

const technologiesList = [
    {
        logo: "Wordpress.png",
        name: "Wordpress",
    },
    {
        logo: "WooCommerce.png",
        name: "WooCommerce",
    }
]

const BratBuryatWebsite = () => {
    return (
        <main className="w-full">
            <div className="flex flex-col">
                <CustomerInfo
                    title={`Кафе \"Брат Бурят\". Сделали сайт так, чтобы захотелось поесть – удобная корзина и онлайн-оплата заказа`}
                    logo={`BratBuryatLogo.jpg`}
                    tags={tagsList}
                    descriptions={descriptiopnsList}
                    technologies={technologiesList}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>
                    <CustomerVideo video={"BratBuryatWebsiteVideo"} />
                    <CustomerChain
                        align={`vertical`}
                        name={`Решение`}
                        chainList={[
                            "Разработали лёгкий и визуально привлекательный дизайн с акцентом на фотографии блюд.",
                            "Использовали теплую цветовую палитра, создающую ассоциации с уютом и гостеприимством, исходя из брендбука компании.",
                            "Реализовали удобную навигацию: меню, акции, информацию о кафе, адрес, контакты и условия доставки легко найти с любой страницы сайта.",
                            "Сделали сайт полностью адаптивным для любых мобильных устройств.",
                        ]}
                    />
                    <CustomerText
                        title={`Результаты`}
                        numberText={[
                            "Получился удобный и визуально привлекательный сайт.",
                            "Средняя скорость загрузки страниц составила 1,7 секунды.",
                            "Корзина товаров максимально удобная и позволяет быстро оформить любой заказ.",
                            "Подключили оплату заказов прямо на сайте.",
                            "Реализован блог для новостей заведения.",
                            "Сотрудникам заведения все заказы с сайта приходят в телеграмм-канале, чтобы заказы обрабатывались максимально быстро.",
                            "Все условия доставки и часто задаваемые вопросы вынесены в отдельный раздел сайта.",
                            "Юридическая составляющая также учтена - оформили политику конфиденциальности и согласие на обработку персональных данных посетителей.",
                        ]}
                    />
                    <FooterTags tags={tagsList} />
                </div>
                <Order/>
            </div>
        </main>
    )
}

export default BratBuryatWebsite