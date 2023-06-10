import { FC } from 'react';
import { classNames, Mods } from 'shared/lib';
import { EditableProfileCard } from 'features/EditableProfileCard';

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
            <EditableProfileCard />
        </div>
    );
};

export default ProfilePage;
