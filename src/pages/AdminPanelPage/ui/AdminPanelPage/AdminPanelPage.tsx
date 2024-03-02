import {
    FC, memo,
} from 'react';
import { useTranslation } from 'react-i18next';

import { PageLayout } from '@/widgets/PageLayout';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo(
    (props: AdminPanelPageProps) => {
        const {
            className,
        } = props;

        const { t } = useTranslation('admin_panel');
        return (
            <PageLayout
                data-testid="AdminPanelPage"
                className={className}
            >
                {t('Админсая панель')}
            </PageLayout>
        );
    },
);
export default AdminPanelPage;
