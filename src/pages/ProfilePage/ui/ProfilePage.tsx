import { FC } from 'react';
import { classNames, Mods } from 'shared/lib';
import { EditableProfileCard, ProfilePageHeader } from 'features/EditableProfileCard';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className,
    } = props;
    const mods: Mods = {};

    return (
        <div className={classNames(cls.profilePage, mods, [className])}>
            <ProfilePageHeader />
            <EditableProfileCard />
        </div>
    );
};

export default ProfilePage;
