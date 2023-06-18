import { FC, memo, useCallback } from 'react';
import { classNames, Mods } from 'shared/lib';
import {
    Avatar, Button, ButtonTheme, Card, Icon, Text, TextSize,
} from 'shared/ui';
import ViewsIcon from 'shared/assets/icons/ViewsIcon.svg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routerConfig } from 'app/providers/router';
import { routePaths } from 'shared/config';
import {
    ArticleParagraphsBlock,
} from '../ArticleParagraphsBlock/ArticleParagraphsBlock';
import {
    Article, ArticleBlockText, ArticleBlockType, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView
}

export const ArticleListItem: FC<ArticleListItemProps> = memo(
    (props: ArticleListItemProps) => {
        const {
            className,
            article,
            view,
        } = props;
        const mods: Mods = {};
        const { t } = useTranslation('article');
        const navigate = useNavigate();
        const onOpenArticle = useCallback(() => {
            navigate(String(article.id));
        }, [article.id, navigate]);

        const textBlock = article.blocks.find((block) => (
            block.type === ArticleBlockType.TEXT
        )) as ArticleBlockText;

        const types = <Text text={article.type.join(', ')} className={cls.type} />;
        const img = <img src={article.img} alt={article.title} className={cls.img} />;
        const views = (
            <>
                <Text text={article.views} className={cls.views} />
                <Icon Svg={ViewsIcon} className={cls.icon} />
            </>
        );
        const createdAt = <Text text={article.createdAt} className={cls.createdAt} />;

        if (view === 'BIG') {
            return (
                <div className={classNames(cls.articleListItem, mods, [className, cls[view]])}>
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Avatar size={30} className={cls.avatar} src={article.user.avatar} />
                            <Text text={article.user.username} />
                            {createdAt}
                        </div>
                        <Text
                            title={article.title}
                            size={TextSize.SIZE_L}
                            className={cls.title}
                        />
                        {types}
                        <div className={cls.imgWrapper}>
                            {img}
                        </div>
                        {textBlock && (
                            <ArticleParagraphsBlock
                                block={textBlock}
                                className={cls.textBlock}
                            />
                        )}
                        <div className={cls.footer}>
                            <Button
                                onClick={onOpenArticle}
                                theme={ButtonTheme.OUTLINED}
                            >
                                {t('Читать далее')}
                            </Button>
                            {views}
                        </div>
                    </Card>
                </div>
            );
        }
        return (
            <div
                onClick={onOpenArticle}
                className={classNames(cls.articleListItem, mods, [className, cls[view]])}
            >
                <Card className={cls.card}>
                    <div className={cls.imgWrapper}>
                        {img}
                        {createdAt}
                    </div>
                    <div className={cls.cardInfo}>
                        {types}
                        {views}
                    </div>
                    <Text title={article.title} className={cls.title} />
                </Card>
            </div>
        );
    },
);
