import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList } from 'entities.entities/Article';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
    className?: string;
}

const ArticlePage: FC<ArticlePageProps> = (props: ArticlePageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('article');
    const mods: Mods = {};

    return (
        <div className={classNames(cls.articlePage, mods, [className])}>
            <ArticleList
                view="BIG"
                isLoading
                articles={[]}
            />
        </div>
    );
};
export default memo(ArticlePage);
