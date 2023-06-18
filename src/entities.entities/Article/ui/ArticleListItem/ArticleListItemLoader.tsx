import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import {
    Avatar, Button, ButtonTheme, Card, Icon, Skeleton, Text, TextSize,
} from 'shared/ui';
import ViewsIcon from 'shared/assets/icons/ViewsIcon.svg';

import {
    ArticleParagraphsBlock,
} from '../ArticleParagraphsBlock/ArticleParagraphsBlock';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    view: ArticleView
}

export const ArticleListItemLoader: FC<ArticleListItemProps> = memo(
    (props: ArticleListItemProps) => {
        const {
            className,
            view,
        } = props;
        const mods: Mods = {};

        if (view === 'BIG') {
            return (
                <div className={classNames(cls.articleListItem, mods, [className, cls[view]])}>
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Skeleton width={30} height={30} border="50%" className={cls.avatar} />
                            <Skeleton width={40} height={16} />
                        </div>
                        <Skeleton width={500} height={32} className={cls.title} />
                        <Skeleton width={200} height={16} className={cls.type} />
                        <div className={cls.imgWrapper}>
                            <Skeleton width="100%" height={250} className={cls.img} />
                        </div>
                        <Skeleton width="100%" height={250} className={cls.textBlock} />
                        <div className={cls.footer}>
                            <Skeleton width={100} height={32} />
                        </div>
                    </Card>
                </div>
            );
        }
        return (
            <div className={classNames(cls.articleListItem, mods, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.imgWrapper}>
                        <Skeleton height={200} width={200} className={cls.img} />
                    </div>
                    <div className={cls.cardInfo}>
                        <Skeleton height={16} width={115} className={cls.type} />
                    </div>
                    <Skeleton height={24} width={150} className={cls.title} />
                </Card>
            </div>
        );
    },
);
