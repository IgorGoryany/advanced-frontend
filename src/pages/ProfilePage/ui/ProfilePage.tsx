import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { EditableProfileCard } from '@/features/EditableProfileCard';
import { PageLayout } from '@/widgets/PageLayout';

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className,
    } = props;
    const { id } = useParams<{ id: string }>();

    return (
        <PageLayout
            data-testid="ProfilePage"
            className={className}
        >
            <EditableProfileCard id={id} />
        </PageLayout>
    );
};

export default ProfilePage;
