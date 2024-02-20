import { FC, useRef } from 'react';
import { classNames, Mods } from 'shared/lib';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { PageLayout } from 'widgets/PageLayout';
import { useParams } from 'react-router-dom';

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
