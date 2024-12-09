import React from 'react';
import Link from "next/link";

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
                        <Link href="/"
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
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all flex justify-center items-center 2xl:px-footerSocialPaddingXL max-2xl:p-footerSocialPaddingMaxl`}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                      clipRule="evenodd"/>
                            </svg>

                        </Link>
                    </li>
                    <li className={`flex `}>
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all flex justify-center items-center 2xl:px-footerSocialPaddingXL max-2xl:p-footerSocialPaddingMaxl`}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                                      clipRule="evenodd"/>
                            </svg>

                        </Link>
                    </li>
                    <li className={`flex `}>
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all flex justify-center items-center 2xl:px-footerSocialPaddingXL max-2xl:p-footerSocialPaddingMaxl`}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="none"
                                 viewBox="0 0 24 24">
                                <path fill="currentColor" fillRule="evenodd"
                                      d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                      clipRule="evenodd"/>
                            </svg>

                        </Link>
                    </li>
                    <li className={`flex `}>
                        <Link href="/"
                              className={`duration-300 hover:duration-150 transition-all flex justify-center items-center 2xl:px-footerSocialPaddingXL max-2xl:p-footerSocialPaddingMaxl`}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="currentColor"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
                            </svg>
                        </Link>
                    </li>
                    <li className={`flex `}>
                        <Link href="/"
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
        </footer>
    );
};

export default Footer;