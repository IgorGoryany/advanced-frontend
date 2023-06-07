import { FC } from 'react';
import { classNames, Mods } from 'shared/lib';
import { EditableProfileCard, ProfilePageHeader } from 'features/EditableProfileCard';

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className,
    } = props;
    const mods: Mods = {};

    return (
        <div className={classNames('', mods, [className])}>
            <ProfilePageHeader />
            <EditableProfileCard />
        </div>
    );
};

export default ProfilePage;
