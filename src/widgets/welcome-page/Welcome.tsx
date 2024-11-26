import React from 'react';

const Welcome = () => {
    return (
        <div className={`p-welcomeWrapper pb-welcomeWrapperBottom w-full `}>
            <div className={`flex w-full px-welcomePadding gap-[6px] max-xl:gap-[3px]`}>
                <div className={`w-2/3 flex flex-col justify-between`}>
                    <h1 className={`text-mainZag font-semibold`}>Возьмём маркетинг <br/> и продажи <br/> на себя</h1>
                    <p className={`text-welcomeDescr text-[#b3b3b3]`}>Чтобы вы сфокусировались на других важных задачах
                        бизнеса.<br/>В нашей команде более 20 профильных специалистов. <br/> Наша цель - это результат
                    </p>
                </div>
                <nav className={`w-2/5 max-sm:w-full p-welcomeLinkPadding pt-welcomeLinkPaddingTop`}>
                    <ul className={`flex flex-col gap-[10px]`}>
                        <a href="/" className={`text-welcomeLink font-railway`}>Продажи</a>
                        <a href="/" className={`text-welcomeLink font-railway`}>Маркетинг</a>
                        <a href="/" className={`text-welcomeLink font-railway`}>Веб-разработка</a>
                        <a href="/" className={`text-welcomeLink font-railway`}>Создание контента</a>
                        <a href="/" className={`text-welcomeLink font-railway`}>Дизайн</a>
                        <a href="/" className={`text-welcomeLink font-railway`}>Call-центр</a>
                    </ul>
                </nav>
            </div>

        </div>
    );
};

export default Welcome;