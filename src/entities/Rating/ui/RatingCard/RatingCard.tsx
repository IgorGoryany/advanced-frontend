import {
    FormEvent, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods, useDevice } from '@/shared/lib';
import {
    Button,
    ButtonTheme,
    Card,
    HStack,
    Input,
    Modal,
    StarRating,
    Text,
    VStack,
    Drawer,
} from '@/shared/ui';

interface RatingCardProps {
    className?: string;
    title: string;
    selectedStars?: number;
    hasFeedback?: boolean;
    FeedbackTitle?: string;
    onCancel?: (starNumber: number) => void;
    onAccept?: (starNumber: number, feedback?: string) => void
}

export const RatingCard = memo(
    (props: RatingCardProps) => {
        const {
            className,
            title,
            onCancel,
            onAccept,
            hasFeedback,
            FeedbackTitle,
            selectedStars = 0,
        } = props;

        const mods: Mods = {};

        const isMobile = useDevice();

        const [isModalOpen, setIsModalOpen] = useState(false);
        const [startsCount, setStarsCount] = useState(selectedStars);
        const [feedbackValue, setFeedbackValue] = useState('');

        const onSelectStars = useCallback((starNumber: number) => {
            setStarsCount(starNumber);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(starNumber);
            }
        }, [hasFeedback, onAccept]);

        const onCancelGiveFeedback = useCallback(() => {
            onCancel?.(startsCount);
            setIsModalOpen(false);
        }, [onCancel, startsCount]);

        const onChange = useCallback((value: string) => {
            setFeedbackValue(value);
        }, []);

        const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onAccept?.(startsCount, feedbackValue);
            setIsModalOpen(false);
        }, [feedbackValue, onAccept, startsCount]);

        const { t } = useTranslation();

        const content = (
            <>
                <Text title={FeedbackTitle} />
                <Input
                    value={feedbackValue}
                    onChange={onChange}
                    placeholder={t('Ваш отзыв')}
                />
            </>
        );

        return (
            <Card className={classNames('', mods, [className])}>
                <VStack max gap="16" justify="center" align="center">
                    <Text title={title} />
                    <StarRating
                        selectedStars={selectedStars}
                        onSelect={onSelectStars}
                        size={50}
                    />
                </VStack>
                {!isMobile && (
                    <Modal lazy isOpen={isModalOpen} onClose={onCancelGiveFeedback}>
                        <form onSubmit={onSubmit}>
                            <VStack max gap={32}>
                                {content}
                                <HStack max justify="end" gap={16}>
                                    <Button theme={ButtonTheme.OUTLINED_RED} onClick={onCancelGiveFeedback}>
                                        {t('Закрыть')}
                                    </Button>
                                    <Button theme={ButtonTheme.OUTLINED} type="submit">
                                        {t('Отправить')}
                                    </Button>
                                </HStack>
                            </VStack>
                        </form>
                    </Modal>
                )}
                {isMobile && (
                    <Drawer isOpen={isModalOpen} onClose={onCancelGiveFeedback}>
                        <form onSubmit={onSubmit}>
                            <VStack max gap={32}>
                                {content}
                                <Button max theme={ButtonTheme.OUTLINED} type="submit">
                                    {t('Отправить')}
                                </Button>
                            </VStack>
                        </form>
                    </Drawer>
                )}
            </Card>
        );
    },
);
