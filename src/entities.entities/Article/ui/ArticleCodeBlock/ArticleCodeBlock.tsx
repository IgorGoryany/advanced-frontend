import { FC, memo } from 'react';
import { classNames } from 'shared/lib';
import { Code } from 'shared/ui/Code/Code';
import { ArticleBlockCode } from '../../model/types/article';
import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
    className?: string;
    block: ArticleBlockCode
}

export const ArticleCodeBlock: FC<ArticleCodeBlockProps> = memo(
    (props: ArticleCodeBlockProps) => {
        const {
            className,
            block,
        } = props;

        return (
            <Code className={classNames(cls.codeBlock, {}, [className])}>
                {block.code}
            </Code>
        );
    },
);
