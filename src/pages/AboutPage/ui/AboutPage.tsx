import { useTranslation } from 'react-i18next';

import { PageLayout } from '@/widgets/PageLayout';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <PageLayout data-testid="about-page-data-testid">
            {t('О сайте')}
        </PageLayout>
    );
};

export default AboutPage;
