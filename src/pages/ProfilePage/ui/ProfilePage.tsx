import { FC } from 'react';
import {
    classNames, DynamicModuleLoader, Mods, ReducersList,
} from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities.entities/Profile';
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
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.profilePage, mods, [className])}>
                {t('Страница профиля')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
