import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';

// Компонент для тестированния ErrorBoundary
export const BugButton = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);
    return (
        <Button
            onClick={() => setError((prevState) => !prevState)}
        >
            {t('бросить ошибку')}
        </Button>
    );
};
