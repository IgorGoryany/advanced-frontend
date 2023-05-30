import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <main>
            {t('О сайте')}
        </main>
    );
};

export default AboutPage;
