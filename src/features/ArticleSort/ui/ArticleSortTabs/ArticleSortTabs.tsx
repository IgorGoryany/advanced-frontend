import { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, Mods } from '@/shared/lib';
import { TabItem, Tabs } from '@/shared/ui';
import { ArticleType } from '@/entities/Article';

interface ArticleSortTabsProps {
    className?: string;
    type: ArticleType;
    onTabClick: (tab: TabItem<ArticleType>) => void
}

export const ArticleSortTabs: FC<ArticleSortTabsProps> = memo(
    (props: ArticleSortTabsProps) => {
        const {
            className,
            onTabClick,
            type,
        } = props;
        const mods: Mods = {};
        const { t } = useTranslation('article');

        const tabs = useMemo<TabItem<ArticleType>[]>(() => [
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
            {
                value: ArticleType.POLITICS,
                content: t('Политика'),
            },
            {
                value: ArticleType.ALL,
                content: t('Все статьи'),
            },
        ], [t]);

        return (
            <Tabs<ArticleType>
                tabs={tabs}
                onTabClick={onTabClick}
                value={type}
                className={classNames('', mods, [className])}
            />
        );
    },
);
