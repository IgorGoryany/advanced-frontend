import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailPageProps> = (props: ArticleDetailPageProps) => {
    const {
        className,
    } = props;

    const mods: Mods = {};

    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.articleDetailPage, mods, [className])}>
            {t('Article details page')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
