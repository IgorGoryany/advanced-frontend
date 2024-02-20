import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { PageLayout } from 'widgets/PageLayout';

const AboutPage = () => {
    const { t } = useTranslation('about');
    const ref = useRef<HTMLDivElement | null>(null);
    return (
        <PageLayout>
            {t('О сайте')}
        </PageLayout>
    );
};

export default AboutPage;
