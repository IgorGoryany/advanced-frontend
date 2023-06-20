import { FC } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <Page className={classNames(cls.notFoundPage, {}, [className])}>
            <div>
                {t('Страница не найдена')}
            </div>
        </Page>
    );
};
