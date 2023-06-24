import { FC } from 'react';
import { classNames, Mods } from 'shared/lib';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { PageLayout } from 'widgets/PageLayout';

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className,
    } = props;
    const mods: Mods = {};

    return (
        <PageLayout className={classNames('', mods, [className])}>
            <EditableProfileCard />
        </PageLayout>
    );
};

export default ProfilePage;
