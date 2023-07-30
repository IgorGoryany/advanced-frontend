import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign } from 'shared/ui';
import { PageLayout } from 'widgets/PageLayout';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage: FC<ForbiddenPageProps> = memo(
    (props: ForbiddenPageProps) => {
        const {
            className,
        } = props;

        const mods: Mods = {};

        const { t } = useTranslation();
        return (
            <PageLayout className={classNames('', mods, [className])}>
                <Text title={t('У вас нет доступа к этой странице')} titleAlign={TextAlign.CENTER} />
            </PageLayout>
        );
    },
);
