import Link from "next/link";
import VideoBackground from "./VideoBackground";

const Welcome = () => {
    return (
        <section className="p-welcomeWrapper pb-welcomeWrapperBottom w-full">
            {/* Видео вынесено в клиентский компонент */}
            <VideoBackground />

            <div className="flex w-full px-welcomePadding gap-[6px] max-xl:gap-[3px] relative max-sm:flex-col">
                <div className="w-2/3 max-2xl:w-1/2 flex flex-col justify-between max-sm:w-full">
                    <h1 className="text-mainZag max-xl:hidden font-semibold leading-[80px] max-lg:leading-[50px] max-xl:max-w-[750px]">
                        Возьмём маркетинг <br /> и продажи <br /> на себя
                    </h1>
                    <h1 className="text-mainZag xl:hidden max-sm:hidden font-semibold leading-[80px] mb-[30px] max-lg:leading-[50px] max-xl:max-w-[750px]">
                        Возьмём маркетинг и продажи на себя
                    </h1>
                    <h1 className="text-[36px] mb-[35px] sm:hidden font-semibold leading-[80px] max-lg:leading-[50px] max-xl:max-w-[750px]">
                        Возьмём маркетинг и продажи на себя
                    </h1>

                    <p className="text-welcomeDescr text-welcomeColorDescr max-md:hidden">
                        Чтобы вы сфокусировались на других важных задачах бизнеса.<br />
                        В нашей команде более 20 профильных специалистов. <br />
                        Наша цель - это результат
                    </p>

                    <p className="text-[16px] mb-[10px] md:hidden text-welcomeColorDescr">
                        Чтобы вы сфокусировались на других важных задачах бизнеса.
                    </p>
                    <p className="text-[16px] mb-[10px] md:hidden text-welcomeColorDescr">
                        В нашей команде более 20 профильных специалистов.
                    </p>
                    <p className="text-[16px] mb-[10px] md:hidden text-welcomeColorDescr">
                        Наша цель - это результат
                    </p>
                </div>

                <nav className="w-1/2 max-2xl:w-1/2 max-sm:w-full p-welcomeLinkPadding pt-welcomeLinkPaddingTop max-sm:pl-0">
                    <ul className="flex flex-col gap-[10px] max-lg:gap-[7px]">
                        <Link
                            href="/usluga/website-creation"
                            className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 max-md:hidden max-sm:inline"
                        >
                            Создание сайтов
                        </Link>
                        <Link
                            href="/usluga/website-creation"
                            className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 md:hidden max-sm:hidden"
                        >
                            Cайты
                        </Link>
                        <Link
                            href="/usluga/context-ads"
                            className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 max-lg:hidden max-sm:inline"
                        >
                            Контекстная реклама
                        </Link>
                        <Link
                            href="/usluga/context-ads"
                            className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 lg:hidden max-sm:hidden"
                        >
                            Реклама
                        </Link>
                        <Link
                            href="/usluga/create-salesment"
                            className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 max-2xl:hidden"
                        >
                            Создание/развитие <br /> отделов продаж
                        </Link>
                        <Link
                            href="/usluga/create-salesment"
                            className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 2xl:hidden max-xl:hidden"
                        >
                            Развитие отделов продаж
                        </Link>
                        <Link
                            href="/usluga/create-salesment"
                            className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 xl:hidden max-md:hidden max-sm:inline"
                        >
                            Развитие продаж
                        </Link>
                        <Link
                            href="/usluga/create-salesment"
                            className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300 md:hidden max-sm:hidden"
                        >
                            Продажи
                        </Link>
                        <Link
                            href="/usluga/"
                            className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300"
                        >
                            Видеосьемка
                        </Link>
                        <Link
                            href="/usluga/SMM"
                            className="text-welcomeLink max-sm:text-[30px] font-medium font-railway hover:text-mainColor duration-300"
                        >
                            SMM
                        </Link>
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Welcome;
