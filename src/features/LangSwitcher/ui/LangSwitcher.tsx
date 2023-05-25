import { FC } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={toggleLanguage}
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};
