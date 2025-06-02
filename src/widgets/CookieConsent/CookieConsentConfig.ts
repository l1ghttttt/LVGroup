import type { CookieConsentConfig } from 'vanilla-cookieconsent';

const pluginConfig: CookieConsentConfig = {
    guiOptions: {
        consentModal: {
            layout: 'box',
            position: 'bottom right',
            equalWeightButtons: true,
            flipButtons: false,
        },
        preferencesModal: {
            layout: 'box',
            position: 'left',
            equalWeightButtons: true,
            flipButtons: false,
        },
    },

    onFirstConsent: function () {
        console.log('onFirstAction fired');
    },

    categories: {
        necessary: {
            readOnly: true,
            enabled: true,
        },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^(_ga|_gid)/,
                    },
                ],
            },
        },
    },

    language: {
        default: 'en',

        translations: {
            en: {
                consentModal: {
                    title: "",
                    description:
                        'Мы используем куки-файлы (cookies) и совсем этого не стесняемся. Запретить обработку cookies можно в настройках вашего браузера',
                    acceptAllBtn: 'Принять',
                    //acceptNecessaryBtn: 'Отклонить',
                    //closeIconLabel: 'Close',
                    footer: `
          `,
                },
                preferencesModal: {
                    title: 'Cookie preferences',
                    acceptAllBtn: 'Accept all',
                    acceptNecessaryBtn: 'Reject all',
                    savePreferencesBtn: 'Save preferences',
                    closeIconLabel: 'Close',
                    sections: [
                        {
                            title: 'Cookie Usage',
                            description:
                                'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc__link">privacy policy</a>.',
                        },
                        {
                            title: 'Strictly necessary cookies',
                            description: 'Description',
                            linkedCategory: 'necessary',
                        },
                        {
                            title: 'Performance and Analytics cookies',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                headers: {
                                    name: 'Name',
                                    domain: 'Service',
                                    description: 'Description',
                                    expiration: 'Expiration',
                                },
                                body: [
                                    {
                                        name: '_ga',
                                        domain: 'Google Analytics',
                                        description:
                                            'Cookie set by <a href="#">Google Analytics</a>.',
                                        expiration: 'Expires after 12 days',
                                    },
                                    {
                                        name: '_gid',
                                        domain: 'Google Analytics',
                                        description:
                                            'Cookie set by <a href="#">Google Analytics</a>',
                                        expiration: 'Session',
                                    },
                                ],
                            },
                        },
                        {
                            title: 'More information',
                            description:
                                'For any queries in relation to my policy on cookies and your choices, please <a class="cc__link" href="#">contact me</a>.',
                        },
                    ],
                },
            },
        },
    },
};

export default pluginConfig;
