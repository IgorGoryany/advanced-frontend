import { FC, useEffect } from 'react';
import {
    classNames, DynamicModuleLoader, Mods, ReducersList, useAppDispatch,
} from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { fetchingProfileData, ProfileCard, profileReducer } from 'entities.entities/Profile';
import cls from './ProfilePage.module.scss';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const {
        className,
    } = props;
    const mods: Mods = {};
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchingProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.profilePage, mods, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
