import { FC, memo } from 'react';
import { classNames, Mods } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { PageLayout } from 'widgets/PageLayout';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage: FC<AdminPanelPageProps> = memo(
    (props: AdminPanelPageProps) => {
        const {
            className,
        } = props;

        const mods: Mods = {};

        const { t } = useTranslation('admin_panel');
        return (
            <PageLayout className={classNames('', mods, [className])}>
                {t('Админсая панель')}
            </PageLayout>
        );
    },
);
export default AdminPanelPage;
