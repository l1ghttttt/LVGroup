import React from 'react';
import CustomerInfo from "@/components/for-cases/customer-info/Customer-info";
import CustomerText from "@/components/for-cases/customer-text/Customer-text";
import CustomerChain from "@/components/for-cases/customer-chain/Customer-chain";
import Order from "@/components/order/Order";
import FooterTags from "@/components/for-cases/footer-tags/Footer-tags";
import casesList from '../../../app/cases.json'
import HorizontalScrollSlider from "@/components/for-cases/customer-images-slider/Customer-Images-Slider";
import CustomerImageSwiper from "@/components/for-cases/customer-image-swiper/Customer-Image-Swiper";
const caseHref = "/MurMuracia"; // должен совпадать с href в data
const currentCase = casesList.find(c => c.href === caseHref);
const tagsList = currentCase?.tags || [];
const images = [
    'Mur-1.jpg',
    'Mur-2.jpg',
    'Mur-3.jpg',
    'Mur-4.jpg',
    'Mur-5.jpg',
    'Mur-6.jpg',
    'Mur-7.jpg',
    'Mur-8.jpg',
    'Mur-9.jpg',
    'Mur-10.jpg',
    'Mur-11.jpg',
    'Mur-12.jpg',
    'Mur-13.jpg',
    'Mur-14.jpg',
    'Mur-15.jpg',
    'Mur-16.jpg',
]; // должны быть в public/изображения
const ChixxInk = () => {
    return (
        <main className={`w-full overflow-x-hidden`}>
            <div className={`flex flex-col`}>
                <CustomerInfo
                    title={"411 куличей за неделю: съёмка, которая продала"}
                    logo={"MurMuraciaLogo.png"}
                    tags={tagsList}
                    descriptions={[
                        "МурМурация — кафе-пекарня с авторской подачей и акцентом на домашние завтраки и свежую выпечку. Бренд выстраивает эмоциональную связь с гостями через визуал, атмосферу и заботу.",
                        "К нам клиент обратился с задачей создать праздничный фотоконтент к Пасхе. Цель съёмки — презентовать сезонное предложение (куличи), усилить визуальный образ бренда как уютного, семейного и тёплого, а также повысить охваты и продажи через социальные сети."
                    ]}
                />
                <div className={`my-0 mx-CustomerSpacingMargin customer-spacing relative max-sm:mx-[20px] flex flex-col items-center mt-[40px]`}>

                    <div className={`max-sm:hidden flex`}>
                    <HorizontalScrollSlider images={images} />
                    </div>

                    <CustomerImageSwiper images={images} className={`sm:hidden`} />


                    <CustomerChain
                        align={`vertical`}
                        name={`Решение`}
                        chainList={[
                            "Подобрали и забронировали подходящую студию со светлой атмосферой.",
                            "Подобрали референсы: по композициям, декору и стилистике фото.",
                            "Привлекли фотографа, специализирующегося на фуд-съёмке и \"предметке\".",
                            "Организовали съёмку: оформили композицию, подобрали реквизит, провели съёмку как фото, так и рилс-видео.",
                            "Закупили размещение рекламы в проверенных пабликах города."
                        ]}
                    />
                    <CustomerText
                        title={"Результаты"}
                        numberText={[
                            "Было продано 411 куличей за неделю приема предзазаков к будущему празднику",
                            "Повысилась узнаваемость бренда в городе",
                            "Увеличились охваты и вовлечённость аудитории в соцсетях",
                            "Полученный контент был использован не только в Instagram, но и на баннерах и в рассылках."
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

export default ChixxInk;