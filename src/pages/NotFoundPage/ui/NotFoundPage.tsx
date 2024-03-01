import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import { PageLayout } from '@/widgets/PageLayout';

import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <PageLayout className={classNames(cls.notFoundPage, {}, [className])}>
            <div>
                {t('Страница не найдена')}
            </div>
        </PageLayout>
    );
};
