import { useTranslation } from 'react-i18next';

import { PageLayout } from '@/widgets/PageLayout';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <PageLayout data-testid="AboutPage">
            {t('О сайте')}
        </PageLayout>
    );
};

export default AboutPage;
