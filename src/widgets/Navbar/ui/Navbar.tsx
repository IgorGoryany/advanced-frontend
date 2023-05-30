import React, { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import {
    Button, ButtonTheme, Modal, Portal,
} from 'shared/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleAuthModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleAuthModal}>
                {t('Войти')}
            </Button>
            <Portal>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal onClose={onToggleAuthModal} isOpen={isAuthModal}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Ab beatae consequatur molestias qui
                    voluptates? A enim eveniet explicabo facere id optio
                    sit. Aliquam cumque delectus, dignissimos
                    exercitationem, expedita nisi officiis quia reiciendis
                    sed, similique veniam veritatis. Accusantium
                    animi atque, aut cum, dignissimos dolore eos esse
                    excepturi fugiat laborum nam
                    nisi, officiis qui quod
                    similique ut
                    velit! Ab aliquam architecto aspernatur autem beatae
                    consequuntur cupiditate eaque eos error
                    excepturi facere fuga
                    illum laudantium minima nam
                    necessitatibus officia placeat quidem quo sequi sunt
                    tempore totam ullam vel
                    velit veniam veritatis vero vitae,
                    voluptate voluptatibus.
                    Debitis, fugiat, id? Aperiam cumque perferendis perspiciatis placeat.
                </Modal>
            </Portal>
        </div>
    );
};
