import { FC } from 'react';
import { classNames, Mods } from 'shared/lib';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { Page } from 'shared/ui';

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className,
    } = props;
    const mods: Mods = {};

    return (
        <Page className={classNames('', mods, [className])}>
            <EditableProfileCard />
        </Page>
    );
};

export default ProfilePage;
