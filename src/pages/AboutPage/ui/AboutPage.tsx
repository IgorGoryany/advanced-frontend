import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <main>
            {t('О сайте')}
        </main>
    );
};

export default AboutPage;
