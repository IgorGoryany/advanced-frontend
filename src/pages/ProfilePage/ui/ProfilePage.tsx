import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { classNames, Mods } from '@/shared/lib';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { PageLayout } from '@/widgets/PageLayout';

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className,
    } = props;
    const mods: Mods = {};
    const { id } = useParams<{ id: string }>();

    return (
        <PageLayout className={classNames('', mods, [className])}>
            <EditableProfileCard id={id} />
        </PageLayout>
    );
};

export default ProfilePage;
