'use client'

import React, { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import pluginConfig from './CookieConsentConfig';

const CookieConsentComponent = () => {
    useEffect(() => {
        CookieConsent.run(pluginConfig);
    }, []);

    return (
        <></>
    );
};

export default CookieConsentComponent;
