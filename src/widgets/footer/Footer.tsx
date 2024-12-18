import React from 'react';
import Link from "next/link";
import Script from "next/script";

const Footer = () => {
    return (
        <footer className={``}>
            <nav className={`2xl:h-[160px] 2xl:flex 2xl:items-stretch 2xl:justify-between bg-background px-servicePadding max-2xl:py-servicePadding`}>
                <ul className={`flex items-stretch justify-start flex-wrap 2xl:mx-footerNavMarginXL max-2xl:m-footerNavMarginMaxl`}>
                    <li className={`flex items-center justify-center 2xl:px-footerNavListPadding max-2xl:p-footerNavListPaddingMaxl`}>
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all hover:text-footerLinkColor`}>Проекты</Link>
                    </li>
                    <li className={`flex items-center justify-center 2xl:px-footerNavListPadding max-2xl:p-footerNavListPaddingMaxl`}>
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all hover:text-footerLinkColor`}>Продажи</Link>
                    </li>
                    <li className={`flex items-center justify-center 2xl:px-footerNavListPadding max-2xl:p-footerNavListPaddingMaxl`}>
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all hover:text-footerLinkColor`}>Маркетинг</Link>
                    </li>
                    <li className={`flex items-center justify-center 2xl:px-footerNavListPadding max-2xl:p-footerNavListPaddingMaxl`}>
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all hover:text-footerLinkColor`}>Веб-разработка</Link>
                    </li>
                    <li className={`flex items-center justify-center 2xl:px-footerNavListPadding max-2xl:p-footerNavListPaddingMaxl`}>
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all hover:text-footerLinkColor`}>Создание контента</Link>
                    </li>
                    <li className={`flex items-center justify-center 2xl:px-footerNavListPadding max-2xl:p-footerNavListPaddingMaxl`}>
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all hover:text-footerLinkColor`}>Дизайн</Link>
                    </li>
                    <li className={`flex items-center justify-center 2xl:px-footerNavListPadding max-2xl:p-footerNavListPaddingMaxl`}>
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all hover:text-footerLinkColor`}>Call-центр</Link>
                    </li>
                    <li className={`flex items-center justify-center 2xl:px-footerNavListPadding max-2xl:p-footerNavListPaddingMaxl`}>
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all hover:text-footerLinkColor`}>Контакты</Link>
                    </li>
                </ul>
                <ul className={`flex items-stretch justify-start 2xl:mx-footerNavMarginXL max-2xl:mt-footerSocialMarginTopMaxXL max-2xl:m-footerSocialMarginMaxXL max-sm:justify-between`}>
                    <li className={`flex `}>
                        <Link href="https://www.youtube.com/@Dvigatel"
                              target={`_blank`}
                              className={`duration-300 hover:duration-150 transition-all flex justify-center items-center 2xl:px-footerSocialPaddingXL max-2xl:p-footerSocialPaddingMaxl`}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                                      clipRule="evenodd"/>
                            </svg>
                        </Link>
                    </li>
                    <li className={`flex `}>
                        <Link href="https://t.me/tvoi_dvigatel"
                              target={`_blank`}
                              className={`duration-300 hover:duration-150 transition-all flex justify-center items-center 2xl:px-footerSocialPaddingXL max-2xl:p-footerSocialPaddingMaxl`}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                                 viewBox="0 0 50 50">
                                <path fill="currentColor"
                                    d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                            </svg>
                        </Link>
                    </li>
                    <li className={`flex `}>
                        <Link href="https://wa.me/89242040030"
                              target={`_blank`}
                              className={`duration-300 hover:duration-150 transition-all flex justify-center items-center 2xl:px-footerSocialPaddingXL max-2xl:p-footerSocialPaddingMaxl`}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd"
                                      d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                                      clipRule="evenodd"/>
                                <path fill="currentColor"
                                      d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
                            </svg>

                        </Link>
                    </li>
                </ul>
            </nav>
            <Script src={`https://www.google.com/recaptcha/api.js`} defer={true}/>
        </footer>
    );
};

export default Footer;