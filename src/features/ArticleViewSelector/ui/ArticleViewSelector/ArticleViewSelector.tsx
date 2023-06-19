import React, { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { ArticlesView } from 'entities.entities/Article';
import SmallArticleViewIcon from 'shared/assets/icons/SmallArticleViewIcon.svg';
import BigArticleViewIcon from 'shared/assets/icons/BigArticleViewIcon.svg';
import { Button, ButtonTheme, Icon } from 'shared/ui';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticlesView
    onViewClick?: (view: ArticlesView) => void
}

interface ViewButtonType {
    view: ArticlesView
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

const viewTypes: ViewButtonType[] = [
    {
        view: 'SMALL',
        icon: SmallArticleViewIcon,
    },
    {
        view: 'BIG',
        icon: BigArticleViewIcon,
    },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = memo(
    (props: ArticleViewSelectorProps) => {
        const {
            className,
            view,
            onViewClick,
        } = props;
        const mods: Mods = {};

        const onViewClickHandler = (newView: ArticlesView) => () => {
            onViewClick?.(newView);
        };

        const { t } = useTranslation();
        return (
            <div className={classNames(cls.articleViewSelector, mods, [className])}>
                {viewTypes.map((viewType) => (
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={onViewClickHandler(viewType.view)}
                        key={viewType.view}
                        className={cls.viewBtn}
                    >
                        <Icon
                            Svg={viewType.icon}
                            className={classNames(
                                cls.icon,
                                { [cls.notSelected]: viewType.view !== view },
                                [],
                            )}
                        />
                    </Button>
                ))}
            </div>
        );
    },
);
