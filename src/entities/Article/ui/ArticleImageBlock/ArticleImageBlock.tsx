import { FC, memo } from 'react';
import { classNames, Mods } from '@/shared/lib';
import { Text } from '@/shared/ui';
import { ArticleBlockImage } from '../../model/types/article';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
    className?: string;
    block: ArticleBlockImage
}

export const ArticleImageBlock: FC<ArticleImageBlockProps> = memo(
    (props: ArticleImageBlockProps) => {
        const {
            className,
            block,
        } = props;

        const mods: Mods = {};

        return (
            <div className={classNames(cls.imageBlock, mods, [className])}>
                <img src={block.src} alt={block.src} />
                {block.title && <Text text={block.title} />}
            </div>
        );
    },
);
