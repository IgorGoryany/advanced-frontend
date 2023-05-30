import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <main>
            {t('Главная страница')}
        </main>
    );
};

export default MainPage;
