import { FC, Suspense } from 'react';
import { Loader, Modal } from 'shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        isOpen,
        onClose,
    } = props;

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
