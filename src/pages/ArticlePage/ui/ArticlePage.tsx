import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage: FC<ArticlePageProps> = (props: ArticlePageProps) => {
    const {
        className,
    } = props;

    const mods: Mods = {};

    const { t } = useTranslation('article');
    return (
        <div className={classNames(cls.articlePage, mods, [className])}>
            {t('Article page')}
        </div>
    );
};
export default memo(ArticlePage);
