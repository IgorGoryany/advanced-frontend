import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import {
    AppLink,
    Avatar, Button, ButtonTheme, Card, Icon, Text, TextSize,
} from 'shared/ui';
import ViewsIcon from 'shared/assets/icons/ViewsIcon.svg';
import { useTranslation } from 'react-i18next';
import { routePaths } from 'shared/config';
import { ArticleBlockType } from 'entities.entities/Article/model/consts/ArticleType';
import {
    ArticleParagraphsBlock,
} from '../ArticleParagraphsBlock/ArticleParagraphsBlock';
import {
    Article, ArticleBlockText, ArticlesView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticlesView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem: FC<ArticleListItemProps> = memo(
    (props: ArticleListItemProps) => {
        const {
            className,
            article,
            view,
            target,
        } = props;
        const mods: Mods = {};
        const { t } = useTranslation('article');

        const textBlock = article.blocks?.find((block) => (
            block.type === ArticleBlockType.TEXT
        )) as ArticleBlockText;

        const types = <Text text={article.type?.join(', ')} className={cls.type} />;
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
                            size={TextSize.L}
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
                            <AppLink to={routePaths.article_details + article.id}>
                                <Button
                                    theme={ButtonTheme.OUTLINED}
                                >
                                    {t('Читать далее')}
                                </Button>
                            </AppLink>
                            {views}
                        </div>
                    </Card>
                </div>
            );
        }
        return (
            <AppLink
                to={routePaths.article_details + article.id}
                target={target}
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
            </AppLink>
        );
    },
);
