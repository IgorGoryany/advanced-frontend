import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { ArticleDetails } from 'entities.entities/Article';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text, TextTheme } from 'shared/ui';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailPageProps> = (props: ArticleDetailPageProps) => {
    const {
        className,
    } = props;
    const mods: Mods = {};
    const { id } = useParams();
    const { t } = useTranslation('article');

    if (id) {
        return (
            <div className={classNames(cls.articleDetailPage, mods, [className])}>
                <ArticleDetails id={id} />
            </div>
        );
    }

    if (__PROJECT__ === 'storybook') {
        return (
            <div className={classNames(cls.articleDetailPage, mods, [className])}>
                <ArticleDetails id="1" />
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleDetailPage, mods, [className])}>
            <Text
                title={t('Не удалось загрузить статью')}
                text={t('Попробуйте перезагрузить страницу')}
                theme={TextTheme.ERROR}
            />
        </div>
    );
};

export default memo(ArticleDetailsPage);
