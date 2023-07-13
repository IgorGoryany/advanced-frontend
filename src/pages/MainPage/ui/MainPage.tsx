import { useTranslation } from 'react-i18next';
import { PageLayout } from 'widgets/PageLayout';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <PageLayout>
            <div>{t('Главная страница')}</div>
        </PageLayout>
    );
};

export default MainPage;
