import {
    FC, memo, useCallback, useState,
} from 'react';
import { classNames, Mods } from '../../lib';
import cls from './StarRating.module.scss';
import { HStack } from '../Stack/HStack/HStack';
import StarIcon from '@/shared/assets/icons/Star.svg?react';
import { Icon } from '@/shared/ui';

interface StarRatingProps {
    className?: string;
    size?: number
    onSelect?: (starNumber: number) => void
    selectedStars?: number
}

const startsNumbers = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo(
    (props: StarRatingProps) => {
        const {
            className,
            selectedStars = 0,
            size,
            onSelect,
        } = props;
        const [currentStar, setCurrentStar] = useState(selectedStars);
        const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

        const onHover = (starNumber: number) => () => {
            if (!isSelected) {
                setCurrentStar(starNumber);
            }
        };

        const onLeave = useCallback(() => {
            if (!isSelected) {
                setCurrentStar(0);
            }
        }, [isSelected]);

        const onClick = (starNumber: number) => () => {
            if (!isSelected) {
                onSelect?.(starNumber);
                setCurrentStar(starNumber);
                setIsSelected(true);
            }
        };

        const mods: Mods = {
            [cls.starIcon]: !isSelected,
        };

        return (
            <HStack
                max
                className={classNames('', {}, [className])}
                justify="center"
                gap="4"
            >
                {startsNumbers.map((starNumber) => (
                    <Icon
                        Svg={StarIcon}
                        className={classNames('', mods, [
                            currentStar >= starNumber ? cls.hovered : cls.normal,
                        ])}
                        width={size}
                        height={size}
                        onMouseEnter={onHover(starNumber)}
                        onMouseLeave={onLeave}
                        onClick={onClick(starNumber)}
                    />
                ))}
            </HStack>
        );
    },
);
