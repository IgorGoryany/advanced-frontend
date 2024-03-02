import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Text, TextAlign } from '@/shared/ui';
import { PageLayout } from '@/widgets/PageLayout';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage: FC<ForbiddenPageProps> = memo(
    (props: ForbiddenPageProps) => {
        const {
            className,
        } = props;

        const { t } = useTranslation();
        return (
            <PageLayout
                data-testid="ForbiddenPage"
                className={className}
            >
                <Text title={t('У вас нет доступа к этой странице')} titleAlign={TextAlign.CENTER} />
            </PageLayout>
        );
    },
);
