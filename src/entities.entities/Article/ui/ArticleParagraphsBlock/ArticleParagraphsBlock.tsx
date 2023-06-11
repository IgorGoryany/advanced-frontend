import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { Text } from 'shared/ui';
import { ArticleBlockText } from '../../model/types/article';
import cls from './ArticleParagraphsBlock.module.scss';

interface ArticleParagraphsBlockProps {
    className?: string;
    block: ArticleBlockText
}

export const ArticleParagraphsBlock: FC<ArticleParagraphsBlockProps> = memo(
    (props: ArticleParagraphsBlockProps) => {
        const {
            className,
            block,
        } = props;

        const mods: Mods = {};

        return (
            <div className={classNames(cls.paragraphsBlock, mods, [className])}>
                {block.title && <Text title={block.title} />}
                {block.paragraphs.map((paragraph) => (
                    <Text
                        text={paragraph}
                        key={paragraph}
                        className={cls.paragraph}
                    />
                ))}
            </div>
        );
    },
);
