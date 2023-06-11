import {
    FC, memo, useCallback, useEffect,
} from 'react';
import {
    classNames, DynamicModuleLoader, Mods, ReducersList, useAppDispatch,
} from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    Align, Avatar, Icon, Text, TextSize,
} from 'shared/ui';
import ViewsIcon from 'shared/assets/icons/VievsIcon.svg';
import DateIcon from 'shared/assets/icons/DateIcon.svg';
import {
    ArticleParagraphsBlock,
} from '../ArticleParagraphsBlock/ArticleParagraphsBlock';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import {
    fetchArticleDetailsById,
} from '../../model/service/fetchArticleDetailsById/fetchArticleDetailsById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetailsюеуыеюеы/getArticleDetails';
import { ArticleDetailsLoader } from '../ArticleDetailsLoader/ArticleDetailsLoader';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo(
    (props: ArticleDetailsProps) => {
        const {
            className,
            id,
        } = props;

        const mods: Mods = {};

        const { t } = useTranslation('article');
        const dispatch = useAppDispatch();

        const articleDetails = useSelector(getArticleDetailsData);
        const isLoading = useSelector(getArticleDetailsIsLoading);
        const error = useSelector(getArticleDetailsError);

        const renderBlock = useCallback((block: ArticleBlock) => {
            switch (block.type) {
            case ArticleBlockType.CODE:
                return <ArticleCodeBlock key={block.id} block={block} />;
            case ArticleBlockType.IMAGE:
                return <ArticleImageBlock key={block.id} block={block} />;
            case ArticleBlockType.TEXT:
                return <ArticleParagraphsBlock key={block.id} block={block} />;
            default:
                return null;
            }
        }, []);

        let content;

        if (isLoading) {
            content = (
                <ArticleDetailsLoader
                    avatar={cls.avatar}
                    title={cls.title}
                    subTitle={cls.subTitle}
                    text={cls.text}
                />
            );
        } else if (error) {
            content = (
                <Text
                    align={Align.CENTER}
                    title={t('Произошла ошибка при загрузке статьи')}
                />
            );
        } else {
            content = (
                <>
                    <Avatar size={200} src={articleDetails?.img} zoom={1.2} className={cls.avatar} />
                    <Text
                        title={articleDetails?.title}
                        text={articleDetails?.subtitle}
                        className={cls.title}
                        size={TextSize.SIZE_L}
                    />
                    <div className={cls.info}>
                        <Icon Svg={ViewsIcon} className={cls.icon} />
                        <Text text={articleDetails?.views} />
                    </div>
                    <div className={cls.info}>
                        <Icon Svg={DateIcon} className={cls.icon} />
                        <Text text={articleDetails?.createdAt} />
                    </div>
                    {articleDetails?.blocks.map(renderBlock)}
                </>
            );
        }
        useEffect(() => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchArticleDetailsById(id));
            }
        }, [dispatch, id]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                <div className={classNames(cls.articleDetails, mods, [className])}>
                    {content}
                </div>
            </DynamicModuleLoader>
        );
    },
);
