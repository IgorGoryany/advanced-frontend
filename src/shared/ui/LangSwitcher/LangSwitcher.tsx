import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../lib';
import { Button, ButtonTheme } from '../../ui';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            onClick={toggleLanguage}
            theme={ButtonTheme.CLEAR_INVERTED}
            className={classNames('', {}, [className])}
        >
            {short ? t('Сокращение от язык') : t('Язык')}
        </Button>
    );
});
