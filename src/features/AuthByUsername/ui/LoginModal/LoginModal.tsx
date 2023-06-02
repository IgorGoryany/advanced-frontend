import { FC, useCallback } from 'react';
import { Modal } from 'shared/ui';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../model/slice/loginSlice';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const {
        isOpen,
        onClose,
    } = props;
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        onClose();
        dispatch(loginAction.clearForm());
    }, [dispatch, onClose]);

    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onCloseModal}
        >
            <LoginForm />
        </Modal>
    );
};
