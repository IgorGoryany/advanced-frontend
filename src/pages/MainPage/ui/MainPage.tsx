import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <main>
            {t('Главная страница')}
        </main>
    );
};

export default MainPage;
