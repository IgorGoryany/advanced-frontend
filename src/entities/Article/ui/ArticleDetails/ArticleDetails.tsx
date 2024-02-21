import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    classNames, DynamicModuleLoader, Mods, ReducersList, useAppDispatch,
} from '@/shared/lib';
import {
    TextAlign, Avatar, Icon, Text, TextSize, VStack, HStack,
} from '@/shared/ui';
import ViewsIcon from '@/shared/assets/icons/ViewsIcon.svg';
import DateIcon from '@/shared/assets/icons/DateIcon.svg';
import { ArticleBlockType } from '../../model/consts/ArticleType';
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
} from '../../model/selectors/getArticleDetails/getArticleDetails';
import { ArticleDetailsLoader } from '../ArticleDetailsLoader/ArticleDetailsLoader';
import { ArticleBlock } from '../../model/types/article';
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

        useEffect(() => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchArticleDetailsById(id));
            }
        }, [dispatch, id]);

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
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке статьи')}
                />
            );
        } else {
            content = (
                <VStack gap="16" max>
                    <HStack justify="center" max>
                        <Avatar size={200} src={articleDetails?.img} zoom={1.2} />
                    </HStack>
                    <Text
                        title={articleDetails?.title}
                        text={articleDetails?.subtitle}
                        className={cls.title}
                        size={TextSize.L}
                    />
                    <VStack>
                        <HStack gap="8" className={cls.info}>
                            <Icon Svg={ViewsIcon} />
                            <Text text={articleDetails?.views} />
                        </HStack>
                        <HStack gap="8" className={cls.info}>
                            <Icon Svg={DateIcon} />
                            <Text text={articleDetails?.createdAt} />
                        </HStack>
                    </VStack>
                    {articleDetails?.blocks.map(renderBlock)}
                </VStack>
            );
        }

        return (
            <DynamicModuleLoader reducers={reducers}>
                <div className={classNames(cls.articleDetails, mods, [className])}>
                    {content}
                </div>
            </DynamicModuleLoader>
        );
    },
);
