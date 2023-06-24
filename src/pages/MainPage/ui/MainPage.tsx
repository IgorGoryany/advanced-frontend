import { useTranslation } from 'react-i18next';
import { PageLayout } from 'widgets/PageLayout';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <PageLayout>
            {t('Главная страница')}
        </PageLayout>
    );
};

export default MainPage;
