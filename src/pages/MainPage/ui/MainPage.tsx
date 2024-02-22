import { useTranslation } from 'react-i18next';
import { PageLayout } from '@/widgets/PageLayout';
import { StarRating } from '@/shared/ui';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <PageLayout>
            <div>{t('Главная страница')}</div>
        </PageLayout>
    );
};

export default MainPage;
